import { useParams, Link } from "react-router-dom";
import "../styles/ConceptLesson.css";

const topics = {
  C: [
    {
      title: "Variables & Data Types",
      explanation:
        "A variable is a named memory location used to store information. A data type tells C what kind of value a variable can store. int stores whole numbers, float stores decimal numbers, and char stores a single character. Variables make it possible to use and update information while a program runs.",
      code: `#include <stdio.h>

int main() {
    int age = 20;
    float marks = 85.5;
    char grade = 'A';

    printf("%d\\n", age);
    printf("%.1f\\n", marks);
    printf("%c\\n", grade);

    return 0;
}`,
      output: `20
85.5
A`,
      mistake:
        "Use the correct format specifier: %d for int, %f for float and %c for char. A character uses single quotes.",
      practice:
        "Declare an integer named number with value 10 and print it."
    },
    {
      title: "If-Else Conditions",
      explanation:
        "The if-else statement allows a program to make decisions. The if block executes when its condition is true. Otherwise, the else block executes. Conditions commonly use comparison operators such as >, <, >= and ==. This is useful for checking age eligibility, exam results and other decisions.",
      code: `#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("Eligible");
    } else {
        printf("Not eligible");
    }

    return 0;
}`,
      output: "Eligible",
      mistake:
        "Use == to compare two values. A single = assigns a value to a variable.",
      practice:
        "Write an if-else program to check whether a number is positive."
    },
    {
      title: "Loops",
      explanation:
        "A loop repeats a block of code while its conditions allow it. A for loop is useful when the number of repetitions is known. It contains initialization, a condition and an update expression. Loops reduce repeated code and can print number sequences or process collections of values.",
      code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }

    return 0;
}`,
      output: "1 2 3 4 5",
      mistake:
        "Check the loop condition and update expression. If the condition never becomes false, the loop may run indefinitely.",
      practice:
        "Print numbers from 1 to 10 using a for loop."
    },
    {
      title: "Functions",
      explanation:
        "A function is a reusable block of code that performs a particular task. Functions help divide a large program into smaller, manageable parts. A function can be called whenever its task is needed. Functions may accept parameters and can return a value to the calling code.",
      code: `#include <stdio.h>

void greet() {
    printf("Hello!");
}

int main() {
    greet();
    return 0;
}`,
      output: "Hello!",
      mistake:
        "Defining a function does not execute it automatically. Call the function when you want its code to run.",
      practice:
        "Create a function named welcome that prints Welcome."
    },
    {
      title: "Arrays & Strings",
      explanation:
        "An array stores multiple values of the same data type under one variable name. Each element has an index, beginning at zero. A C string is a character array that ends with a null character. Arrays are useful for storing marks, numbers and lists of characters.",
      code: `#include <stdio.h>

int main() {
    int numbers[3] = {10, 20, 30};
    char name[] = "Aman";

    printf("%d\\n", numbers[1]);
    printf("%s", name);

    return 0;
}`,
      output: `20
Aman`,
      mistake:
        "Array indexes start at zero. The second element is numbers[1], not numbers[2].",
      practice:
        "Create an array of three numbers and print its first element."
    },
    {
      title: "Pointers",
      explanation:
        "A pointer is a variable that stores the memory address of another object. The & operator obtains a variable's address, while the * operator can access the value through a pointer. Pointers are important in C for working with arrays, functions and memory.",
      code: `#include <stdio.h>

int main() {
    int number = 10;
    int *ptr = &number;

    printf("%d", *ptr);

    return 0;
}`,
      output: "10",
      mistake:
        "Use & to obtain the address and * to access the value through the pointer. A pointer must be initialized appropriately before dereferencing it.",
      practice:
        "Create an integer variable and a pointer that points to it."
    }
  ],

  "C++": [
    {
      title: "Variables & Data Types",
      explanation:
        "A variable stores a value that can be used by a program. Its data type determines what kind of information it can hold. int stores whole numbers, float stores decimal values, and char stores a single character. C++ uses variables to keep track of information and perform calculations.",
      code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    cout << age;
    return 0;
}`,
      output: "20",
      mistake:
        "Declare variables before using them and finish ordinary statements with semicolons.",
      practice:
        "Create an integer variable named number with value 10 and display it."
    },
    {
      title: "If-Else Conditions",
      explanation:
        "If-else statements allow a program to choose between different actions. The if block runs when the condition is true, and the else block runs otherwise. Comparison operators help the program decide which block to execute. These conditions are used in eligibility checks and result calculations.",
      code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;

    if (age >= 18)
        cout << "Eligible";
    else
        cout << "Not eligible";

    return 0;
}`,
      output: "Eligible",
      mistake:
        "Use == for equality comparisons and = for assigning a value.",
      practice:
        "Check whether a number is positive using if-else."
    },
    {
      title: "Loops",
      explanation:
        "Loops repeat instructions without requiring the same code to be written multiple times. A for loop has initialization, a condition and an update expression. It is especially useful for printing sequences and repeating calculations a fixed number of times.",
      code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }

    return 0;
}`,
      output: "1 2 3 4 5",
      mistake:
        "Make sure the condition and update expression allow the loop to finish.",
      practice:
        "Print numbers from 1 to 10 using a for loop."
    },
    {
      title: "Functions",
      explanation:
        "A function is a named block of code that performs a task. Functions improve code reuse and organization. They can receive information through parameters and return results. A function executes when it is called, allowing the same task to be performed at different places in a program.",
      code: `#include <iostream>
using namespace std;

void greet() {
    cout << "Hello!";
}

int main() {
    greet();
    return 0;
}`,
      output: "Hello!",
      mistake:
        "Remember to call the function. A function definition alone does not make its body run.",
      practice:
        "Create a function that displays Welcome to C++."
    },
    {
      title: "Classes & Objects",
      explanation:
        "A class is a blueprint that defines data and functions for a type of object. An object is an instance created from that class. Classes help organize related information and behavior together. For example, a Student class can store a student's name and provide functions related to that student.",
      code: `#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name = "Aman";
};

int main() {
    Student s;
    cout << s.name;
    return 0;
}`,
      output: "Aman",
      mistake:
        "Remember the semicolon after a class definition. Public members can be accessed through an object.",
      practice:
        "Create a Car class with a public brand variable."
    },
    {
      title: "Inheritance",
      explanation:
        "Inheritance allows one class to derive from another class. The derived class can use accessible members of the base class. It helps reuse existing code and represent relationships such as Animal and Dog. C++ supports different inheritance forms, including public, protected and private inheritance.",
      code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : public Animal {};

int main() {
    Dog d;
    d.eat();
    return 0;
}`,
      output: "Eating",
      mistake:
        "Use the correct inheritance syntax and access level. Private base-class members cannot be accessed directly by a derived class.",
      practice:
        "Create a Parent class and a Child class that publicly inherits from it."
    }
  ],

  Java: [
    {
      title: "Variables & Data Types",
      explanation:
        "A variable is a named location used to store information. Java requires variables to have declared types. int stores whole numbers, double stores decimal numbers, char stores a single character and boolean stores true or false. String is used to represent text.",
      code: `public class Main {
    public static void main(String[] args) {
        int age = 20;
        double marks = 85.5;
        String name = "Aman";

        System.out.println(name);
        System.out.println(age);
        System.out.println(marks);
    }
}`,
      output: `Aman
20
85.5`,
      mistake:
        "Java is case-sensitive. Write String, System and other identifiers with the correct capitalization.",
      practice:
        "Declare variables for your name, age and marks, then print their values."
    },
    {
      title: "If-Else Conditions",
      explanation:
        "An if-else statement lets Java select which code to execute according to a condition. If the condition evaluates to true, the if block runs. Otherwise, the else block runs. Conditions can compare numbers, check equality or evaluate other boolean expressions.",
      code: `public class Main {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18) {
            System.out.println("Eligible");
        } else {
            System.out.println("Not eligible");
        }
    }
}`,
      output: "Eligible",
      mistake:
        "Use == to compare primitive values and = to assign a value.",
      practice:
        "Write a program that checks whether a student has passed with marks of at least 40."
    },
    {
      title: "Loops",
      explanation:
        "Loops execute statements repeatedly. Java provides for, while and do-while loops. A for loop is useful when the number of repetitions is known. It contains initialization, a condition and an update expression. Loops help avoid writing the same statement repeatedly.",
      code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
    }
}`,
      output: "1 2 3 4 5",
      mistake:
        "Check the loop condition and increment carefully to prevent an endless loop.",
      practice:
        "Print the numbers from 1 to 10 using a for loop."
    },
    {
      title: "Methods",
      explanation:
        "A method is a named block of code that performs a task. Methods help reuse code and organize a Java program. They can accept parameters and return results. A static method belongs to the class rather than to a particular object, so it can be called from main when accessible.",
      code: `public class Main {
    static void greet() {
        System.out.println("Hello!");
    }

    public static void main(String[] args) {
        greet();
    }
}`,
      output: "Hello!",
      mistake:
        "Make sure the method is called. A non-static instance method normally requires an object to call it.",
      practice:
        "Create a static method named welcome that prints Welcome."
    },
    {
      title: "Classes & Objects",
      explanation:
        "A class defines the data and behavior that its objects can have. An object is an instance of a class. Fields store information, while methods define actions. Classes and objects are central to object-oriented programming and help model real-world entities such as students and products.",
      code: `class Student {
    String name = "Aman";
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.name);
    }
}`,
      output: "Aman",
      mistake:
        "Create an object using new before accessing its instance members.",
      practice:
        "Create a Car class with a brand field and display its value."
    },
    {
      title: "Exception Handling",
      explanation:
        "An exception is an event that interrupts the normal flow of a program. Java uses try and catch blocks to handle certain exceptions. The risky code is placed in try, and a matching catch block handles an exception if it occurs. Exception handling can help a program respond to errors in a controlled way.",
      code: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}`,
      output: "Cannot divide by zero",
      mistake:
        "Catch the appropriate exception type and place the risky operation inside the try block.",
      practice:
        "Use try-catch to handle an arithmetic exception."
    }
  ],

  SQL: [
    {
      title: "SELECT Statement",
      explanation:
        "SQL stands for Structured Query Language. It is used to work with relational databases. The SELECT statement retrieves information from a table. You can select particular columns or use an asterisk to request all columns. SQL queries are commonly used to view student records, employee information and product details.",
      code: `SELECT * FROM Students;

