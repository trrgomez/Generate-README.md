// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
      validate: (username) => {
        if (username) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your email address? (Required)",
      name: "email",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your project's name? (Required)",
      name: "title",
      validate: (title) => {
        if (title) {
          return true;
        } else {
          console.log("Please enter your project's title!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please write a short description of your project? (Required)",
      name: "description",
      validate: (description) => {
        if (description) {
          return true;
        } else {
          console.log("Please enter your project's description!");
          return false;
        }
      },
    },
    {
      type: "input",
      message:
        "What command should you run to install dependencies?",
      name: "installation",
    },
    {
      type: "input",
      message:
        "What does the user need to know about using the repo?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "What command should be run to run tests?",
      name: "tests",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
      name: "license",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err
        };
        console.log('README created!')
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init().then(answers => generateMarkdown(answers)).then(createREADME => writeToFile('./README.md', createREADME));;
