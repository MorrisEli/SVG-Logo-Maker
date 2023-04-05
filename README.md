# SVG-Logo-Maker

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer


## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Description
This app creates a simple logo for projects. Using the command line, and running node index.js, the user will be prompted with a series of questions/prompts. (shape, color, text, and text color) After answering these questions, a .svg file will be created in the project. When the file is viewed in the browser, you will see the logo itself.
## Screenshot and Video Submition 

https://drive.google.com/file/d/1jz6mOFSygXXnNLV8H9IVywv0yLNTsX2a/view



## GitHub


## Technologies Used
> Node.js 
    - npm inquirer
    - Jest
    - .svg files

## Usage
When you run:
    Node index.js

A series of questions will be prompted
After answering these questions, the .svg file will be generated.

## Example 

![Uploading 19BEE904-0D5A-438A-860F-512C6F7DB9C7_1_201_a.jpeg…]()


