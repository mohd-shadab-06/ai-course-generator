/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: 'Python', Level: Basic, Duration: 1 hours, NoOfChapters:5, in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course": {\n    "name": "Python Programming for Beginners",\n    "description": "This course provides a comprehensive introduction to Python programming. It covers fundamental concepts like variables, data types, operators, control flow, functions, and more. Through practical examples and hands-on exercises, you\'ll gain a solid understanding of Python syntax and programming principles. This course is ideal for individuals with no prior programming experience who want to learn a powerful and versatile language.",\n    "chapters": [\n      {\n        "name": "Introduction to Python",\n        "about": "This chapter introduces you to the world of Python programming, covering its history, key features, and why it\'s a popular choice for various applications. You\'ll learn how to set up your Python environment and execute your first Python program.",\n        "duration": "20 minutes",\n        "category": "Programming"\n      },\n      {\n        "name": "Variables and Data Types",\n        "about": "This chapter delves into the core concepts of variables and data types in Python. You\'ll learn how to declare variables, assign values, and work with different data types such as integers, floats, strings, and booleans.",\n        "duration": "25 minutes",\n        "category": "Programming"\n      },\n      {\n        "name": "Operators and Expressions",\n        "about": "This chapter explores various operators used in Python, including arithmetic, comparison, logical, and assignment operators. You\'ll learn how to create and evaluate expressions, perform calculations, and make comparisons.",\n        "duration": "15 minutes",\n        "category": "Programming"\n      },\n      {\n        "name": "Control Flow Statements",\n        "about": "This chapter covers control flow statements like conditional statements (if, elif, else) and loops (for, while). You\'ll learn how to control the flow of your program based on specific conditions and repeat actions.",\n        "duration": "20 minutes",\n        "category": "Programming"\n      },\n      {\n        "name": "Functions and Modules",\n        "about": "This chapter introduces the concept of functions and modules in Python. You\'ll learn how to define and call functions, organize your code into modules, and reuse existing code.",\n        "duration": "10 minutes",\n        "category": "Programming"\n      }\n    ],\n    "topic": "Python",\n    "level": "Basic",\n    "duration": "1 hour",\n    "noOfChapters": 5,\n    "category": "Programming"\n  }\n}\n```',
        },
      ],
    },
  ],
});

export const GenerateChapterContent_AI = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Explain the concept in detail on Topic: Python Basic, Chapter Variables and Data Types, in JSON format with list of array with field as title, explanation on given chapter in detail, Code Example (Code field in <precode> format) if applicable",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "title": "Variables",\n    "explanation": "Variables are like containers that store data in a program. They act as named references to values, allowing you to access and manipulate data efficiently. You can think of them as labels you attach to pieces of information.",\n    "code": "<precode>\\n# Assign a value to a variable named \'message\'\\nmessage = \'Hello, World!\'\\n\\n# Print the value of the \'message\' variable\\nprint(message)\\n</precode>"\n  },\n  {\n    "title": "Variable Naming Rules",\n    "explanation": "Python imposes certain rules for naming variables:\\n\\n* **Start with a letter or underscore (_):** You cannot start a variable name with a number.\\n* **Consist of letters, numbers, and underscores:** No spaces or special characters are allowed.\\n* **Case-sensitive:** \'my_variable\' is different from \'My_Variable\'.\\n* **Avoid using keywords:** Python has reserved words like \'if\', \'for\', \'while\' that you cannot use as variable names.",\n    "code": "<precode>\\n# Valid variable names\\nmy_variable = 10\\n_secret_key = \'abc\'\\n\\n# Invalid variable names\\n1st_name = \'John\'  # Starts with a number\\nmy-variable = 20  # Contains a hyphen\\n</precode>"\n  },\n  {\n    "title": "Data Types",\n    "explanation": "Data types define the kind of data a variable can hold. Each type comes with specific operations and characteristics.\\n\\n**Common Data Types:**\\n\\n* **Integers (int):** Whole numbers, like 10, -5, 0.\\n* **Floats (float):** Numbers with decimal points, like 3.14, -2.5.\\n* **Strings (str):** Sequences of characters, enclosed in single or double quotes, like \'Hello\', \\"World!\\".\\n* **Booleans (bool):**  Represent truth values, either True or False.",\n    "code": "<precode>\\n# Integer\\nage = 25\\n\\n# Float\\ngrade = 3.75\\n\\n# String\\nname = \'Alice\'\\n\\n# Boolean\\nis_active = True\\n</precode>"\n  },\n  {\n    "title": "Data Type Conversion",\n    "explanation": "You can sometimes change the data type of a variable using built-in functions. For example, you can convert a string to an integer or vice versa.\\n\\n* **int():** Convert to an integer\\n* **float():** Convert to a float\\n* **str():** Convert to a string",\n    "code": "<precode>\\n# Convert string to integer\\nnumber_str = \'10\'\\nnumber_int = int(number_str)\\nprint(number_int)  # Output: 10\\n\\n# Convert integer to string\\nage = 20\\nage_str = str(age)\\nprint(age_str)  # Output: \'20\'\\n</precode>"\n  },\n  {\n    "title": "Operators",\n    "explanation": "Operators perform operations on data. Python has various types of operators:\\n\\n* **Arithmetic operators:** + (addition), - (subtraction), * (multiplication), / (division), // (floor division), % (modulo), ** (exponentiation)\\n* **Comparison operators:** == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to)\\n* **Logical operators:** and, or, not\\n* **Assignment operators:** = (assignment), += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign), %= (modulo and assign), **= (exponentiation and assign)",\n    "code": "<precode>\\n# Arithmetic operations\\nresult = 10 + 5\\nprint(result)  # Output: 15\\n\\n# Comparison operations\\nis_equal = 5 == 5\\nprint(is_equal)  # Output: True\\n\\n# Logical operations\\nflag1 = True\\nflag2 = False\\ncombined_flag = flag1 and flag2\\nprint(combined_flag)  # Output: False\\n</precode>"\n  }\n]\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
