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

const newPerson = {
  ...person,
  name: "Rahul",
  address: {
    ...person.address,
    pincode: 4567,
    emails: ["asd@outlook.com", ...person.address.emails.slice(1)],
  },
};
console.log(person,newPerson);

/**
 * 
 * 
 * make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
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
// ===================================2222222222========================///==============================
/**2==
 * Primitive and non-primitive data types are two categories of data types used in programming languages.
 *  Primitive data types are simple types that are directly supported by the programming language,
 * while non-primitive data types are more complex types that can be defined by the programmer.They differ in
 * how they are assigned and compared. Primitive data types are assigned by value and compared by value,
 *  while non-primitive data types are assigned by reference and compared by reference. Understanding the
 * differences between these types is important for efficient and effective programming.
 * */
