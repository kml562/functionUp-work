// making a list function that will return array of el as a list insdie a string
const list =(arr)=>{

   return  arr.join(",");

}
// fide method using the index number
let find=(arr,num)=>{
return num<arr.length?arr[num]:`not avilable ,movies id is between 0 to ${arr.length-1}`;
}

module.exports={list,find};