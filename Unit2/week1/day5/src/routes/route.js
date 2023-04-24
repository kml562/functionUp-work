const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const {array,objarr}=require("../data/data.js")
const {list,find}=require('../module/list.js');
const {findel}= require('../module/filter.js');
router.get('/movies', function(req, res) {
 
    console.log(list(array()))
res.send(list(array()))
});
// id is basically a index of array if the index of element exists then it wii return the element if is it not then 
// retun the  id number 0 to last index;
router.get('/movies/:id', function(req, res) {

console.log(req.params.id)
res.send(find(array(),req.params.id))
})

//Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
// Each movie object should have attributes - id and name. An example of movies array is objarray, 
//Return the entire array in this api’s response

router.get('/films', function(req, res) {
res.send(objarr())
console.log("hello world")
})

/*
Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to 
return a movie object with this id. In case there is no such movie present in the array, return a suitable
 message in the response body. Example for a request GET /films/3 should return the movie object 
/*/

router.get('/films/:filmID', function (req, res) {

res.send(findel(objarr(),req.params.filmID));

})

module.exports = router;