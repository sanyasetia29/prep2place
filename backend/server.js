
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/prep2place";

const ALLOWED_COURSES = ["BCA", "BBA", "MBA", "MCA"];

const normalize = (value) =>
  String(value || "").trim().toLowerCase();

// ==================== EMAIL CONFIGURATION ====================

const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// OTP temporary storage
const otpStore = new Map();

function createOtp() {
  return crypto.randomInt(100000, 1000000).toString();
}

function hashOtp(otp) {
  return crypto.createHash("sha256").update(otp).digest("hex");
}

// ==================== USER MODEL ====================

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, sparse: true },
    name: { type: String, required: true, trim: true },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    role: { type: String, default: "student" },
    course: {
      type: String,
      enum: ["", "BCA", "BBA", "MBA", "MCA"],
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// ==================== QUESTION MODEL ====================

const aptitudeQuestionSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, sparse: true },
    topic: { type: String, required: true, trim: true },
    difficulty: { type: String, default: "Easy" },
    type: { type: String, default: "MCQ" },
    question: { type: String, required: true, trim: true },
    options: { type: [String], default: [] },
    answer: { type: String, required: true },
    explanation: { type: String, default: "" },
  },
  { timestamps: true }
);

const AptitudeQuestion = mongoose.model(
  "AptitudeQuestion",
  aptitudeQuestionSchema
);

// ==================== QUIZ ATTEMPT MODEL ====================

const quizAttemptSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, sparse: true },
    studentName: { type: String, default: "Student" },
    studentEmail: { type: String, default: "" },
    topic: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    totalQuestions: { type: Number, required: true, default: 0 },
    accuracy: { type: Number, default: 0 },
    attemptedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const QuizAttempt = mongoose.model("QuizAttempt", quizAttemptSchema);

// ==================== DATABASE HELPERS ====================

async function nextId(Model) {
  const latest = await Model.findOne({ id: { $exists: true } })
    .sort({ id: -1 })
    .select("id")
    .lean();

  return (latest?.id || 0) + 1;
}

// ==================== ADMIN MIDDLEWARE ====================

async function checkAdmin(req, res, next) {
  try {
    const username = normalize(req.headers["x-admin-username"]);

    if (!username) {
      return res.status(401).json({
        success: false,
        message: "Admin access required.",
      });
    }

    const admin = await User.findOne({
      username,
      role: "admin",
    });

    if (!admin) {
      return res.status(403).json({
        success: false,
        message: "Admin access required.",
      });
    }

    req.admin = admin;
    next();
  } catch (error) {
    next(error);
  }
}

// ==================== STATUS ====================

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Prep 2 Place backend running.",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

// ==================== SEND REGISTRATION OTP ====================

app.post("/api/send-registration-otp", async (req, res, next) => {
  try {
    const cleanEmail = normalize(req.body.email);

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return res.status(500).json({
        success: false,
        message: "Email configuration is missing in backend .env file.",
      });
    }

    const existingUser = await User.findOne({ email: cleanEmail });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered.",
      });
    }

    const existingOtp = otpStore.get(cleanEmail);

    if (
      existingOtp &&
      Date.now() - existingOtp.createdAt < 60 * 1000
    ) {
      return res.status(429).json({
        success: false,
        message: "Please wait 60 seconds before requesting another OTP.",
      });
    }

    const otp = createOtp();

    otpStore.set(cleanEmail, {
      otpHash: hashOtp(otp),
      createdAt: Date.now(),
      expiresAt: Date.now() + 5 * 60 * 1000,
      attempts: 0,
    });

    try {
      await emailTransporter.sendMail({
        from: `"Prep 2 Place" <${process.env.EMAIL_USER}>`,
        to: cleanEmail,
        subject: "Your Prep 2 Place Registration OTP",
        text: `Your Prep 2 Place verification OTP is ${otp}. It is valid for 5 minutes. Do not share this OTP with anyone.`,
        html: `
          <div style="font-family:Arial,sans-serif;padding:20px">
            <h2>Welcome to Prep 2 Place!</h2>
            <p>Your email verification OTP is:</p>
            <h1 style="letter-spacing:8px;color:#2563eb">${otp}</h1>
            <p>This OTP is valid for 5 minutes.</p>
            <p>Do not share this OTP with anyone.</p>
          </div>
        `,
      });
    } catch (emailError) {
      otpStore.delete(cleanEmail);
      console.error("Email sending error:", emailError.message);

      return res.status(500).json({
        success: false,
        message: "Unable to send OTP. Please check Gmail configuration.",
      });
    }

    res.json({
      success: true,
      message: "OTP sent successfully to your email.",
    });
  } catch (error) {
    next(error);
  }
});

// ==================== VERIFY OTP AND REGISTER ====================

