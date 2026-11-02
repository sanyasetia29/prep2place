
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/FindTheError.css";

const questions = [
  // C — EASY
  {
    language: "C",
    level: "Easy",
    title: "Find the missing symbol",
    code: '#include <stdio.h>\nint main() {\n    printf("Hello World")\n    return 0;\n}',
    options: [
      "Missing semicolon after printf",
      "Missing return statement",
      "Incorrect main function",
      "Missing quotation marks",
    ],
    answer: 0,
    explanation:
      'C statements usually end with a semicolon. Write printf("Hello World");',
  },
  {
    language: "C",
    level: "Easy",
    title: "Find the variable error",
    code: "#include <stdio.h>\nint main() {\n    int 2number = 10;\n    printf(\"%d\", 2number);\n    return 0;\n}",
    options: [
      "int cannot store 10",
      "A variable name cannot start with a digit",
      "printf cannot print integers",
      "main must return void",
    ],
    answer: 1,
    explanation:
      "A C variable name cannot start with a digit. Use int number = 10; and printf(\"%d\", number);",
  },
  {
    language: "C",
    level: "Easy",
    title: "Check the format specifier",
    code: '#include <stdio.h>\nint main() {\n    int age = 20;\n    printf("%f", age);\n    return 0;\n}',
    options: [
      "%c should print an integer",
      "%s should print an integer",
      "%d is appropriate for an int",
      "printf cannot print variables",
    ],
    answer: 2,
    explanation:
      "Use %d for an int. The %f format specifier is for floating-point values.",
  },

  // C — MEDIUM
  {
    language: "C",
    level: "Medium",
    title: "Check the condition",
    code: "int age = 18;\nif (age = 18) {\n    printf(\"Eligible\");\n}",
    options: [
      "printf needs two arguments",
      "Assignment used instead of comparison",
      "int cannot store 18",
      "Curly braces are not allowed",
    ],
    answer: 1,
    explanation:
      "Use == to compare values. A single = assigns a value. Write if (age == 18).",
  },
  {
    language: "C",
    level: "Medium",
    title: "Find the loop mistake",
    code: "for (int i = 0; i < 5; i--) {\n    printf(\"%d\", i);\n}",
    options: [
      "The loop variable must be a string",
      "printf cannot be used in a loop",
      "The condition must use >",
      "The update moves away from the stopping condition",
    ],
    answer: 3,
    explanation:
      "i starts at 0 and decreases, so i < 5 stays true. Use i++ to reach the stopping condition.",
  },
  {
    language: "C",
    level: "Medium",
    title: "Check the array index",
    code: "int nums[3] = {10, 20, 30};\nprintf(\"%d\", nums[3]);",
    options: [
      "Arrays cannot store integers",
      "Index 3 is outside this array",
      "printf cannot print array elements",
      "Array indexing starts at 1",
    ],
    answer: 1,
    explanation:
      "An array of three elements has indexes 0, 1 and 2. Use nums[2] for the last element.",
  },

  // C — HARD
  {
    language: "C",
    level: "Hard",
    title: "Check the pointer",
    code: "int number = 10;\nint *ptr;\n*ptr = number;",
    options: [
      "Pointers cannot use int",
      "number must be a string",
      "ptr is uninitialized before dereferencing",
      "The * symbol is never valid here",
    ],
    answer: 2,
    explanation:
      "ptr does not point to a valid object yet. Initialize it with int *ptr = &number; before using *ptr.",
  },
  {
    language: "C",
    level: "Hard",
    title: "Find the function error",
    code: "int add(int a, int b) {\n    int sum = a + b;\n}\nint main() {\n    printf(\"%d\", add(2, 3));\n    return 0;\n}",
    options: [
      "The function must return sum",
      "Functions cannot accept two parameters",
      "main cannot call add",
      "int cannot be used as a return type",
    ],
    answer: 0,
    explanation:
      "The function has return type int but does not return a value. Add return sum; inside add.",
  },

  // C++ — EASY
  {
    language: "C++",
    level: "Easy",
    title: "Check the declaration",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int number = 10\n    cout << number;\n    return 0;\n}",
    options: [
      "Incorrect variable name",
      "Missing semicolon after 10",
      "cout cannot print integers",
      "Missing return statement",
    ],
    answer: 1,
    explanation:
      "The variable declaration must end with a semicolon: int number = 10;",
  },
  {
    language: "C++",
    level: "Easy",
    title: "Find the output statement error",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    cout >> \"Hello\";\n    return 0;\n}",
    options: [
      "cout cannot print text",
      "iostream is not a header",
      "main cannot return 0",
      "Use << instead of >> with cout",
    ],
    answer: 3,
    explanation:
      "Use the insertion operator << to send output to cout: cout << \"Hello\";",
  },
  {
    language: "C++",
    level: "Easy",
    title: "Check the comparison",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    if (x = 10) cout << \"Yes\";\n    return 0;\n}",
    options: [
      "Use == to compare x with 10",
      "int cannot store 5",
      "cout cannot appear in an if",
      "The if statement must use a string",
    ],
    answer: 0,
    explanation:
      "A single = assigns 10 to x. Use x == 10 when you want to compare the values.",
  },

  // C++ — MEDIUM
  {
    language: "C++",
    level: "Medium",
    title: "Find the loop mistake",
    code: "for (int i = 0; i < 5; i--) {\n    cout << i << endl;\n}",
    options: [
      "The loop variable must be a string",
      "cout cannot be used in a loop",
      "The condition must use >",
      "The update moves away from the stopping condition",
    ],
    answer: 3,
    explanation:
      "i decreases while the condition requires i < 5. Use i++ so the loop eventually stops.",
  },
  {
    language: "C++",
    level: "Medium",
    title: "Check the array index",
    code: "int nums[3] = {10, 20, 30};\ncout << nums[3];",
    options: [
      "Arrays cannot store integers",
      "Array indexing starts at 1",
      "Index 3 is outside this array",
      "cout cannot print array elements",
    ],
    answer: 2,
    explanation:
      "The valid indexes are 0, 1 and 2. Accessing nums[3] is outside the array bounds.",
  },
  {
    language: "C++",
    level: "Medium",
    title: "Check the string declaration",
    code: '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name = "Aman"\n    cout << name;\n    return 0;\n}',
    options: [
      "Missing semicolon after the string declaration",
      "string cannot store text",
      "cout cannot print strings",
      "The variable must be named text",
    ],
    answer: 0,
    explanation:
      'Add a semicolon after the declaration: string name = "Aman";',
  },

  // C++ — HARD
  {
    language: "C++",
    level: "Hard",
    title: "Check the class access",
    code: "class Student {\n    int marks = 90;\n};\nStudent s;\ncout << s.marks;",
    options: [
      "A class cannot contain int",
      "marks is private by default",
      "Objects cannot be created",
      "cout cannot print class data",
    ],
    answer: 1,
    explanation:
      "C++ class members are private by default. Add public: before marks or provide a public getter.",
  },
  {
    language: "C++",
    level: "Hard",
    title: "Find the reference error",
    code: "int number = 10;\nint &ref;\nref = number;",
    options: [
      "References cannot refer to integers",
      "number must be declared after ref",
      "References must be initialized when declared",
      "The & symbol is never valid in C++",
    ],
    answer: 2,
    explanation:
      "A C++ reference must be initialized when it is declared. Write int &ref = number;",
  },

  // Java — EASY
  {
    language: "Java",
    level: "Easy",
    title: "Find the data type error",
    code: 'int age = "20";\nSystem.out.println(age);',
    options: [
      "println is invalid",
      "age cannot be a variable name",
      "String value assigned to an int",
      "Missing class declaration only",
    ],
    answer: 2,
    explanation:
      'The value "20" is a String. For an int, write int age = 20;',
  },
  {
    language: "Java",
    level: "Easy",
    title: "Check the capitalization",
    code: 'public class Main {\n    public static void main(String[] args) {\n        system.out.println("Hello");\n    }\n}',
    options: [
      "Use System with a capital S",
      "println must be uppercase",
      "String must be lowercase",
      "main cannot print text",
    ],
    answer: 0,
    explanation:
      "Java is case-sensitive. The correct class name is System, so write System.out.println(\"Hello\");",
  },
  {
    language: "Java",
    level: "Easy",
    title: "Find the missing semicolon",
    code: 'public class Main {\n    public static void main(String[] args) {\n        int age = 20\n        System.out.println(age);\n    }\n}',
    options: [
      "main needs an integer parameter",
      "int cannot store age",
      "println cannot print integers",
      "Missing semicolon after the declaration",
    ],
    answer: 3,
    explanation:
      "Java statements need semicolons. Write int age = 20;",
  },

  // Java — MEDIUM
  {
    language: "Java",
    level: "Medium",
    title: "Check the method call",
    code: 'String name = "Aman";\nSystem.out.println(length(name));',
    options: [
      "Use name.length()",
      "Use name.size()",
      "Use name.count()",
      "Use name.length",
    ],
    answer: 0,
    explanation:
      "Java gets a String's length with name.length(). It is a method, so parentheses are required.",
  },
  {
    language: "Java",
    level: "Medium",
    title: "Find the array error",
    code: "int[] numbers = {10, 20, 30};\nSystem.out.println(numbers[3]);",
    options: [
      "Arrays cannot store integers",
      "Arrays start at index 1",
      "println cannot display array values",
      "Index 3 is outside this array",
    ],
    answer: 3,
    explanation:
      "The indexes are 0, 1 and 2. Use numbers[2] for the last element.",
  },
  {
    language: "Java",
    level: "Medium",
    title: "Check the String comparison",
    code: 'String a = new String("Hi");\nString b = new String("Hi");\nSystem.out.println(a == b);',
    options: [
      "String values cannot be compared",
      "== compares object references, not String content",
      "println cannot display Boolean values",
      "Both variables must be integers",
    ],
    answer: 1,
    explanation:
      "For String content comparison, use a.equals(b). The == operator checks whether both references point to the same object.",
  },

  // Java — HARD
  {
    language: "Java",
    level: "Hard",
    title: "Find the static method error",
    code: "public class Main {\n    void greet() {\n        System.out.println(\"Hello\");\n    }\n    public static void main(String[] args) {\n        greet();\n    }\n}",
    options: [
      "Methods cannot print text",
      "main must return int",
      "A non-static method needs an object here",
      "void methods cannot be called",
    ],
    answer: 2,
    explanation:
      "main is static, but greet is an instance method. Create a Main object and call greet(), or make greet static.",
  },
  {
    language: "Java",
    level: "Hard",
    title: "Check the exception",
    code: "public class Main {\n    public static void main(String[] args) {\n        int result = 10 / 0;\n        System.out.println(result);\n    }\n}",
    options: [
      "Integer division by zero throws ArithmeticException",
      "Java does not support int",
      "println must come before result",
      "main cannot contain variables",
    ],
    answer: 0,
    explanation:
      "Integer division by zero throws ArithmeticException. Check the divisor before performing the division.",
  },

  // SQL — EASY
  {
    language: "SQL",
    level: "Easy",
    title: "Find the missing keyword",
    code: "SELECT name Students;",
    options: [
      "Missing WHERE",
      "Missing FROM",
      "Missing ORDER",
      "Missing INSERT",
    ],
    answer: 1,
    explanation:
      "Use FROM to specify the table: SELECT name FROM Students;",
  },
  {
    language: "SQL",
    level: "Easy",
    title: "Check the text value",
    code: "SELECT * FROM Students WHERE name = Aman;",
    options: [
      "Text values usually need single quotes",
      "SELECT cannot use WHERE",
      "Table names must be numbers",
      "WHERE must always come first",
    ],
    answer: 0,
    explanation:
      "Text literals are normally enclosed in single quotes: WHERE name = 'Aman'.",
  },
  {
    language: "SQL",
    level: "Easy",
    title: "Find the missing condition",
    code: "SELECT * FROM Students marks > 80;",
    options: [
      "Missing GROUP BY",
      "Missing UPDATE",
      "Missing WHERE",
      "Missing VALUES",
    ],
    answer: 2,
    explanation:
      "Use WHERE before a filtering condition: SELECT * FROM Students WHERE marks > 80;",
  },

  // SQL — MEDIUM
  {
    language: "SQL",
    level: "Medium",
    title: "Check the aggregate query",
    code: "SELECT name, COUNT(*) FROM Students;",
    options: [
      "COUNT cannot be used in SQL",
      "SELECT cannot retrieve names",
      "Every query must use DELETE",
      "name is mixed with an aggregate without grouping",
    ],
    answer: 3,
    explanation:
      "In standard SQL, selecting name alongside COUNT(*) requires grouping by name or another query design that defines the grouping.",
  },
  {
    language: "SQL",
    level: "Medium",
    title: "Find the sorting mistake",
    code: "SELECT * FROM Students SORT BY marks;",
    options: [
      "Use ORDER BY instead of SORT BY",
      "SELECT cannot use sorting",
      "Use INSERT BY",
      "marks must be in quotes",
    ],
    answer: 0,
    explanation:
      "The standard SQL sorting clause is ORDER BY: SELECT * FROM Students ORDER BY marks;",
  },
  {
    language: "SQL",
    level: "Medium",
    title: "Check NULL comparison",
    code: "SELECT * FROM Students WHERE marks = NULL;",
    options: [
      "NULL must be a number",
      "Use IS NULL to test for NULL",
      "WHERE cannot filter values",
      "Use ORDER NULL",
    ],
    answer: 1,
    explanation:
      "Use IS NULL or IS NOT NULL to test for NULL values, because NULL is not compared using ordinary equality.",
  },

  // SQL — HARD
  {
    language: "SQL",
    level: "Hard",
    title: "Check the update query",
    code: "UPDATE Students SET marks = 90;",
    options: [
      "UPDATE cannot change values",
      "SET is not used in UPDATE",
      "Missing WHERE if only one student's row should change",
      "Every UPDATE needs ORDER BY",
    ],
    answer: 2,
    explanation:
      "Without WHERE, this query updates every row in Students. Add a suitable WHERE condition to target specific rows.",
  },
  {
    language: "SQL",
    level: "Hard",
    title: "Find the join condition error",
    code: "SELECT Students.name, Marks.score\nFROM Students\nJOIN Marks;",
    options: [
      "SELECT cannot use two tables",
      "JOIN cannot be used with FROM",
      "Every table must be deleted first",
      "An explicit JOIN needs a matching ON or USING condition here",
    ],
    answer: 3,
    explanation:
      "For a normal matching join, provide the relationship between tables, such as JOIN Marks ON Students.id = Marks.student_id.",
  },

  // HTML — EASY
  {
    language: "HTML",
    level: "Easy",
    title: "Find the missing closing tag",
    code: "<html>\n<body>\n    <h1>Welcome\n</body>\n</html>",
    options: [
      "Missing closing </h1> tag",
      "h1 cannot display text",
      "body must be inside a paragraph",
      "html cannot contain body",
    ],
    answer: 0,
    explanation:
      "Close the heading with </h1> before the body ends.",
  },
  {
    language: "HTML",
    level: "Easy",
    title: "Check the image attribute",
    code: '<img href="photo.jpg" alt="Photo">',
    options: [
      "img cannot display images",
      "Use src instead of href",
      "alt must contain a URL",
      "Images need a closing </img> tag",
    ],
    answer: 1,
    explanation:
      'Use src for the image path: <img src="photo.jpg" alt="Photo">.',
  },
  {
    language: "HTML",
    level: "Easy",
    title: "Check the link attribute",
    code: '<a src="https://example.com">Visit</a>',
    options: [
      "a cannot contain text",
      "Every link must be a button",
      "Use href instead of src",
      "The closing tag is incorrect",
    ],
    answer: 2,
    explanation:
      'Use href to specify the destination: <a href="https://example.com">Visit</a>.',
  },

  // HTML — MEDIUM
  {
    language: "HTML",
    level: "Medium",
    title: "Check the label connection",
    code: '<label for="email">Email</label>\n<input id="user-email" type="email">',
    options: [
      "Labels cannot be used in forms",
      "input must always contain text",
      "Email must be an h1",
      "The label for and input id do not match",
    ],
    answer: 3,
    explanation:
      'The for and id values should match. Change the input id to "email" or the label for value to "user-email".',
  },
  {
    language: "HTML",
    level: "Medium",
    title: "Find the missing form attribute",
    code: '<form>\n    <input type="text">\n    <button>Submit</button>\n</form>',
    options: [
      "No input is allowed inside form",
      "The button defaults to submit inside a form; the code has no specified issue",
      "A form cannot contain buttons",
      "text is not a valid input type",
    ],
    answer: 1,
    explanation:
      "This snippet is valid HTML: a button inside a form defaults to submit when no type is specified. Add type=\"submit\" for clarity, or type=\"button\" if it should not submit.",
  },

  // HTML — HARD
  {
    language: "HTML",
    level: "Hard",
    title: "Check the duplicate IDs",
    code: '<input id="email">\n<input id="email">',
    options: [
      "IDs should be unique within the document",
      "HTML allows only one input",
      "Every input must have a class",
      "input cannot use id",
    ],
    answer: 0,
    explanation:
      "An id should be unique in a document. Give each input a distinct id.",
  },
  {
    language: "HTML",
    level: "Hard",
    title: "Find the incorrect nesting",
    code: "<p>Paragraph <div>Content</div></p>",
    options: [
      "p cannot contain text",
      "div must always be empty",
      "A div cannot be placed inside a paragraph",
      "HTML does not support paragraphs",
    ],
    answer: 2,
    explanation:
      "A p element cannot contain a div. Close the paragraph before the div or use an appropriate container.",
  },

  // CSS — EASY
  {
    language: "CSS",
    level: "Easy",
    title: "Find the missing semicolon",
    code: "h1 {\n    color: purple\n    font-size: 30px;\n}",
    options: [
      "h1 cannot be styled",
      "Missing semicolon after purple",
      "font-size cannot use px",
      "CSS needs JavaScript here",
    ],
    answer: 1,
    explanation:
      "Add a semicolon after each declaration: color: purple;",
  },
  {
    language: "CSS",
    level: "Easy",
    title: "Check the class selector",
    code: "card {\n    color: blue;\n}",
    options: [
      "color is not a CSS property",
      "blue is not a color",
      "CSS cannot style cards",
      "Use .card to target a class named card",
    ],
    answer: 3,
    explanation:
      "A class selector starts with a dot: .card { color: blue; }",
  },
  {
    language: "CSS",
    level: "Easy",
    title: "Check the property name",
    code: "p {\n    text-colour: red;\n}",
    options: [
      "Use color instead of text-colour",
      "p cannot have a color",
      "red must be a hex code",
      "CSS properties cannot use hyphens",
    ],
    answer: 0,
    explanation:
      "The CSS property is color. Use p { color: red; }.",
  },

  // CSS — MEDIUM
  {
    language: "CSS",
    level: "Medium",
    title: "Find the selector mistake",
    code: "main-title {\n    font-size: 28px;\n}",
    options: [
      "font-size cannot use px",
      "CSS cannot style titles",
      "Use #main-title for an ID or .main-title for a class",
      "Every selector must be an HTML tag",
    ],
    answer: 2,
    explanation:
      "If main-title is an ID, write #main-title. If it is a class, write .main-title.",
  },
  {
    language: "CSS",
    level: "Medium",
    title: "Check the Flexbox declaration",
    code: ".container {\n    display: flexbox;\n    justify-content: center;\n}",
    options: [
      "justify-content cannot center items",
      "Use display: flex",
      "A class selector cannot use a dot",
      "Flexbox does not support containers",
    ],
    answer: 1,
    explanation:
      "Use display: flex; to create a flex container. flexbox is not the correct value for display.",
  },
  {
    language: "CSS",
    level: "Medium",
    title: "Check the margin value",
    code: ".card {\n    margin: 10;\n}",
    options: [
      "margin cannot be used on cards",
      "10 is always a percentage",
      "CSS values never use numbers",
      "Add a unit such as px when using a non-zero length",
    ],
    answer: 3,
    explanation:
      "A non-zero margin length needs a unit, such as margin: 10px;. Zero can be unitless.",
  },

  // CSS — HARD
  {
    language: "CSS",
    level: "Hard",
    title: "Find the specificity issue",
    code: "#content p {\n    color: red;\n}\n.content p {\n    color: blue;\n}",
    options: [
      "The ID selector has higher specificity than the class selector",
      "CSS cannot style paragraphs",
      "red cannot be a text color",
      "The second rule always wins because it appears later",
    ],
    answer: 0,
    explanation:
      "The ID selector has higher specificity, so #content p wins over .content p if both target the same paragraph and no other cascade rules intervene.",
  },
  {
    language: "CSS",
    level: "Hard",
    title: "Check the Grid declaration",
    code: ".grid {\n    display: grid;\n    grid-template-columns: repeat(3);\n}",
    options: [
      "Grid cannot create columns",
      "repeat cannot be used in CSS",
      "repeat needs a count and a track size",
      "display: grid is invalid",
    ],
    answer: 2,
    explanation:
      "repeat() needs a repetition count and track size, such as grid-template-columns: repeat(3, 1fr);",
  },

  // JAVASCRIPT — EASY
  {
    language: "JavaScript",
    level: "Easy",
    title: "Find the missing bracket",
    code: "let x = 5;\nconsole.log(x;",
    options: [
      "let cannot store numbers",
      "console cannot print values",
      "Missing closing parenthesis",
      "x must be a string",
    ],
    answer: 2,
    explanation:
      "Close the function call: console.log(x);",
  },
  {
    language: "JavaScript",
    level: "Easy",
    title: "Check the variable name",
    code: "let 2name = 'Aman';\nconsole.log(2name);",
    options: [
      "A variable name cannot start with a digit",
      "let cannot store strings",
      "console.log cannot print strings",
      "Strings must use double quotes only",
    ],
    answer: 0,
    explanation:
      "JavaScript identifiers cannot start with a digit. Use let name = 'Aman';",
  },
  {
    language: "JavaScript",
    level: "Easy",
    title: "Check the array index",
    code: 'const fruits = ["Apple", "Mango"];\nconsole.log(fruits[2]);',
    options: [
      "Arrays cannot store strings",
      "Index 2 is outside this two-item array",
      "console.log cannot print array items",
      "Arrays start at index 1",
    ],
    answer: 1,
    explanation:
      "The indexes are 0 and 1. fruits[2] returns undefined because that index does not exist.",
  },

  // JAVASCRIPT — MEDIUM
  {
    language: "JavaScript",
    level: "Medium",
    title: "Check the equality operator",
    code: "let value = 5;\nif (value = 10) {\n    console.log('Yes');\n}",
    options: [
      "if cannot contain a condition",
      "console.log cannot print text",
      "value must be a string",
      "Use a comparison operator instead of assignment",
    ],
    answer: 3,
    explanation:
      "A single = assigns 10 to value. Use value === 10 to compare the value and type.",
  },
  {
    language: "JavaScript",
    level: "Medium",
    title: "Find the function return issue",
    code: "function add(a, b) {\n    a + b;\n}\nconsole.log(add(2, 3));",
    options: [
      "Functions cannot accept two values",
      "The function needs return a + b",
      "console.log cannot display numbers",
      "Parameters must be strings",
    ],
    answer: 1,
    explanation:
      "The expression a + b is evaluated but not returned. Write return a + b; to make the function return 5.",
  },
  {
    language: "JavaScript",
    level: "Medium",
    title: "Check the array method",
    code: "const nums = [1, 2];\nnums.add(3);\nconsole.log(nums);",
    options: [
      "Use push(3) to add an item",
      "Arrays cannot contain numbers",
      "console.log cannot display arrays",
      "Use append(3) on JavaScript arrays",
    ],
    answer: 0,
    explanation:
      "JavaScript arrays use push() to add an item to the end: nums.push(3).",
  },

  // JAVASCRIPT — HARD
  {
    language: "JavaScript",
    level: "Hard",
    title: "Check the const reassignment",
    code: "const score = 10;\nscore = 20;\nconsole.log(score);",
    options: [
      "const values must always be strings",
      "console.log cannot print numbers",
      "A const binding cannot be reassigned",
      "Variables cannot store scores",
    ],
    answer: 2,
    explanation:
      "A const binding cannot be reassigned. Use let if score needs to be assigned a new value.",
  },
  {
    language: "JavaScript",
    level: "Hard",
    title: "Find the asynchronous mistake",
    code: "fetch('/api/data')\n    .then(response => response.json)\n    .then(data => console.log(data));",
    options: [
      "fetch cannot use a URL",
      "then cannot be chained",
      "Arrow functions are invalid",
      "Call response.json() as a function",
    ],
    answer: 3,
    explanation:
      "response.json is a method. Use response.json() to parse the response body as JSON.",
  },

  // REACT — EASY
  {
    language: "React",
    level: "Easy",
    title: "Check the component name",
    code: "function welcome() {\n    return <h1>Hello</h1>;\n}\n\nexport default welcome;",
    options: [
      "Components cannot return JSX",
      "A React component should start with a capital letter",
      "h1 is not valid JSX",
      "Every component must use class syntax",
    ],
    answer: 1,
    explanation:
      "React function component names should start with a capital letter. Rename welcome to Welcome.",
  },
  {
    language: "React",
    level: "Easy",
    title: "Find the JSX attribute error",
    code: "function App() {\n    return <button class=\"save\">Save</button>;\n}",
    options: [
      "Use className instead of class in JSX",
      "Buttons cannot contain text",
      "JSX cannot contain attributes",
      "The button needs a CSS file to compile",
    ],
    answer: 0,
    explanation:
      "Use className for CSS classes in JSX: <button className=\"save\">Save</button>.",
  },
  {
    language: "React",
    level: "Easy",
    title: "Check the JSX expression",
    code: "function App() {\n    const name = 'Aman';\n    return <h1>Hello, name</h1>;\n}",
    options: [
      "Variables cannot be declared in components",
      "h1 cannot display text",
      "Use curly braces to render the variable",
      "Strings must use double quotes",
    ],
    answer: 2,
    explanation:
      "Use curly braces to evaluate JavaScript expressions in JSX: <h1>Hello, {name}</h1>.",
  },

  // REACT — MEDIUM
  {
    language: "React",
    level: "Medium",
    title: "Check the state update",
    code: "const [count, setCount] = useState(0);\ncount = count + 1;",
    options: [
      "useState cannot store numbers",
      "The state variable must be updated with its setter",
      "React cannot display numbers",
      "Every state must be a string",
    ],
    answer: 1,
    explanation:
      "Use setCount(count + 1) to update state. Do not directly assign a new value to the state variable.",
  },
  {
    language: "React",
    level: "Medium",
    title: "Find the event handler error",
    code: "function App() {\n    function showMessage() {\n        alert('Hello');\n    }\n    return <button onClick={showMessage()}>Click</button>;\n}",
    options: [
      "Buttons cannot use onClick",
      "alert cannot display messages",
      "Functions cannot be event handlers",
      "Pass showMessage, rather than calling it during render",
    ],
    answer: 3,
    explanation:
      "Use onClick={showMessage}. Writing showMessage() calls the function while rendering instead of waiting for a click.",
  },
  {
    language: "React",
    level: "Medium",
    title: "Check the list key",
    code: "const names = ['Aman', 'Riya'];\nreturn names.map(name => <p>{name}</p>);",
    options: [
      "Add a key prop to each list item",
      "map cannot be used in React",
      "Arrays cannot store strings",
      "p elements cannot display names",
    ],
    answer: 0,
    explanation:
      "React expects a stable key for each item in a rendered list. For example, use names.map(name => <p key={name}>{name}</p>) when the names are unique.",
  },

  // REACT — HARD
  {
    language: "React",
    level: "Hard",
    title: "Check the hook placement",
    code: "function App({ active }) {\n    if (active) {\n        const [count, setCount] = useState(0);\n    }\n    return <p>App</p>;\n}",
    options: [
      "Components cannot receive props",
      "useState cannot store numbers",
      "Hooks should not be called conditionally",
      "JSX cannot contain p elements",
    ],
    answer: 2,
    explanation:
      "Call hooks at the top level of a function component, not inside conditions, loops or nested functions.",
  },
  {
    language: "React",
    level: "Hard",
    title: "Find the effect dependency issue",
    code: "useEffect(() => {\n    console.log(userId);\n}, []);",
    options: [
      "useEffect cannot run code",
      "console.log cannot print IDs",
      "Dependency arrays must always contain five items",
      "If the effect should react to userId changes, include userId in its dependencies",
    ],
    answer: 3,
    explanation:
      "If this effect uses userId and should rerun when it changes, include userId in the dependency array: [userId].",
  },
];

