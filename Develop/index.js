let inquirer = require("inquirer");
let fs = require("fs");
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
        switch (response.member) {
            case "None":
                console.log('none')
                break;
            case "Engineer":
                console.log('eng')
                break;
            case "Intern":
                console.log('int')
                break;    
        };
    })