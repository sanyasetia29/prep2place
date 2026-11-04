import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((previous) => previous - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSendOtp = async () => {
    setError("");
    setMessage("");

    const cleanEmail = email.trim().toLowerCase();

    if (
      !name.trim() ||
      !username.trim() ||
      !cleanEmail ||
      !password ||
      !course
    ) {
      setError("Please fill all fields and select your course.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE}/send-registration-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: cleanEmail }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Unable to send OTP.");
        return;
      }

      setOtpSent(true);
      setOtp("");
      setCountdown(60);
      setMessage("OTP sent successfully! Please check your email.");
    } catch (err) {
      console.error("Send OTP error:", err);
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!otpSent) {
      setError("Please verify your email first.");
      return;
    }

    const cleanName = name.trim();
    const cleanUsername = username.trim().toLowerCase();
    const cleanEmail = email.trim().toLowerCase();
    const cleanCourse = course.trim().toUpperCase();
    const cleanOtp = otp.trim();

    if (!/^\d{6}$/.test(cleanOtp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE}/verify-registration-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: cleanName,
            username: cleanUsername,
            email: cleanEmail,
            password,
            course: cleanCourse,
            otp: cleanOtp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "OTP verification failed.");
        return;
      }

      if (data.user?.course !== cleanCourse) {
        setError("Registration course verification failed.");
        return;
      }

      alert("Email verified and registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setOtpSent(false);
    setOtp("");
    setCountdown(0);
    setMessage("");
    setError("");
  };

  return (
    <div className="login-page">
      <form className="login-card register-card" onSubmit={handleRegister}>
        <h1>Create Account</h1>

        <p className="register-description">
          Register for Prep 2 Place
        </p>

        <div className="form-group">
          <label htmlFor="register-name">Full Name</label>
          <input
            id="register-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-username">Username</label>
          <input
            id="register-username"
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-course">Select Your Course</label>
          <select
            id="register-course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Choose your course</option>
            <option value="BCA">BCA - Computer Applications</option>
            <option value="BBA">BBA - Business Administration</option>
            <option value="MBA">MBA - Management Studies</option>
            <option value="MCA">MCA - Computer Applications</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>

        {!otpSent ? (
          <button
            type="button"
            onClick={handleSendOtp}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send Email OTP"}
          </button>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="register-otp">Enter Email OTP</label>
              <input
                id="register-otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP & Register"}
            </button>

            <button
              type="button"
              className="resend-otp-button"
              onClick={handleSendOtp}
              disabled={loading || countdown > 0}
            >
              {countdown > 0
                ? `Resend OTP in ${countdown}s`
                : loading
                ? "Sending..."
                : "Resend OTP"}
            </button>
          </>
        )}

        {message && (
          <p className="register-description">{message}</p>
        )}

        {error && <p className="login-error">{error}</p>}

        <p className="register-text">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;