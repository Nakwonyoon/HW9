const generate = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileasync = util.promisify(fs.writeFile)

function promptUser(){
  return inquirer.prompt([
{ 
   type: "input",
   message: "What is your project title?",
   name: "title"
},
{
   type : "input",
   message: "Description of project",
   name: "description"
},
{
  type: "input",
  message: "Installations?",
  name : "installation"
},
 {
   type: "input",
   message: "Usage?",
   name : "usage"
 },
 {
   type: "checkbox",
   message: "License?",
   choices: [
      "Apple",
      "Apache",
      "MIT",
      "ISC",
   ],
   name : "license"
 },
 {
   type: "input",
   message: "Contribution?",
   name : "contributing"
 },
 {
   type: "input",
   message: "What command should you use for test",
   name: "tests"
 },
 {
   type: "input",
   message: "Question?",
   name : "question",
 },
 {
   type: "input",
   message: "Github username?",
   name : "username",
 },
 {
   type: "input",
   message: "Email?",
   name : "email",
 }
]);
}

async function init() {
  try {
    const  pull = await promptUser();
    const generateMarkdown = generate(pull);
    console.log(generateMarkdown);
    await writeFileasync("README.md", generateMarkdown);
  } catch (err) {
    console.log("failed");
  }
}
init();
// Easy Part
// =======================================================
// const questios = [
//   { 
//     type: "input",
//     message: "What is your project title?",
//     name: "title"
//  },
//  {
//     type : "input",
//     message: "Description of project",
//     name: "description"
//  },
//  {
//    type: "input",
//    message: "Installations?",
//    name : "installation"
//  },
//   {
//     type: "input",
//     message: "Usage?",
//     name : "usage"
//   },
//   {
//     type: "checkbox",
//     message: "License?",
//     choices: [
//        "Apple",
//        "Apache",
//        "MIT",
//        "ISC",
//     ],
//     name : "license"
//   },
//   {
//     type: "input",
//     message: "Contribution?",
//     name : "contributing"
//   },
//   {
//     type: "input",
//     message: "What command should you use for test",
//     name: "tests"
//   },
//   {
//     type: "input",
//     message: "Question?",
//     name : "question",
//   },
//   {
//     type: "input",
//     message: "Github username?",
//     name : "username",
//   },
//   {
//     type: "input",
//     message: "Email?",
//     name : "email",
//   }
 
// ]
// function writeToFile(fileName, data) {
//    fs.writeFile(fileName, data, (err) =>{
//       if (err) {
//          return err
//       }
//       console.log("sucess")
//    });
// }
// function init() {
//  inquirer
//   .prompt(questions).then((data) => {
//     writeToFile("README.md", generate(data));
//  })
// }
// init();