SELECT name, marks
FROM Students;`,
      output:
        "The first query returns all columns from Students. The second returns only the name and marks columns.",
      mistake:
        "Check the table and column names. Use SELECT * when you need every column, not as a requirement for every query.",
      practice:
        "Write a query to display the name and age of every employee."
    },
    {
      title: "WHERE Clause",
      explanation:
        "The WHERE clause filters rows according to a condition. Only rows satisfying that condition appear in the result. You can use comparison operators such as =, >, < and >=. WHERE is useful when you need records matching a particular age, name, marks value or other requirement.",
      code: `SELECT name, marks
FROM Students
WHERE marks >= 80;`,
      output:
        "Displays the names and marks of students whose marks are at least 80.",
      mistake:
        "Use the correct comparison operator and column name. Text values generally need quotes.",
      practice:
        "Find students whose marks are greater than 70."
    },
    {
      title: "ORDER BY",
      explanation:
        "ORDER BY sorts query results using one or more columns. ASC sorts in ascending order, while DESC sorts in descending order. Sorting makes it easier to find the highest marks, lowest prices or names in alphabetical order. If you do not specify a direction, ASC is normally used.",
      code: `SELECT name, marks
FROM Students
ORDER BY marks DESC;`,
      output:
        "Displays student records from highest marks to lowest marks.",
      mistake:
        "DESC means descending and ASC means ascending. ORDER BY sorts the results; it does not filter rows.",
      practice:
        "Display students in ascending order of their names."
    },
    {
      title: "Aggregate Functions",
      explanation:
        "Aggregate functions calculate a result from multiple rows. COUNT counts rows or non-NULL values depending on its argument. SUM calculates a total, AVG calculates an average, MIN finds the smallest value and MAX finds the largest. These functions are useful for reports and summaries.",
      code: `SELECT COUNT(*)
