//First week:

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

function theFortuneTeller(){

    let jobTitle = "Performer";
    let city = "New York";
    let annualSalary = 200000;
    let monthlySalary = (annualSalary / 12).toFixed(2);
    let companyName = "Broadway";

   console.log(`You will be a ${jobTitle} in ${city}, making $${annualSalary} ($${monthlySalary} per month) for ${companyName}.`);
   return `You will be a ${jobTitle} in ${city}, making $${annualSalary} ($${monthlySalary} per month) for ${companyName}.`;
}


let answer1 = theFortuneTeller();
document.getElementById('ex1').innerHTML= answer1;


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

function ageCalulator(){
    let currentYear = "2020";
    let birthYear = "2000";
    let age = currentYear - birthYear;

    console.log(`They are ${age} years old.`);
    return `They are ${age} years old.`;
}

let answer2 = ageCalulator();
document.getElementById('ex2').innerHTML= answer2;

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

function lifetimeSupplyCalculator(){

    let age = "20";
    let maxAge = "100";
    let estimatedConsumption = "2";
    let remainingYears = maxAge - age; 
    let lifetimeSupply = remainingYears * estimatedConsumption;

    console.log(`You will need ${lifetimeSupply} to last you until the ripe old age of ${maxAge}.`);
    return `You will need ${lifetimeSupply} to last you until the ripe old age of ${maxAge}.`
}

let answer3 = lifetimeSupplyCalculator();
document.getElementById('ex3').innerHTML= answer3;

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

function geometrizer(){

    let radius = "5";
    let area = ((radius ** 2) * 3.1415925).toFixed(2);
    let circumference = (2 * 3.1415925 * 5).toFixed(2);
    
    console.log(`The circumference is ${circumference}. The area is ${area}.`);
    return `The circumference is ${circumference}. The area is ${area}.`;
}

let answer4 = geometrizer();
document.getElementById('ex4').innerHTML= answer4;

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

function temperatureConverter(){

    let celsius = 39;
    let fahrenheitConverted = (celsius /5 * 9) + 32;
    let fahrenheit = 140; 
    let celsiusConverted = (fahrenheit - 32) * 5 / 9;

    console.log(`${celsius}°C is ${fahrenheitConverted}°F. ${fahrenheit}°F is ${celsiusConverted}°C.`);
    return `${celsius}°C is ${fahrenheitConverted}°F. ${fahrenheit}°F is ${celsiusConverted}°C.`;

}

let answer5 = temperatureConverter();
document.getElementById('ex5').innerHTML= answer5;

//Second Week:

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(a){
    let result = a ** 2;
    console.log(`The result of squaring the number ${a} is ${result}.`);
    return result;
}

let x1 = 3;
let answer6 = `The result of squaring the number ${x1} is ${squareNumber(x1)}.`;
document.getElementById('ex6').innerHTML= answer6;

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(a){
    let result = a / 2;
    console.log(`Half of ${a} is ${result}.`);
    return result;
   
}

let x2 = 4;
let answer7 = `Half of ${x2} is ${halfNumber(x2)}.`;
document.getElementById('ex7').innerHTML= answer7;


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(a,b){
    let result = (a / b * 100).toFixed(2);
    console.log(`${a} is ${result}% of ${b}.`);
    return result;
}

let x3 = 5;
let y = 10;
let answer8 = `${x3} is ${percentOf(x3,y)}% of ${y}.`;
document.getElementById('ex8').innerHTML= answer8;


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(a){
    let result = ((a ** 2) * 3.1415925).toFixed(2);
    console.log(`The area for a circle with radius ${a} is ${result}.`);
    return result;
}

let radius = 5;
let answer9 = `The area for a circle with radius ${5} is ${areaOfCircle(radius)}.`;
document.getElementById('ex9').innerHTML= answer9;


// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).



function theFunctionToEndAllFunctions(a){

    console.log(`So, it begins...`);

    let first = halfNumber(a);
    let second = squareNumber(first);
    let third = areaOfCircle(second);
    let fourth = percentOf(second,third);
    document.getElementById('ex10').innerHTML= `Half of ${second} is ${first}. The result of squaring the number ${first} is ${second}. The area for a circle with radius ${second} is ${third}. ${second} is ${fourth}% of ${third}.`;
}

let x4 = 4;
let answer10 = theFunctionToEndAllFunctions(x4);


// Third Week:

// Document Output 
// 1. In HTML, create an <ol>
// 2. Within the ordered-list, add 10 <li>
// 3. Give each list-item a unique id (ex1, ex2, etc, for example)
// 4. Instead of outputting to the console, put the string output from the previous 10 exercises to the document, with each string of output going into its own list item. (There are a few ways to write this solution, consideration given to methods that are more efficient - as long as they're still readable and logical)
 
//Refer back to previous code to see how I outputted to the document 


