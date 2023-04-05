// write your own find and findIndex function
// (Hint: using for loop and if else)

const find= (arr,opration)=>{
    let value=undefined;
for(let i=0;i<arr.length;i++){
if(opration(arr[i])){
    value= arr[i];
 break;
}
}
return value;

}
// function opration(element){
// return     element>8
// }
let arr1=[3,5,6,4,3];
let finder= find(arr1,(element) => element>8);
// console.log(finder)
// let arrrr=arr1.map(el=> el*2)
// console.log("dslfjk",arrrr)
// ======================================================= //

const findof=(arr,opration)=>{
    let index= -1;
    for(let i=0;i<arr.length;i++){
if(opration(arr[i])){
     index= i; break ;  }
    }
    return index;
}
let findindex= findof(arr1,(el)=>el===4);
// console.log(findindex)

// =====================================================//

/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 */ 
const practiceData = [[14,21,23,64], [33,46,51,65]]
const resultant=[];
for(let i=0;i<practiceData.length;i++){
    const data= practiceData[i].map(val => val+1)
resultant.push(data)
}
//console.log(resultant)

  
 /* requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */
let evendata=[]
 for(let i=0;i<practiceData.length;i++){
    const data= practiceData[i].filter(val => val%2===0);
evendata.push(data)
 }
//  console.log(evendata);


// ======================================================== //

    const array = [23 , 45,467, 789, 34, 989, 56]

    // problem => return an array such that numbers at odd index are multiplied by 2
    // and numbers at even index are multiplied by 10;

let mapping=array.map((el, index) => index%2===0?el*10:el*2);
// console.log(mapping);



// ======================================================== //


//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */


 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
//  let arr=[];
//  arr.push(carBrands)
//  arr.push(carModel)

// const carObject = carBrands.reduce((obj, brand, index) => {
//     obj[brand] = carModel[index];
//     return obj;
//   }, {});
//  //console.log(carObject);
 
 
// ======================================================== //


 
/* Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays. */
 
 const arrays = [[1, 2, 3], [4, 5], [6]];
 result =  [1, 2, 3, 4, 5, 6]
 let answ=[2,4]
for(let i=0;i<arrays.length;i++){
assw= [...amsw,...arrays[i]]
}
const flatten = arrays.reduce((acc, curr) => [...acc, ...curr], []);

//console.log(flatten);


// ======================================================== //


 
   const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  // return an array with all words converted into uppercase using higher order function
  //const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  let ans= countries.map(el => el.toUpperCase());
  console.log(ans)


// ======================================================== //