FROM Students;

SELECT AVG(marks)
FROM Students;`,
      output:
        "The first query returns the number of rows in Students. The second returns the average of non-NULL marks values.",
      mistake:
        "COUNT(*) counts rows, while COUNT(column) counts non-NULL values in that column.",
      practice:
        "Write queries to find the total number of students and their average marks."
    }
  ],

  HTML: [
    {
      title: "HTML Document Structure",
      explanation:
        "HTML stands for HyperText Markup Language. It defines the structure of a webpage using elements and tags. The doctype declaration identifies the document as HTML. The html element contains the document, head stores metadata and the page title, and body contains the visible content. Browsers read this structure and display the page.",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is my first webpage.</p>
</body>
</html>`,
      output:
        "A webpage displays a Welcome heading and a paragraph saying This is my first webpage.",
      mistake:
        "Place visible content inside body. The head element contains metadata and the title rather than the main page content.",
      practice:
        "Create an HTML page with a title, one heading and two paragraphs."
    },
    {
      title: "Headings and Paragraphs",
      explanation:
        "HTML provides six heading levels, from h1 to h6. The h1 element generally represents the main heading, while lower-level headings organize sections and subsections. The p element creates a paragraph. A clear heading hierarchy helps users understand the page and makes its content easier to scan.",
      code: `<h1>My College</h1>
<h2>Computer Department</h2>
<h3>Programming Classes</h3>
<p>We learn programming and web development.</p>`,
      output:
        "The page displays a main heading, two subheading levels and a paragraph.",
      mistake:
        "Choose heading tags according to the content hierarchy, not just their visual size.",
      practice:
        "Create a webpage about your college using three heading levels and two paragraphs."
    },
    {
      title: "Links and Images",
      explanation:
        "The a element creates a hyperlink that allows users to visit another page or resource. Its href attribute specifies the destination. The img element displays an image using the src attribute. The alt attribute provides alternative text that describes the image for accessibility and when the image cannot be displayed.",
      code: `<a href="https://example.com">
    Visit Website
</a>

<img src="photo.jpg" alt="A sample photo">`,
      output:
        "A clickable link appears, followed by the image if photo.jpg exists at the specified path.",
      mistake:
        "Use href for a link destination and src for an image path. Provide meaningful alt text and verify that the image file exists.",
      practice:
        "Create a website link and display an image with meaningful alt text."
    },
    {
      title: "Forms",
      explanation:
        "HTML forms collect information from users. They can contain text inputs, email fields, password fields, checkboxes, radio buttons and submit buttons. Labels describe the fields. The browser can provide basic input behavior, but saving or sending submitted information usually requires suitable form handling or a backend.",
      code: `<form>
    <label for="name">Name:</label>
    <input id="name" type="text">

    <label for="email">Email:</label>
    <input id="email" type="email">

    <button type="submit">Submit</button>
</form>`,
      output:
        "The webpage displays a name field, an email field and a Submit button.",
      mistake:
        "Match each label's for attribute with the corresponding input id. A form does not automatically save data to a database.",
      practice:
        "Create a registration form containing name, email and password fields."
    }
  ],

  CSS: [
    {
      title: "CSS Selectors",
      explanation:
        "CSS stands for Cascading Style Sheets. It controls the appearance of HTML elements. A selector identifies which elements receive a style. An element selector targets tags, a class selector starts with a dot, and an ID selector starts with a hash symbol. Each rule contains properties and values inside curly braces.",
      code: `p {
    color: purple;
}

.highlight {
    background-color: yellow;
}

#main-title {
    font-size: 28px;
}`,
      output:
        "Paragraph text becomes purple, elements with the highlight class receive a yellow background, and the element with the main-title ID gets a 28px font size.",
      mistake:
        "Use a dot for a class and # for an ID. Make sure the HTML elements have matching class or ID values.",
      practice:
        "Create one element selector, one class selector and one ID selector."
    },
    {
      title: "Colors and Fonts",
      explanation:
        "CSS properties control text colors, backgrounds and typography. The color property changes text color, while background-color changes the background. font-size controls the size of text and font-family specifies the preferred typeface. These properties help improve readability and create a consistent design across a website.",
      code: `h1 {
    color: darkblue;
    background-color: lightyellow;
    font-size: 32px;
    font-family: Arial, sans-serif;
}`,
      output:
        "The heading appears dark blue on a light-yellow background with a 32px font size.",
      mistake:
        "Write declarations as property: value; inside the rule. Check spelling and punctuation in CSS properties.",
      practice:
        "Style a heading with a text color, background color, font size and font family."
    },
    {
      title: "Flexbox",
      explanation:
        "Flexbox is a CSS layout system for arranging items along a main axis. Set display: flex on the parent container to enable it. justify-content distributes items along the main axis, while align-items aligns items along the cross axis. Flexbox is useful for navigation bars, centered content and rows of cards.",
      code: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}`,
      output:
        "The container lays out its children as flex items, centers them along both axes and adds 16px spacing between them.",
      mistake:
        "The main axis depends on flex-direction. justify-content and align-items do not always correspond to horizontal and vertical directions.",
      practice:
        "Arrange three cards in a flex container and center them with equal spacing."
    },
    {
      title: "CSS Grid",
      explanation:
        "CSS Grid is a two-dimensional layout system for organizing content in rows and columns. display: grid activates grid layout on a container. grid-template-columns defines its columns, repeat(3, 1fr) creates three equal fractional columns, and gap adds spacing. Grid is useful for product galleries, dashboards and card layouts.",
      code: `.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}`,
      output:
        "Grid items are arranged in three equal-width columns with 16px gaps.",
      mistake:
        "Apply display: grid to the parent container. Child elements become grid items automatically.",
      practice:
        "Create a card grid with two equal-width columns and a gap of 20px."
    }
  ],

  JavaScript: [
    {
      title: "Variables",
      explanation:
        "JavaScript variables store information that a program can use later. let declares a block-scoped variable that can be reassigned. const declares a block-scoped binding that cannot be reassigned. Variables can store strings, numbers, booleans and other values. console.log() displays values in the developer console.",
      code: `let name = "Prep";
