const { Circle, Triangle, Square } = require('./shapes.js')

//circle test
describe('Render Circle', () => {
    //using it(), to test expect() function. 
    it('Should pass if the parameters match', () => {
        const circle = new Circle()
        circle.backgroundColor = 'blue'
        circle.svgText = 'ELI'
        circle.svgText = 'white'

        expect(circle.render()).toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="150" stroke="black" fill="blue" stroke-width="2" class="shape"/>
        <text x="250" y="275" font-size="60" text-anchor="middle" fill="white" font-family="verdana">abc</text>
        </svg>`)
    })
})
//triangle test
describe('Render Triangle', () => {
    it('Should pass if the parameters match', () => {
        const triangle = new Triangle()
        triangle.backgroundColor = 'red'
        triangle.svgText = 'SVG'
        triangle.textColor = 'blue'

            expect(triangle.render()).toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,50 100,300 400,300" fill="red" stroke="black" stroke-width="2"/>
        <text x="247.5" y="230" font-size="60" text-anchor="middle" fill="black" font-family="verdana">123</text>
        </svg>`)
    })
})
//square test
describe('Render Square', () => {
    it('Should pass if the parameters match', () => {
        const square = new Square()
        square.backgroundColor = 'black'
        square.svgText = '123'
        square.textColor = 'yellow'

        expect(rectangle.render()).toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="100" width="300" height="200" fill="black" stroke="black" stroke-width="2"/>
        <text x="250" y="225" font-size="60" text-anchor="middle" fill="yellow" font-family="verdana">SVG</text>
        </svg>`)


    })
})