app.post("/api/verify-registration-otp", async (req, res, next) => {
  try {
    const {
      name,
      username,
      email,
      password,
      course,
      otp,
    } = req.body;

    const cleanName = String(name || "").trim();
    const cleanUsername = normalize(username);
    const cleanEmail = normalize(email);
    const cleanCourse = String(course || "").trim().toUpperCase();
    const cleanOtp = String(otp || "").trim();

    if (
      !cleanName ||
      !cleanUsername ||
      !cleanEmail ||
      !password ||
      !cleanCourse ||
      !cleanOtp
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields and enter your OTP.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!ALLOWED_COURSES.includes(cleanCourse)) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid course.",
      });
    }

    if (cleanOtp.length !== 6 || !/^\d{6}$/.test(cleanOtp)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 6-digit OTP.",
      });
    }

    const savedOtp = otpStore.get(cleanEmail);

    if (!savedOtp) {
      return res.status(400).json({
        success: false,
        message: "Please request an OTP first.",
      });
    }

    if (Date.now() > savedOtp.expiresAt) {
      otpStore.delete(cleanEmail);

      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new OTP.",
      });
    }

    if (savedOtp.attempts >= 5) {
      otpStore.delete(cleanEmail);

      return res.status(429).json({
        success: false,
        message: "Too many incorrect attempts. Please request a new OTP.",
      });
    }

    if (hashOtp(cleanOtp) !== savedOtp.otpHash) {
      savedOtp.attempts += 1;

      return res.status(400).json({
        success: false,
        message: "Incorrect OTP. Please try again.",
      });
    }

    const existingUser = await User.findOne({
      $or: [
        { username: cleanUsername },
        { email: cleanEmail },
      ],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          existingUser.username === cleanUsername
            ? "Username already exists."
            : "Email already registered.",
      });
    }

    const user = await User.create({
      id: await nextId(User),
      name: cleanName,
      username: cleanUsername,
      email: cleanEmail,
      password,
      course: cleanCourse,
      role: "student",
    });

    otpStore.delete(cleanEmail);

    res.status(201).json({
      success: true,
      message: "Email verified and registration successful!",
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        course: user.course,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
});

// ==================== LOGIN ====================

app.post("/api/login", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const loginValue = normalize(username || email);

    if (!loginValue || !password) {
      return res.status(400).json({
        success: false,
        message: "Username/email and password are required.",
      });
    }

    const user = await User.findOne({
      $or: [{ username: loginValue }, { email: loginValue }],
    });

    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid username/email or password.",
      });
    }

    res.json({
      success: true,
      message: "Login successful.",
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        course: user.course || "",
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
});

// ==================== ADMIN STUDENTS ====================

app.get("/api/admin/students", checkAdmin, async (req, res, next) => {
  try {
    const students = await User.find({ role: { $ne: "admin" } })
      .select("-password -__v")
      .sort({ id: 1 });

    res.json({ success: true, students });
  } catch (error) {
    next(error);
  }
});

// ==================== UPDATE STUDENT COURSE ====================