const levels = ["All", "Easy", "Medium", "Hard"];

export default function FindTheError() {
  const [level, setLevel] = useState("All");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const quizQuestions =
    level === "All"
      ? questions
      : questions.filter((item) => item.level === level);

  const question = quizQuestions[current];
  const total = quizQuestions.length;

  const score = answers.filter(
    (answer) => answer?.correct
  ).length;

  function changeLevel(newLevel) {
    setLevel(newLevel);
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  function checkAnswer() {
    if (selected === null || answers[current]) return;

    const isCorrect = selected === question.answer;

    setAnswers((previous) => {
      const updated = [...previous];
      updated[current] = {
        selected,
        correct: isCorrect,
      };
      return updated;
    });
  }

  function nextQuestion() {
    if (!answers[current]) return;

    if (current === total - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  if (!question) {
    return (
      <main className="find-error-page">
        <p>No questions available for this level.</p>
        <Link to="/skill-arena">← Back to Skill Arena</Link>
      </main>
    );
  }

  const answered = Boolean(answers[current]);
  const correctCount = answers.filter(
    (answer) => answer?.correct
  ).length;

  const accuracy = total
    ? Math.round((correctCount / total) * 100)
    : 0;

  return (
    <main className="find-error-page">
      <Link to="/skill-arena" className="error-back-link">
        ← Back to Skill Arena
      </Link>

      <header className="error-header">
        <span className="error-label">SKILL ARENA · CODING</span>
        <h1>
          Find the Error<span>.</span>
        </h1>
        <p>
          Debug C, C++, Java, SQL, HTML, CSS, JavaScript and React.
          Read the code, spot the mistake, and sharpen your skills.
        </p>

        <div className="error-stats">
          <div>
            <strong>8</strong>
            <span>Technologies</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Difficulty levels</span>
          </div>
          <div>
            <strong>{total}</strong>
            <span>Questions in this quiz</span>
          </div>
        </div>
      </header>

      <section className="error-practice">
        <div className="error-section-heading">
          <div>
            <span className="error-eyebrow">YOUR CHALLENGE</span>
            <h2>Debug the code</h2>
          </div>
          <span className="error-score">
            Score: {score}/{total}
          </span>
        </div>

        <div className="error-levels">
          {levels.map((item) => (
            <button
              key={item}
              type="button"
              className={`error-level ${
                level === item ? "active" : ""
              }`}
              onClick={() => changeLevel(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {!finished ? (
          <>
            <div className="error-progress-info">
              <span>
                Question {current + 1} of {total}
              </span>
              <span>
                {Math.round(((current + 1) / total) * 100)}%
              </span>
            </div>

            <div
              className="error-progress-track"
              role="progressbar"
              aria-valuenow={current + 1}
              aria-valuemin={0}
              aria-valuemax={total}
            >
              <div
                className="error-progress-fill"
                style={{
                  width: `${((current + 1) / total) * 100}%`,
                }}
              />
            </div>

            <article className="error-question-card">
              <div className="error-question-meta">
                <span className="error-language">
                  {question.language}
                </span>
                <span
                  className={`error-difficulty ${question.level.toLowerCase()}`}
                >
                  {question.level}
                </span>
              </div>

              <h3>{question.title}</h3>
              <p className="error-instruction">
                Choose the option that correctly identifies the error.
              </p>

              <div className="error-editor">
                <div className="error-editor-top">
                  <div className="error-editor-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>{question.language} · code sample</span>
                </div>

                <pre className="error-code">
                  <code>{question.code}</code>
                </pre>
              </div>

              <div className="error-options">
                {question.options.map((option, index) => {
                  let stateClass = "";

                  if (answered && index === question.answer) {
                    stateClass = "option-correct";
                  } else if (
                    answered &&
                    answers[current]?.selected === index
                  ) {
                    stateClass = "option-incorrect";
                  } else if (selected === index) {
                    stateClass = "option-selected";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      className={`error-option ${stateClass}`}
                      onClick={() => {
                        if (!answered) setSelected(index);
                      }}
                      disabled={answered}
                    >
                      <span className="error-option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span>{option}</span>

                      {answered && index === question.answer && (
                        <span className="error-option-mark">✓</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div
                  className={`error-feedback ${
                    answers[current].correct ? "correct" : "incorrect"
                  }`}
                >
                  <strong>
                    {answers[current].correct
                      ? "Great job! You found it."
                      : "Let's learn from this mistake."}
                  </strong>
                  <p>{question.explanation}</p>
                </div>
              )}

              <div className="error-actions">
                {!answered ? (
                  <button
                    type="button"
                    className="error-primary-btn"
                    onClick={checkAnswer}
                    disabled={selected === null}
                  >
                    Check Answer →
                  </button>
                ) : (
                  <button
                    type="button"
                    className="error-primary-btn"
                    onClick={nextQuestion}
                  >
                    {current === total - 1
                      ? "View Results →"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </article>
          </>
        ) : (
          <section className="error-result">
            <div className="error-result-icon">
              {accuracy >= 80 ? "🏆" : accuracy >= 50 ? "🎯" : "💪"}
            </div>

            <span className="error-eyebrow">QUIZ COMPLETED</span>

            <h2>
              {accuracy >= 80
                ? "Excellent work!"
                : accuracy >= 50
                ? "Good effort!"
                : "Keep practising!"}
            </h2>

            <p className="error-result-message">
              Every attempt helps you become a better programmer.
            </p>

            <div className="error-result-score">
              <strong>
                {score}/{total}
              </strong>
              <span>Correct answers</span>
            </div>

            <div className="error-result-grid">
              <div>
                <strong>{accuracy}%</strong>
                <span>Accuracy</span>
              </div>
              <div>
                <strong>{total - score}</strong>
                <span>Incorrect answers</span>
              </div>
            </div>

            <button
              type="button"
              className="error-primary-btn"
              onClick={restartQuiz}
            >
              Try Again ↻
            </button>
          </section>
        )}
      </section>
    </main>
  );
};