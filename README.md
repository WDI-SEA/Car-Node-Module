## Homework: Modules

DO NOT ALTER THE TEST FILE. Continue coding in the Car.js file until all tests pass. index.js not included. 


- Make a module (`Car.js`) that defines a `Car` class.
- This class will have both properties and methods (functions)
- It will be exported as a module.

### Car Class Specs:

Users of the Car class should be able to specify the following properties when constructing new cars:
- color (string)
- convertible (boolean)

Cars should automatically come with the following property:
- speed (0, at first)

Cars should come with two functions:
- accelerate
- decelerate
- These should take one argument, a number, which is added or subtracted from the current speed

Node modules:

You will notice a package.json file listing specific packages (a.k.a node modules) required for testing this assignment. 

Node modules will be vital to this unit and future Javascript projects. In this case, our modules add automated testing functionality to our project.

Run <code>npm install</code> to install packages listed in package.json. This will create a node_modules folder that your project will draw from.

To test your Car class, run <code>npm test</code> to test the features. DO NOT ALTER THE TEST FILE. Continue coding in the Car.js file until all tests pass.


## Steps 
l. Open your terminal/command line 

l.Ceate a new directory with your project 
        mkdir project-name 

l.Enter the project 
        cd project-name

l.Then set up a new npm package by 
        npm init -y or npm init

l.Enter VS code (code .) 

l.Then create a js file by
        touch index.js

## Creating, Exploring, and Importing Modules
l.Create your module

l.Then import the module in index.js by using the require() function
        const myModule = require('./myModule.js');

l.Run node index.js


