/** authentication sample  */

// const name = prompt("Enter your name");
// console.log(typeof name);
// if (name == "") {
//   alert("Enter your name field");
// }
// const password = prompt("Enter your password");
// const confirm__password = prompt("Enter your password again");
// if (password == "" && confirm__password == "") {
//   alert("Enter password field");
// } else if (password == confirm__password) {
//   alert(`${name} successfully logged`);
//   document.getElementById("yourName").textContent = `Serve data's of ${name}`;
// } else {
//   alert("Login failed! Check your password");
// }

/* swapping */
// function test() {
//   var a = "3";
//   var b = "8";

//   [a, b] = [b, a];

//   console.log("a is " + a);
//   console.log("b is " + b);
// }

// test();

/** concatunation */

// const firstName = prompt("Enter your first name ?");
// const lastName = prompt("Enter your last name?");
// document.getElementById(
//   "yourName"
// ).textContent = `Hello there , ${firstName} ${lastName}`;

/** length */

// function handleSubmit() {
//   const totalValue = 50;
//   const input1 = document.getElementById("txtid");

//   if (input1.value.length <= totalValue) {
//     document.getElementById("counter").textContent = `${input1.value.slice(
//       0,
//       50
//     )}`;
//   } else {
//     alert(
//       `You entered 50 character's please delete ${
//         input1.value.length - totalValue
//       } characters`
//     );
//   }
// }

/** exercise 1 */

// function handleSubmit() {
//   const value = document.getElementById("txtid").value;
//   const sliceLevel = value.slice(1);
//   const lowerLevel = sliceLevel.toLowerCase();
//   const upperLevel = value.charAt(0).toUpperCase();
//   const combination = upperLevel + lowerLevel;
//   alert(`hi , ${combination}`);
// }

/** exercise 2 */
// const dogAge = prompt("Enter your age of dog");
// const humanAge = (dogAge - 2) * 4 + 21;
// alert(
//   `The age of human combining to dog age is : humanAge ${humanAge} , dogAge ${dogAge}`
// );

/** exercise 3 */

// function getMilk(bottles, cost) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   console.log(
//     `buy ${bottles} bottles of milk and the amount of ${bottles} bottles of milk is ${
//       bottles * cost
//     } dollar`
//   );
// }

// getMilk(2, 1.5);

/** exercise 4 */

// function lifeInWeeks(age) {
//   const sum = 90 - age;
//   const birthDays = sum * 365;

//   const birthWeaks = sum * 52;
//   const birthMonths = sum * 12;

//   console.log(
//     `You have ${birthDays} days, ${birthWeaks} weeks, and ${birthMonths} months left`
//   );
// }

// lifeInWeeks(56);

/** bmi calculator */

// function bmiCalculator(weight, height) {
//   const sum = weight / (height * height);
//   return Math.round(sum);
// }
// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);

/** love calculator */

function handleSubmit() {
  const yourName = document.querySelector(".yourName").value;
  const crushName = document.querySelector(".yourCrush").value;

  if (yourName == "" || crushName == "") {
    alert(`please enter all fields`);
  } else {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById(
      "message"
    ).textContent = `${yourName} ${randomNumber}% matches to ${crushName}`;
  }
}

/** Advanced BMI Calculator */

// function bmiCalculator(weight, height) {
//   const BMI = weight / Math.pow(height, 2);
//   if (BMI < 18.5) {
//     const display1 = "Your BMI is " + BMI + "," + " so you are underweight.";
//     console.log(display1);
//     return display1;
//   }
//   if (BMI < 18.5 && BMI < 24.9) {
//     const display2 = "Your BMI is " + BMI + "," + " so you are normalweight.";
//     console.log(display2);
//     return display2;
//   }
//   if (BMI > 24.9) {
//     const display3 = "Your BMI is " + BMI + "," + " so you are overweight.";
//     console.log(display3);
//     return display3;
//   }
// }

// bmiCalculator(45, 1.25);

/** leap year */

// function isLeap(year) {
//   if (year % 4 === 0) {
//     const sum = year / 4;
//     const leapYear = sum + " " + "Leap";
//     console.log(leapYear);
//     return leapYear;
//   }

//   if (year % 100 === 0) {
//     const sum = year / 100;
//     const leapYear = sum + " " + "Leap";
//     console.log(leapYear);
//     return leapYear;
//   }

//   if (year % 100 !== 0) {
//     const sum = year / 100;
//     const notLeapYear = sum + " " + "Not Leap";
//     console.log(notLeapYear);
//     return notLeapYear;
//   }
//   if (year % 400 === 0) {
//     const sum = year / 400;
//     const leapYear = sum + " " + "Leap";
//     console.log(leapYear);
//     return leapYear;
//   }
//   if (year % 400 !== 0) {
//     const sum = year / 400;
//     const notLeapYear = sum + " " + "Not Leap";
//     console.log(notLeapYear);
//     return notLeapYear;
//   }
// }

// isLeap(1948);

// const names = [];
// console.log(names);
// let start;
// for (start = 0; start < 5; start++) {
//   names.push(prompt("Store 5 values in to the array"));
// }
// const searchItem = prompt(`Check the person you need`);
// console.log(searchItem);
// if (names.includes(searchItem)) {
//   alert(`welcome, ${searchItem}`);
// } else {
//   alert(`Sorry the name you searched isn't in the list`);
// }

/** fizzbuzz exercise */

// const output = [];
// console.log(output);
// let num = 1;
// function fizzBuzz() {
//   output.push(num++);
//   if (num % 3 === 0) {
//     output.push("Fizz");
//   }
//   if (num % 5 === 0) {
//     output.push("Buzz");
//   }
//   if (num % 3 === 0 && num % 5 === 0) {
//     output.push("FizzBuzz");
//   }
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

/** launch problem */

// function whosPaying(names) {
//   const name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
//   const randomName = Math.floor(Math.random() * name.length);
//   console.log(`${name[randomName]} is going to buy lunch today!`);
// }

// whosPaying();

/** 99 bottles of beer challange */

// function beer() {
//   let num = 100;
//   while (num > 0) {
//     console.log(`${num} bottles of beer in my hand`);
//     num--;
//   }
//   if (num == 0) {
//     console.log(`none of the beers in my hand`);
//   }
//   console.log(num);
// }

// beer();

/** fibonocci series */

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  let fib = [0, 1];

  if (n == 0 || n == 1) {
    fib.splice(1, 1);
  }
  for (let start = 2; start <= n - 1; start++) {
    fib[start] = fib[start - 2] + fib[start - 1];
  }
  console.log(fib);
}

fibonacciGenerator(3);