const year = 2026;

console.log(name);
console.log(year);`,
      output: `Prep
2026`,
      mistake:
        "Do not reassign a const binding. Use let when reassignment is needed and const when it is not.",
      practice:
        "Create variables for your name, age and course, then print all three values."
    },
    {
      title: "Conditions",
      explanation:
        "Conditional statements let a program make decisions. The if block executes when its condition evaluates to true, while else handles the other case. Operators such as >=, < and === help compare values. Conditions are commonly used for checking eligibility, exam results and user input.",
      code: `let marks = 75;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}`,
      output: "Pass",
      mistake:
        "Use comparison operators in conditions. === checks strict equality, while = assigns a value.",
      practice:
        "Print Adult if age is at least 18 and Minor otherwise."
    },
    {
      title: "Arrays",
      explanation:
        "An array stores a list of values in one variable. Every element has an index, starting at zero. You can read an element using its index and use the length property to count the elements. Arrays are useful for storing lists of subjects, products, names and marks.",
      code: `const fruits = ["Apple", "Mango", "Grapes"];

console.log(fruits[1]);
console.log(fruits.length);`,
      output: `Mango
3`,
      mistake:
        "The first element is at index 0. Accessing an index without an element usually returns undefined.",
      practice:
        "Create an array of five subjects and print its first element and length."
    },
    {
      title: "Functions",
      explanation:
        "A function is a reusable block of code that performs a task. Parameters receive values, and return sends a result back to the caller. Functions reduce repeated code and make a program easier to maintain. A function can be called several times with different arguments.",
      code: `function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
