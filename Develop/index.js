let inquirer = require("inquirer");
let fs = require("fs");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require('./lib/intern');
const employees = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Team Manager Name:',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Team Manager ID:',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'Team Manager Email:',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Team Manager Office Number:',
            name: 'managerOffice'
        },
        {
            type: 'list',
            message: 'Add another team member?',
            name: 'member',
            choices: ['None', 'Engineer', 'Intern']
        },
    ])
    .then((response) => {
        const newManager = new manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice, response.member)
        employees.push(newManager)
        switch (response.member) {
            case "None":
                writeFile()
                break;
            case "Engineer":
                eng()
                break;
            case "Intern":
                int()
                break;    
        };
    })

function eng() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Engineer Name:',
                    name: 'engName'
                },
                {
                    type: 'input',
                    message: 'Engineer ID:',
                    name: 'engID'
                },
                {
                    type: 'input',
                    message: 'Engineer Email:',
                    name: 'engEmail'
                },
                {
                    type: 'input',
                    message: 'Engineer Github:',
                    name: 'engGithub'
                },
                {
                    type: 'list',
                    message: 'Add another team member?',
                    name: 'member',
                    choices: ['None', 'Engineer', 'Intern']
                }
            ])
            .then((response) => {
                const newEng = new engineer(response.engName, response.engID, response.engEmail, response.engGithub, response.member)
                employees.push(newEng)
                switch (response.member) {
                    case "None":
                        writeFile()
                        break;
                    case "Engineer":
                        eng()
                        break;
                    case "Intern":
                        int()
                        break;    
                };
            })
    }

function int() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Intern Name:',
                    name: 'intName'
                },
                {
                    type: 'input',
                    message: 'Intern ID:',
                    name: 'intID'
                },
                {
                    type: 'input',
                    message: 'Intern Email:',
                    name: 'intEmail'
                },
                {
                    type: 'input',
                    message: 'Intern School:',
                    name: 'intSchool'
                },
                {
                    type: 'list',
                    message: 'Add another team member?',
                    name: 'member',
                    choices: ['None', 'Engineer', 'Intern']
                }
            ])
            .then((response) => {
                const newInt = new intern(response.intName, response.intID, response.intEmail, response.intSchool, response.member)
                employees.push(newInt)
                switch (response.member) {
                    case "None":
                        writeFile()
                        break;
                    case "Engineer":
                        eng()
                        break;
                    case "Intern":
                        int()
                        break;    
                };
            })
    }

function writeFile() {
    fs.writeFileSync('generatedHTML.html', 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
    ${JSON.stringify(employees)}
        
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
    </body>
    </html>`)

}