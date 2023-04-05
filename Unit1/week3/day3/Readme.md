Passing By Value

In JavaScript, primitive data types are passed by value. What this means is that when you assign a variable to something, and that something is (or holds, like a variable) a primitive data type, then your original variable will contain the actual value. Let’s take a look at an example.

let a = "value";
let b = a;
console.log(b);
=> value
a = "another value";
console.log(b)
=> ???

console.log(b)
=> value

The resulting log is still the string “value” from the originally assigned variable. Why is this?

Well, like previously stated, primitive data types are passed by value.



Pass By Reference

So primitive data types are passed by value. What about non-primitive data types (Object, array, etc). These are passed by reference. What this means is that, if you are assigning a variable to a non-primitive data type to a variable, you are assigning the data types reference in memory to the variable, and not the value at that time.

let myArr = [1,2,3,4,5];
let referenceToArr = myArr;
referenceToArr.pop()
referenceToArr
=> [1, 2, 3, 4]

console.log(myArr)
=> [1,2,3,4]
Because the variable referenceToArr is pointing to the actual place in memory that the array exists in, and not it’s actual value at that time, affecting referenceToArr will also affect the myArr variable.


Avoid Accidentally Altering Non-Primitive Data Types

In order to alter the second variable without affecting the first (or more correctly, without altering the actual data-type that is stored in memory), you would need to copy it. You can achieve this with the spread operator (a relatively new trick), by slicing (if the data type is an array) or bythe Object.assign() method.

Here is an example of using the spread operator to achieve this, which can be used on both Arrays and Objects.

//Spread Operator

myArr = [1,2,3,4,5]
referenceToArr = myArr
copyOfArr = [...myArr]
referenceToArr.pop()
=> 5
referenceToArr
=>[1,2,3,4]
myArr
=> [1,2,3,4]
copyOfArr.push(7)
myArr 
=> [1,2,3,4,5,7]

Summary
When writing your JavaScript code, make sure you keep in mind the data types you are assigning to variables. If something seems to be changing in your code that you weren’t expecting (or something IS changing that you weren’t expecting) and you are assigning variables to other variables, make sure you check to make sure you aren’t confusing pass by reference and pass by value.