app.patch(
  "/api/admin/students/:username/course",
  checkAdmin,
  async (req, res, next) => {
    try {
      const course = String(req.body.course || "")
        .trim()
        .toUpperCase();

      if (!ALLOWED_COURSES.includes(course)) {
        return res.status(400).json({
          success: false,
          message: "Please select BCA, BBA, MBA or MCA.",
        });
      }

      const student = await User.findOneAndUpdate(
        {
          username: normalize(req.params.username),
          role: { $ne: "admin" },
        },
        { $set: { course } },
        { new: true, runValidators: true }
      ).select("-password");

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found.",
        });
      }

      res.json({
        success: true,
        message: "Student course updated successfully.",
        student: {
          id: student.id,
          name: student.name,
          username: student.username,
          email: student.email,
          course: student.course,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

// ==================== STUDENT APTITUDE QUESTIONS ====================

app.get("/api/aptitude-questions", async (req, res, next) => {
  try {
    const filter = {};

    if (req.query.topic) {
      const safeTopic = String(req.query.topic)
        .trim()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      filter.topic = {
        $regex: `^${safeTopic}$`,
        $options: "i",
      };
    }

    const questions = await AptitudeQuestion.find(filter)
      .select("-__v")
      .sort({ id: 1 });

    res.json({ success: true, questions });
  } catch (error) {
    next(error);
  }
});

// ==================== ADMIN QUESTIONS ====================

async function getAdminQuestions(req, res, next) {
  try {
    const questions = await AptitudeQuestion.find()
      .select("-__v")
      .sort({ id: 1 });

    res.json({ success: true, questions });
  } catch (error) {
    next(error);
  }
}

async function createQuestion(req, res, next) {
  try {
    const {
      topic,
      difficulty,
      type,
      question,
      options,
      answer,
      explanation,
    } = req.body;

    if (
      !String(topic || "").trim() ||
      !String(question || "").trim() ||
      !String(answer || "").trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Topic, question and answer are required.",
      });
    }

    const cleanOptions = Array.isArray(options)
      ? options.map((option) => String(option).trim()).filter(Boolean)
      : [];

    const newQuestion = await AptitudeQuestion.create({
      id: await nextId(AptitudeQuestion),
      topic: String(topic).trim(),
      difficulty: String(difficulty || "Easy").trim(),
      type: String(type || "MCQ").trim(),
      question: String(question).trim(),
      options: cleanOptions,
      answer: String(answer).trim(),
      explanation: String(explanation || "").trim(),
    });

    res.status(201).json({
      success: true,
      message: "Question added successfully.",
      question: newQuestion,
    });
  } catch (error) {
    next(error);
  }
}

async function updateQuestion(req, res, next) {
  try {
    const {
      topic,
      difficulty,
      type,
      question,
      options,
      answer,
      explanation,
    } = req.body;

    const update = {};

    if (topic !== undefined) update.topic = String(topic).trim();
    if (difficulty !== undefined) update.difficulty = String(difficulty).trim();
    if (type !== undefined) update.type = String(type).trim();
    if (question !== undefined) update.question = String(question).trim();
    if (answer !== undefined) update.answer = String(answer).trim();

    if (explanation !== undefined) {
      update.explanation = String(explanation).trim();
    }

    if (options !== undefined) {
      update.options = Array.isArray(options)
        ? options.map((option) => String(option).trim()).filter(Boolean)
        : [];
    }

    const updated = await AptitudeQuestion.findOneAndUpdate(
      { id: Number(req.params.id) },
      { $set: update },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Question not found.",
      });
    }

    res.json({
      success: true,
      message: "Question updated successfully.",
      question: updated,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteQuestion(req, res, next) {
  try {
    const deleted = await AptitudeQuestion.findOneAndDelete({
      id: Number(req.params.id),
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Question not found.",
      });
    }

    res.json({
      success: true,
      message: "Question deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
}

app.get(
  ["/api/admin/questions", "/api/admin/aptitude-questions"],
  checkAdmin,
  getAdminQuestions
);

app.post(
  ["/api/admin/questions", "/api/admin/aptitude-questions"],
  checkAdmin,
  createQuestion
);

app.put(
  ["/api/admin/questions/:id", "/api/admin/aptitude-questions/:id"],
  checkAdmin,
  updateQuestion
);

app.delete(
  ["/api/admin/questions/:id", "/api/admin/aptitude-questions/:id"],
  checkAdmin,
  deleteQuestion
);

// ==================== SAVE QUIZ ATTEMPT ====================

app.post("/api/quiz-attempts", async (req, res, next) => {
  try {
    const {
      studentName,
      studentEmail,
      topic,
      score,
      totalQuestions,
    } = req.body;

    const cleanTopic = String(topic || "").trim();
    const cleanScore = Number(score);
    const cleanTotal = Number(totalQuestions);

    if (
      !cleanTopic ||
      !Number.isFinite(cleanScore) ||
      !Number.isFinite(cleanTotal) ||
      cleanTotal <= 0 ||
      cleanScore < 0 ||
      cleanScore > cleanTotal
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid quiz result details.",
      });
    }

    const attempt = await QuizAttempt.create({
      id: await nextId(QuizAttempt),
      studentName: String(studentName || "Student").trim(),
      studentEmail: normalize(studentEmail),
      topic: cleanTopic,
      score: cleanScore,
      totalQuestions: cleanTotal,
      accuracy: Math.round((cleanScore / cleanTotal) * 100),
      attemptedAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Quiz result saved successfully!",
      attempt,
    });
  } catch (error) {
    next(error);
  }
});

// ==================== ADMIN QUIZ RESULTS ====================

app.get(
  "/api/admin/quiz-attempts",
  checkAdmin,
  async (req, res, next) => {
    try {
      const quizAttempts = await QuizAttempt.find()
        .select("-__v")
        .sort({ attemptedAt: -1 });

      res.json({ success: true, quizAttempts });
    } catch (error) {
      next(error);
    }
  }
);

// ==================== UNKNOWN ROUTE ====================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});

// ==================== ERROR HANDLER ====================

app.use((error, req, res, next) => {
  console.error("Backend error:", error);

  if (error.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "This username or email already exists.",
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  res.status(500).json({
    success: false,
    message: "Something went wrong on the server.",
  });
});

// ==================== START SERVER ====================

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully.");

    const existingAdmin = await User.findOne({ username: "admin" });

    if (!existingAdmin) {
      await User.create({
        id: await nextId(User),
        name: "Prep 2 Place Admin",
        username: "admin",
        email: "admin@prep2place.com",
        password: "Admin@123",
        role: "admin",
        course: "",
      });

      console.log("Default admin account created.");
    }

    app.listen(PORT, () => {
      console.log(`Prep 2 Place backend running at http://localhost:${PORT}`);
      console.log("Default admin username: admin");
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
