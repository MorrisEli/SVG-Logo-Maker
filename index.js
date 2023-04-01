const inquirer = require('inquirer')
const fs = require('fs')

//shapes variable
const { Triangle, Circle, Square} = require('./libs/shapes.js')
const { type } = require('os')

//questions
function svgPrompt() {
    return inquirer
    .prompt([
        {       //adding in choice for required shapes
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your svg logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
        },
//background color
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'What color would you like your shapes background to be?',
            validate: function(input) {
                if (input === ''){
                    return
                }
            }
        },
//Text, three character length

//Text color

//
    ])
}