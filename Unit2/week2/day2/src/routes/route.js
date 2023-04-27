const express = require("express");

const { route } = require("express/lib/application");
const app = express.Router();
const { nsum, actualsum } = require("../functions/nsum.js");
const { nsum2 } = require("../functions/nsum2.js");
module.exports = app;

//: The below questions are very commonly asked in nodejs interviews

//Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] :
// 4 is missing
// Your route code will look like this
app.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr = [1, 2, 3, 5, 6, 7];
  // let missingNumber
  // in this qustion n=7 so sum of the n numbers= n(n+1)/2
  let nsums = nsum(7);
  let accsum = actualsum(arr);
  let missingNumber = nsums - accsum;
  console.log(missingNumber);
  res.send({ data: missingNumber });
});

app.get("/so11b", function (req, res) {
  let arr = [1, 2, 3, 5, 6, 7];
  // all the value increse 1 by 1 so the next value wiil be arr[i]+1;
  let missingNumber;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      missingNumber = arr[i] + 1;
      break;
    }
   
  }
  res.send({ data: missingNumber });
});

// -write an api which gives the missing number in an array of integers starting from anywhere….e.g
//[33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
app.get("/sol2", function (req, res) {
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in
  //array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arr = [33, 34, 35, 37, 38];
  let missingNumber;
  ///LOGIC WILL GO HERE
  //nsum2 is a function that is in functions/nsum2.js  and  actualsum is  also a function in functions/nsum.js
let sum= nsum2(33,38,arr);
let accsum= actualsum(arr);
missingNumber= sum-accsum;
  res.send({ data: missingNumber });
});

///////////////////////////

app.get("/sol2b", function (req, res) {
	let arr = [33, 34, 35, 37, 38];
	// all the value increse 1 by 1 so the next value wiil be arr[i]+1;
	let missingNumber;
	for (let i = 0; i < arr.length - 1; i++) {
	  if (arr[i] + 1 != arr[i + 1]) {
		missingNumber = arr[i] + 1;
		break;
	  }
	 
	}
	res.send({ data: missingNumber });
  });