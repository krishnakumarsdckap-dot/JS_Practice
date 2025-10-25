// 1 Print all numbers 1 to 50 but skip the multiple of 5.

// for (let i = 1;i <= 50;i++){
//     if (i%5 == 0){
//         continue;
//     }
//     console.log(i)
// }


// 2 Print multiplication table for given number 7.

// console.log("7 Tables")
// console.log("")
// let i = 7
// for (let j = 1;j <= 10;j++){
//     console.log(`${i} X ${j} = ${i*j} `)
// }


// 3 Sum of all odd numbers upto 100.

// let sum = 0;
// for(i=1;i<=100;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i)
//     sum+= i
// }
// console.log("Sum of all Odd numbers upto 100 is",sum);


// 4 Display Character of a string one by one using for...of.

// const sting = "Nothing"
// for(let word of sting){
//     console.log(word)
// }


// 5 Use switch to print the monthname based on choosing hte month number 

// const month = Number(prompt("Enter the Number of the month:"));
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
        
//     case 2:
//         console.log("Febrauary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month Number")
// }


// 6 
// Pyramid triangle
// function printPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         // Add spaces
//         for (let j = 1; j <= rows - i; j++) {
//             pattern += '  ';
//         }
//         // Add stars
//             for (let k = 1; k <= 2 * i - 1; k++) {
//             pattern += '* ';
//             }
//         console.log(pattern);
//     }
// }

// printPyramid(5);


// task

// let age = prompt("Enter Your Age");
// let text = "You can't drive!";

// if (age >= 18) {
//   text = "You can drive!";
// }
// else{
// 	text = "You Can't Drive"
// }
// document.getElementById("demo").innerHTML = text;



//-----------------------------------------------------------------------------------------------------------------//



                                    //Bala Anna's Task




// 1.Get a number as input from the user. Check whether the number is odd number or even number.

// let a = Number(prompt("Enter the First number:"));
// if (a%2==0){
//     console.log("The Given Number is an Even Number")
// }
// else{
//     console.log("The Given Number is Odd Number")
// }


// 2.Get 3 numbers from the users as num1, num2, num3. Check which one is the largest number

// let a = Number(prompt("Enter the First number:"));
// let b = Number(prompt("Enter the Second number:"));
// let c = Number(prompt("Enter the Third number:"));
// if (a>b && a>c){
//     console.log(`${a} is the greatest number`)
// }
// else if (b>a && b>c){
//     console.log(`${b} is the greatest number`)
// }
// else{
//     console.log(`${c} is the greatest number `)
// }


// 3.Get a number from the users. Check whether the number is divisible by 8.

// let a = Number(prompt("Enter the First number:"));
// if (a%8==0){
//     console.log("The Given Number is Divisible by 8")
// }
// else{
//     console.log("The Given Number is not Divisible by 8")
// }


// 4.Get a number from the users. Check whether the number is divisible by both 3 and 5.

// let a = Number(prompt("Enter the number:"));
// if (a%3==0 && a%5==0){
//     console.log(`${a} is Divisible by both 3 and 5`)
// }
// else if (a%3==0){
//     console.log(`${a} is Divisible by 3 but not divisible by 5`)
// }
// else if (a%5==0){
//     console.log(`${a} is Divisible by 5 but not divisible by 3`)
// }
// else{
//     console.log(`${c} is cannot be Divisible by both 3 and 5 `)
// }


// 5.Write the difference between equality operator and strict-equality operator.




// 6. Get 5 numbers as input from user and store it in the variable a, b, c, d, e. Execute the following operation and display the result a + b - c * d / e

// let a = Number(prompt("Enter the First Number:"))
// let b = Number(prompt("Enter the Second Number:"))
// let c = Number(prompt("Enter the Third Number:"))
// let d = Number(prompt("Enter the Fourth Number:"))
// let e = Number(prompt("Enter the Fifth Number:"))
// console.log(a + b - c * d / e);


// 7. Write a program that gets a number n from the user. The task is to print the number from 1 to n by mentioning it as odd or even number.

// let n = Number(prompt("Enter the Number:"))
// if(n%2==0){
//     console.log(`${n} is Even Number`)
// }
// else if (n%2==!0){
//     console.log(`${n} is Odd Number`)
// }
// else{
//     console.log(`Not A Number`)
// }

// 8. Get a number input n from the user. Print the numbers 1 to n with the following conditions:

// let arr = [];
// const n = Number(prompt("Enter the Number:"));
// for(i=1;i<=n;i++){
    
//    if(i%3==0 && i%5==0){
//         arr.push("Fizz Buzz")
//    }
//    else if (i%3==0){
//         arr.push("Fizz")
//    }
//    else if (i%5==0){
//         arr.push("Buzz")
//    }
//    else{
//         arr.push(i)
//    }
    
// }
// console.log(arr)


// ----------------------------------------------------------------------//

                            //Mini Game Project//

// const num=18;
// attempt=0;
// while(true){
// attempt++
// let sum= Number(prompt("guess the number:"));

// if(num===sum){
//     console.log(`Your Guess is correct at your ${attempt} attempt`) 
//     break;
// }
// else if(num<sum){
//         console.log("Your Guess is high")
// }
// else{
//         console.log("Your Guess is low")
// }
// }

