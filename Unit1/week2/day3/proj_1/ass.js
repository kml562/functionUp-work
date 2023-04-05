// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// answe number 1 -- with nested cond
const checknum = (number) => {
  if (number % 2 === 0) {
    number < 15 ? console.log("a") : console.log("b");
  } else {
    number < 10 ? console.log("c") : console.log("d");
  }
};

// using logical operators
const logical = (number) => {
  if (number % 2 === 0 && number < 15) {
    console.log("a");
  } else if (number % 2 === 0 && number > 15) {
    console.log("b");
  } else if (number % 2 == 1 && number < 10) {
    console.log("c");
  } else if (number % 2 == 1 && number > 10) {
    console.log("d");
  }
};
//// ------------------------------------------------------------------------------------------------////////////////
// problem 2
// Result
// answer should be: "Hi, my name is Farheena"
// we need to solve this using for loop

//// ------------------------------------------------------------------------------------------------//////////////
// 3...
//    ------------------------------------------------------------------------------------////////////////////////////////

let golbal =
  "global scope when we declare a variable globally its called goobal scope and you can access in global scope and also in local scope";
{
  let local =
    "when we declare a variable in locally its called local scope and you can access in local scope but not in global scope";
}


//// ------------------------------------------------------------------------------------------------////////////////
//// problem 4
// ------------------------------------------------------------------------------------------------//////////////

let myName = "Kamal Bisht";
let addmr = "Mr ." + myName;

myName = addmr;
console.log(myName);

//// ------------------------------------------------------------------------------------------------////////////////
//// problem 5
// ------------------------------------------------------------------------------------------------//////////////

function sumAndMulti(a, b) {
  let sum = 0;
  let multi = 1;

  for (let i = a; i <= b; i++) {
    sum += i;
    multi *= i;
  }
  console.log(sum, multi);
}
sumAndMulti(10, 20);

//// ------------------------------------------------------------------------------------------------////////////////
//// problem 6
// ------------------------------------------------------------------------------------------------//////////////

const leapyear = (year) => {
  return year % 4 === 0 &&
    year !== 1900 &&
    year !== 1800 &&
    year !== 2100 &&
    year !== 2200 &&
    year !== 2300
    ? true
    : false;
};

//// ------------------------------------------------------------------------------------------------/////////////
//// problem 7
// ------------------------------------------------------------------------------------------------//////////////

let area = (a, b, c) => {
  let s = (a + b + c) / 2;
  return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
};

// find the area of a triangle.  Lengths of its sides are 5, 6, 7
console.log("area is==" + area(5, 6, 7));

//// ------------------------------------------------------------------------------------------------/////////////
//// problem 8-------
// create two variables and store numbers in them.
// Now, write code, which return true if one of the variable is 50 or if their sum is 50.
// Otherwise, you need to return false.
// Also handle edge cases
// (in real world, these two numbers will be supplied by the users.
// Now think what if they supply something which is not a number ?)
// ------------------------------------------------------------------------------------------------//////////////

function problem8(first, second) {
  if (first + second === 50 || first === 50 || second === 50) {
    return true;
  } else return false;
}

let x = 32;
let y = 20;
console.log(problem8(x, y));

//// ------------------------------------------------------------------------------------------------/////////////
// problem 9
// create a variable and store a number inside it
// write program to check whether a given variable is between 100 and 200
// write program to check whether a given variable is between 100 and 200 or 400 and 500
// handle edge cases
//// ------------------------------------------------------------------------------------------------/////////////

let function11 = (num) => {
  if (num > 100 && num < 200) return true;
  else return false;
};

let function22 = (num) => {
  if ((num > 100 && num < 200) || (num > 200 && num < 400)) {
    return true;
  } else return false;
};

//// ------------------------------------------------------------------------------------------------/////////////
// problem 10
// you have 3 numbers.
// write a program which can find the largest number
//// ------------------------------------------------------------------------------------------------/////////////

const bignumber = (a, b, c) => {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else if (c >= a && c >= b) return c;
};

//// ------------------------------------------------------------------------------------------------/////////////
// problem 11

// create two variables and assign numbers to them
// now write a code which returns true if one of them is 8 or their sum or difference is 8. Otherwise it should return false
//// ------------------------------------------------------------------------------------------------/////////////

const lastfun = (x, y) => {
  if (x === 8 || y === 8 || x + y === 8 || x - y === 8) return true;
  else return false;
};
let xx= 19;
let yy=11;
console.log(lastfun(xx,yy));