import inquirer from 'inquirer';
import Engineer from './engineer.mjs';
import Intern from './intern.mjs';

const managerData = [];
const engineerData = [];
const internData = [];
const engFunc = Engineer;
const intFunc = Intern;

async function welcome() {
const firstInquiry =
  await inquirer.prompt([
    {
      name: "managerName",
      type: "input",
      message: "Please enter manager name: ",
    },
    {
      name: "managerId",
      type: "input",
      message: "Please enter manager ID: ",
    },
    {
      name: "managerEmail",
      type: "input",
      message: "Please enter manager email: ",
    },
    {
      name: "managerOffice",
      type: "input",
      message: "Please enter manager office number: ",
    },
  ])
  .then(function(answers) {
    managerData.push(answers);
    console.log(managerData);
  });
};

async function selectMenu() {
  const menu = 
  await inquirer.prompt([
    {
      name: "selectList",
      type: "list",
      message: "Select an option: ",
      choices: [
        "Add an engineer",
        "Add an intern",
        "Finish building the team"
      ]
    }
  ])
  .then(function(data) {
  if(data.selectList === "Add an engineer"){
    addEngineer();
  } else if(data.selectList === "Add an intern") {
    addIntern();
  } else {
    selectMenu();
  }
  });
};

async function addEngineer() {
  const engData = 
  await inquirer.prompt([
    {
      name: "engineerName",
      type: "input",
      message: "Please enter engineer name: "
    },
    {
      name: "engineerId",
      type: "input",
      message: "Please enter engineer ID",
    },
    {
      name: "engineerEmail",
      type: "input",
      message: "Please enter engineer email: "
    },
    {
      name: "engineerGithub",
      type: "input",
      message: "Please enter engineer Github username: "
    },
  ])
  .then(function(data) {
    engineerData.push(data);
    selectMenu();
  })
};

async function addIntern() {
  const intData = 
  await inquirer.prompt([
    {
      name: "internName",
      type: "input",
      message: "Please enter intern name: "
    },
    {
      name: "internId",
      type: "input",
      message: "Please enter intern ID",
    },
    {
      name: "internEmail",
      type: "input",
      message: "Please enter intern email: "
    },
    {
      name: "internSchool",
      type: "input",
      message: "Please enter intern school name: "
    },
  ])
  .then(function(data) {
    internData.push(data);
    selectMenu();
  })
};

export { managerData };
export { engineerData };
export { internData };



welcome();



  



  
 
