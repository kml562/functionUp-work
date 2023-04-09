const array = [23 , 45,467, 789, 34, 989, 56];
let ans= array.map((el,i)=>  i%2===0?el*10:el*2);
console.log(ans);