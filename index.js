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
                    return `\x1b[31Enter a color\x1b[0m`
                    }
                    return true
                }
            
            },
            //Text, three character length
            {
                type: 'input',
                name: 'svgText',
                message: 'Enter your text. (up to 3 characters): ',
                validate: function(input) {
                    if (input.lenght > 3) { //make sure character length is < 3
                        return
                    }
                }
            },
            //Text color
            {
                type: 'input',
                name: 'textColor',
                message: 'What would you like your text color to be?',
                valide: function(input) {
                    if (input === '') {
                        return `\x1b[31mInput must be 3 characters or less\x1b[0m`
                    }
                    return true
                }
            }

        }
//Text, three character length

//Text color

//
    ])
}