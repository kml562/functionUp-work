const person = {
  name: "Akash",
  mobile: 999999999,
  address: {
      pincode: 1234,
      city: "gurgaon",
      state: "haryana",
      emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
      
  },
};

let newobj={
  ...person,
  name:"Rahul",
address:{
  ...person.address,
  pincode:4567,
  emails:['asd@outlook.com',...person.address.emails.slice(1)]
}
}
console.log(newobj,person);
// const isagoodmovie=(rating)=>{
//   return rating?true:false;
// }
  //person.name
// let arr=[3,5,5]
// let ar2=arr;
// let num=4;
// let num3=num
// if(num%2==0){
//   console.log("i m even")
  
// }else{
//   console.log("i m odd")
// }



let arr=[2,4,5,6];

let ans= arr.map((el)=>{
 if( el%2==0){
 return el
 }
})
console.log(ans)















/**
* 
* 
* make a copy of the person object and in that copy 
* change its name to "Rahul",  
* pincode to 4567 
* and obj={first email in the list to 'asd@outlook.com'
* 
* make sure that original person is not affected by these operation
* 
*  your new person should look like this 
* const newPerson = {
  name:"Rahul",
  mobile:999999999,
  address:{
      pincode:4567,
      city:"gurgaon",
      state:"haryana",
      emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
  }
}

*  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
  Hint: use destructuring at every level, i.e. copy each level shallowly
*/




/**
* explain the difference between primitive and non primitive data types when we use the following operator
* 1. assignment operator
* 2. equality operator
*
*
*/