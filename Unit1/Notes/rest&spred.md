function sum(...theArgs) {
  <!-- // return theArgs   -->
  <!-- theArgs is now a array thats why we can use for loop rest oprator allow us indifinte number of arguments  -->
  <!-- because its converted to array -->
  <!-- the Args= [arg1,arg2,....argn] -->
  let total = 0;
  for (let i=0;i<theArgs.length;i++) {
    total += theArgs[i];
  }
  return total;
}
console.log(sum(2,3,4,5))
now rest oprator converter arguments a array of elments
<!-- theArgs= [2,3,4,5] -->