console.log(add(4, 6));`,
      output: `5
10`,
      mistake:
        "Use return when the caller needs a result from the function. console.log() displays a value but does not replace return.",
      practice:
        "Write a function that accepts a number and returns its square."
    },
    {
      title: "Objects",
      explanation:
        "An object stores related information as key-value pairs called properties. Each property has a name and a value. Dot notation, such as student.name, and bracket notation, such as student['name'], can access properties. Objects are useful for representing students, products and users.",
      code: `const student = {
    name: "Aman",
    age: 20,
    course: "BCA"
};

console.log(student.name);
console.log(student.course);`,
      output: `Aman
BCA`,
      mistake:
        "Use the correct property name. Accessing a property that does not exist usually returns undefined.",
      practice:
        "Create a product object with name, price and category properties."
    }
  ],

  React: [
    {
      title: "Components",
      explanation:
        "React is a JavaScript library for building user interfaces. A component is a reusable part of the interface, such as a navbar, button, product card or footer. Function components return JSX that describes what should appear on the page. Reusing components makes an application easier to organize and maintain.",
      code: `function Welcome() {
    return <h1>Welcome to Prep 2 Place</h1>;
}

export default Welcome;`,
      output:
        "When the Welcome component is rendered, it displays a heading saying Welcome to Prep 2 Place.",
      mistake:
        "Component names should begin with a capital letter. The component must also be rendered by a React application to appear on the page.",
      practice:
        "Create and export a Header component that returns a heading."
    },
    {
      title: "JSX",
      explanation:
        "JSX is a syntax extension that allows developers to write HTML-like markup inside JavaScript. JavaScript expressions can be placed inside curly braces. In JSX, className is used instead of the HTML class attribute. A component's return statement describes the UI that React should render.",
      code: `const name = "Aman";

