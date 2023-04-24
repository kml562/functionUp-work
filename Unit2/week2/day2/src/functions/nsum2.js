const nsum2= (first,last,arr) =>{
    let n= arr.length+1;
    let numsum2= (n * (first + last) )/ 2;
    return numsum2;
}
  module.exports = {nsum2}