"use strict";
/*Hello Variable
//Q1. Declare a variable named greeting with the string value "Hello, World!" and print it.*/
let greeting = "Hello world";
console.log(greeting);
/*Basic Math
 Q2.Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
*/
let num1 = 20;
let num2 = 10;
//for addition
console.log("Addition of two numbers", num1 + num2);
//for subtraction
console.log("Subtraction of two numbers", num1 - num2);
//for product or multiplication
console.log("Multiplication of two numbers", num1 * num2);
//for Division
console.log("Division of two numbers", num1 / num2);
/*Swapping Values
Q 3. Instructions: Swap the values of two variables without using a third variable.
 */
let a = 1, b = 2; // Swap these values without using a new variable.
[a, b] = [b, a]; //it's a simple way to swap a variable without using a new variable
console.log("a =", a); // Output will 2
console.log("b =", b); // Output will 1
/* Type Annotation (TypeScript)
Q.4Instructions: This applies to TypeScript. Create a string variable and try changing its type.*/
let message; // Now try assigning a number to it and see what happens.
//message=100; //it's showing error so i am commenting it
/*Q 5. Modulus Operator
Instructions: Use the modulus operator to find the remainder of two numbers.

 */
let number1 = 20;
let number2 = 10; // Use the modulus operator (%) to find the remainder.
console.log(number1 % number2);
/* Increment Challenge
Q6. Instructions: Increment a variable's value by 1 using two different methods.*/
let counter = 0; // Increment this value by 1 in two different ways.
counter++; // Increment by 1 using the ++ operator
console.log("Counter after using ++ ", counter);
counter += 1; // Increment by 1 using the += operator,+= is increment operator which increment value 1 by default
console.log("Counter after using += increment:", counter);
counter = counter + 1;
console.log("Counter after using counter + 1 ", counter);
/*Logical Gates
Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.*/
let x = true, y = false, z = true; // Write expressions using these
//for AND gate
let andGate = x && y && z;
console.log("AND gate result:", andGate); // Output will be false
//for OR gate
let orGate = x || y || z;
console.log("OR gate result:", orGate); // Output will be true
//for Not gate
let notGateX = !x;
let notGateY = !y;
let notGateZ = !z;
console.log("NOT gate result for 'x':", notGateX); // Output will be false
console.log("NOT gate result for 'y':", notGateY); // Output will be true
console.log("NOT gate result for 'z':", notGateZ); // Output will be 
/*Compound Assignment
Q8. Instructions: Show examples of using compound assignment operators.

let num = 10; // Use +=, -=, *=, and /= on this variable.*/
let n = 10;
// Using +=  //increment value
n += 5; // increment value 10+5
console.log("After +=:", n); // Output will be 15
// Using -= 
n -= 3; // it is also equal to  num = num - 3;
console.log("After -=:", n); // Output will be 12
// Using *= 
n *= 2; // Equivalent to: num = num * 2;
console.log("After *=:", n); // Output will be 24
// Using /= 
n /= 4; // Equivalent to: num = num / 4;
console.log("After /=:", n); // Output will be 6
/*Q9. Even or Odd
Instructions: Write a program to check if a number is even or odd.

let num; // Determine if this is even or odd.*/
let num = 15; // You can assign any number here to check if it's even or odd
//here i use condition if,else
if (num % 2 === 0) { //here === is  strict equality,it is used to compare value without performing any type conversion
    console.log(num + " is even."); //for Even
}
else {
    console.log(num + " is odd."); //for odd
}
/*10. Voting Eligibility
Instructions: Check if a person is eligible to vote.

let age; // Check if age is 18 or older to determine voting eligibility.*/
let age = 25; // You can assign any age here to check voting eligibility
if (age >= 18) {
    console.log("You are eligible to vote!.");
}
else {
    console.log("You are not eligible to vote yet!.");
}
/*11. Grading System
Instructions: Assign a grade based on a numerical score.

let score; // Use conditionals to assign and print grades A, B, C, D, or F. */
let score = 85; // You can assign any score here to determine the grade
let grade;
if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("Your grade is:", grade);
/*12. Max of Three
Instructions: Find the maximum of three numbers.

let x, y, z; // Determine the largest among these*/
let X = 10;
let Y = 25;
let Z = 15;
let max;
if (X >= Y && X >= Z) {
    max = X;
    console.log("maximum number is ", X);
}
else if (Y >= X && Y >= Z) {
    max = Y;
    console.log("maximum number is ", Y);
}
else {
    max = Z;
    console.log("maximum number is ", Z);
}
/*Q13. Leap Year Checker
Instructions: Check if a given year is a leap year.

let year; // Determine if this is a leap year.*/
let year = 2024; // You can assign any year here to check if it's a leap year
let isLeapYear = false;
if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
        isLeapYear = true;
    }
}
if (isLeapYear) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}
/*14. Fahrenheit to Celsius Converter
Instructions: Write a program that converts temperature from Fahrenheit to Celsius.

let fahrenheit; // Convert this to Celsius and print the result.*/
let fahrenheit = 68; // You can assign any Fahrenheit temperature here
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.");
/*Q15. Positive, Negative, or Zero
Instructions: Check if a number is positive, negative, or zero.

let number; // Determine the sign of this number.*/
let value = -10; //  assign any number here to determine its sign
if (value > 0) {
    console.log(value + " is positive.");
}
else if (value < 0) {
    console.log(value + " is negative.");
}
else {
    console.log(value + " is zero.");
}
/*Q16. Multiplication Table
Instructions: Write a program that prints the multiplication table of a given number up to 10.

let number; // Print the multiplication table for this number up to 10.*/
let val = 5; // You can assign any number here for which you want to print the multiplication table
console.log("Multiplication table for", val + ":");
for (let i = 1; i <= 10; i++) { //using for loop
    let result = val * i;
    console.log(val + " x " + i + " = " + result);
}
//by using while loop
let integer = 5; //  assign any number here for which you want to print the multiplication table
console.log("Multiplication table for", integer + ":");
let i = 1;
while (i <= 10) {
    let result = integer * i;
    console.log(integer + " x " + i + " = " + result);
    i++;
}
