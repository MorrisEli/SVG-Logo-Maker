const inquirer = require('inquirer')
const fs = require('fs')

//shapes variable
const { Triangle, Circle, Square} = require('./libs/shapes.js')


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
                if (input.lenght > 3) { //make sure character length is not over 3
                    return `\x1b[31mInput must be 3 characters or less\x1b[0m`
                }
                return true
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
        
     },
     //log shape choice (Circle, Triangle, Square)
    ]).then((data) => {
        if(data.shape === 'Triangle') {
            const triangle = new Triangle()
            triangle.backgroundColor = data.backgroundColor
            triangle.svgText = data.svgText
            triangle.textColor = data.textColor
            fs.writeFile('triangle.svg', triangle.render(), (err) => {err ? console.error(err) : console.log('\x1b[32mGenerated triangle.svg\x1b[0m')})
        } else if (data.shape === 'Circle') {
            const circle = new Circle()
            circle.backgroundColor = data.backgroundColor
            circle.svgText = data.svgText
            circle.textColor = data.textColor
            fs.writeFile('circle.svg', circle.render(), (err) => {err ? console.error(err) : console.log('\x1b[32mGenerated circle.svg\x1b[0m')})
        } else {
            const square = new Square()
            square.backgroundColor = data.backgroundColor
            square.svgText = data.svgText
            square.textColor = data.textColor
            fs.writeFile('square.svg', square.render(), (err) => {err ? console.error(err) : console.log('\x1b[32mGenerated square.svg\x1b[0m')})
        }
    })
}


svgPrompt()
//Text, three character length

//Text color

//