function App() {
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Welcome to React.</p>
        </div>
    );
}

export default App;`,
      output:
        "The page displays Hello, Aman as a heading and Welcome to React as a paragraph.",
      mistake:
        "Return one parent element or wrap multiple elements in a React fragment. Use curly braces for JavaScript expressions.",
      practice:
        "Display your name in a heading and your course in a paragraph using JSX."
    },
    {
      title: "Props",
      explanation:
        "Props pass information from a parent component to a child component. They work like inputs to a function. A parent can pass a name, title, price or other value through JSX attributes. The child component receives the props and uses them to display appropriate content. Props should be treated as read-only by the receiving component.",
      code: `function Greeting({ name }) {
    return <p>Hello, {name}!</p>;
}

function App() {
    return (
        <div>
            <Greeting name="Sam" />
            <Greeting name="Riya" />
        </div>
    );
}

export default App;`,
      output: `Hello, Sam!
Hello, Riya!`,
      mistake:
        "Pass props through component attributes and use the correct prop name in the child component.",
      practice:
        "Create a Student component that receives name and course props."
    },
    {
      title: "State with useState",
      explanation:
        "State stores information that can change while a component is running. The useState hook returns the current state value and a setter function. When the setter updates state, React renders the component again so the interface displays the latest value. State is useful for counters, form fields, menus and shopping cart quantities.",
      code: `import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

