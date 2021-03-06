const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdownJS = require('./utils/generateMarkdown.js');

// Questions to be used in the inquirer prompts
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'userStory',
    message: 'Enter a user story for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions for your project: (Note: Generated README will already include the instructions to clone the repo)',
  },
  {
    type: 'input',
    name: 'visual',
    message: 'Enter a description of your planned web visual: (Note: After README is generated, please go back to edit the visual alt tag and visual link)',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license are you using?',
    choices: ['Unlicensed', 'Apache', 'cc0-1.0', 'GPLv2', 'GPLv3', 'MIT'],
  },
  {
    type: 'list',
    name: 'badgeColor',
    message: 'What color would you like your license badge to be? (Note: If your repo is unlicense, choose any color as a badge will not be generated)',
    choices: ['blue', 'brightgreen', 'green', 'lightgrey', 'orange', 'red', 'yellow', 'yellowgreen'],
  },
  {
    type: 'input',
    name: 'features',
    message: 'Enter a list of features for your project: (Note: Features must be separated with an & symbol and spaces [e.g. Feature 1 & Feature 2 & Feature 3])',
  },
  {
    type: 'list',
    name: 'contributing',
    message: 'Will this project be open to contributions?',
    choices: ['No', 'Yes'],
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the tests performed:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Creates the README
const writeToFile = data => {
  fs.writeFile('generated-README.md', data, (err) =>
    err ? console.error(err) : console.log('README has been generated!'));
}

// Function that prompts users and uses the response to prepare the markdown
const init = () => {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile(generateMarkdownJS.generateMarkdown(response)))
    .catch(err => { console.log(err) });
};

// Function call to initialize app
init();
