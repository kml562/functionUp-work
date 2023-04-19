const express = require('express');
// const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const {welcome}= require("../logger/logger")
const { getBatchInfo,printDate,printMonth}= require("../util/helper.js")
const prb3= require("../validator/formatter.js")

const lodash = require('lodash');




router.get('/test-me', function (req, res) {
    res.send(`This should be working wit xyz!,data: ${getBatchInfo()}`)
    // console.log('the looger file data=',welcome())
    console.log(getBatchInfo());
    console.log("date&,month",printDate(),printMonth());
   prb3()
    welcome()
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
 'September', 'October', 'November', 'December'];
 let newarr= lodash.chunk(months,3)
 console.log(newarr);
 let odd= [3,5,7,3,33,23,25,55,7,79];
 let tail= lodash.tail(odd,9)
 console.log(tail);

 let arr1=[3,5,6,73,4,4,56,7,9,4,2];
 let arr2=[3,5,6,5,6,87,73]
 let arr3=[3,5,6,654,6,7,5]
 let arr4=[3,5,6,2,6,8,3,54]
 let arr5=[3,5,6,5,5,7,3,8,3,2,8]
 let uni= lodash.union(arr1,arr2,arr3,arr4,arr5)
 console.log("uniqe==",uni);
let pairaray= [["horror","The Shining"],["drama","Titanic"],["thrille","Shutter Island"],["fantasy","Pans Labyrinth"]]
let obj= lodash.fromPairs(pairaray);
console.log(obj)

});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;