export default Counter;`,
      output:
        "The button initially displays Count: 0. Each click increases the displayed count by one.",
      mistake:
        "Use the state setter to update state instead of directly changing the state variable.",
      practice:
        "Create a counter starting at zero with increment and decrement buttons."
    },
    {
      title: "Events",
      explanation:
        "React event handlers let components respond to user actions such as clicks and form submissions. The onClick prop can run a function when a button is clicked. Event handlers are useful for showing messages, opening menus, updating state and responding to user input.",
      code: `function App() {
    function showMessage() {
        alert("Button clicked!");
    }

    return (
        <button onClick={showMessage}>
            Click Me
        </button>
    );
}

export default App;`,
      output:
        "Clicking the button displays an alert saying Button clicked!",
      mistake:
        "Pass a function using onClick={showMessage}. Writing onClick={showMessage()} calls it immediately during rendering.",
      practice:
        "Create a button that updates a message on the page when clicked."
    }
  ]
};

const languageAliases = {
  c: "C",
  "c++": "C++",
  cpp: "C++",
  java: "Java",
  sql: "SQL",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  js: "JavaScript",
  react: "React"
};

function ConceptLesson() {
  const { language, index } = useParams();

  const decodedLanguage = decodeURIComponent(language || "");
  const languageKey =
    languageAliases[decodedLanguage.toLowerCase()] || decodedLanguage;

  const lessons = topics[languageKey];
  const lessonIndex = Number(index);
  const lesson = lessons?.[lessonIndex];
  if (!lesson) {
    return (
      <div className="lesson-page">
        <h1>Lesson not found</h1>
        <p>Please choose a technology and lesson from Concept Corner.</p>
        <Link to="/skill-arena/concepts">
          ← Back to Concept Corner
        </Link>
      </div>
    );
  }

  const previousIndex = lessonIndex - 1;
  const nextIndex = lessonIndex + 1;

  return (
    <div className="lesson-page">
      <Link className="lesson-back" to="/skill-arena/concepts">
        ← Concept Corner
      </Link>

      <div className="lesson-heading">
        <span>{languageKey} PROGRAMMING</span>
        <h1>{lesson.title}</h1>
        <p>Understand the concept, read the code and practise.</p>
        <p>
          Lesson {lessonIndex + 1} of {lessons.length}
        </p>
      </div>

      <section className="lesson-card">
        <h2>📘 Concept Explanation</h2>
        <p>{lesson.explanation}</p>
      </section>

      <section className="lesson-card">
        <h2>💻 Code Example</h2>
        <pre>
          <code>{lesson.code}</code>
        </pre>
      </section>

      <section className="lesson-card">
        <h2>🖥️ Expected Output</h2>
        <pre>
          <code>{lesson.output}</code>
        </pre>
      </section>

      <section className="lesson-card">
        <h2>⚠️ Common Mistake</h2>
        <p>{lesson.mistake}</p>
      </section>

      <section className="lesson-card">
        <h2>✍️ Mini Practice</h2>
        <p>{lesson.practice}</p>
      </section>

      <div className="lesson-navigation">
        {previousIndex >= 0 ? (
          <Link
            className="lesson-back"
            to={`/skill-arena/concepts/${encodeURIComponent(languageKey)}/${previousIndex}`}
          >
            ← Previous Lesson
          </Link>
        ) : (
          <span />
        )}

        {nextIndex < lessons.length ? (
          <Link
            className="lesson-back"
            to={`/skill-arena/concepts/${encodeURIComponent(languageKey)}/${nextIndex}`}
          >
            Next Lesson →
          </Link>
        ) : (
          <Link
            className="lesson-back"
            to="/skill-arena/concepts"
          >
            All Technologies →
          </Link>
        )}
      </div>
    </div>
  );
}

export default ConceptLesson;
