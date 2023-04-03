// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']

const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
// places.shift();
// console.log(places)
// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

morePlaces.unshift('delhi');
console.log(morePlaces)

// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
let combinedaray= morePlaces.slice(morePlaces.length-3);

combinedaray= [...combinedaray,...places.slice(0,3)]

console.log("combinedarray",combinedaray)

// ============================================================================= //
const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
// 4.
// destructure and store pincode into a variable named myPincode
let myPincode= myData.address.pinCode;
console.log(myPincode);
  
// 5.
// destructure and store second like into a vaiable named myLike
let myLike= myData.likes[1];
console.log(myLike);