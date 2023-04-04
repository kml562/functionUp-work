const carBrands = ["honda", "toyota", "maruti","tata"];
 const carModel = ["city", "innova", "alto", "nano"];
 let obj={};
// carBrands.forEach((el,i)=>{
//     obj[el]=carModel[i];

//  })
// console.log(map);
// // map is a function and it return the arr;
// foreach dose not return ;
let arr=[1,3,45,5,6];
let val= arr.map((el,i)=>{
    return i%2===0?el*10:el*5;
})
console.log(val);