let inquirer = require("inquirer");
let fs = require("fs");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require('./lib/intern');
let employees = [];
let name = "";
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Team Name:',
            name: 'teamName'
        },
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
            choices: ['None', 'Employee', 'Engineer', 'Intern']
        },
    ])
    .then((response) => {
        const newManager = new manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice, response.member)
        employees.push(newManager)
        name += response.teamName
        switch (response.member) {
            case "None":
                writeFile()
                break;
            case "Employee":
                emp()
                break;
            case "Engineer":
                eng()
                break;
            case "Intern":
                int()
                break;
        };
    })

function emp() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee Name:',
                name: 'empName'
            },
            {
                type: 'input',
                message: 'Employee ID:',
                name: 'empID'
            },
            {
                type: 'input',
                message: 'Employee Email:',
                name: 'empEmail'
            },
            {
                type: 'list',
                message: 'Add another team member?',
                name: 'member',
                choices: ['None', 'Employee', 'Engineer', 'Intern']
            }
        ])
        .then((response) => {
            const newEmp = new employee(response.empName, response.empID, response.empEmail, response.member)
            employees.push(newEmp)
            switch (response.member) {
                case "None":
                    writeFile()
                    break;
                case "Employee":
                    emp()
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
                choices: ['None', 'Employee', 'Engineer', 'Intern']
            }
        ])
        .then((response) => {
            const newEng = new engineer(response.engName, response.engID, response.engEmail, response.engGithub, response.member)
            employees.push(newEng)
            switch (response.member) {
                case "None":
                    writeFile()
                    break;
                case "Employee":
                    emp()
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
                choices: ['None', 'Employee', 'Engineer', 'Intern']
            }
        ])
        .then((response) => {
            const newInt = new intern(response.intName, response.intID, response.intEmail, response.intSchool, response.member)
            employees.push(newInt)
            switch (response.member) {
                case "None":
                    writeFile()
                    break;
                case "Employee":
                    emp()
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

function printPage() {
    const cards = employees.map((employee) => employee.print())
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet">
        <title>Your Team Profile</title>
    </head>
    <body>
        <div class="background">
            <div class="title"><h1>${name}</h1></div>
            <div class="cards">
                ${cards.join('')}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    </body>
    </html>`
}

function writeFile() {
    fs.writeFileSync('generatedHTML.html', printPage())

}