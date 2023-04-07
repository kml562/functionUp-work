// filter functin ; return array, in this array only true condition el will be filtered, if all condition false
//  return [],
// myfilter(trialarr,(el) => el%2==0)
// function {  }
function myfilter(arr,cond){
   let ans=[];
   for(let el of arr){
    if(cond(el)){
        ans.push(el);
    }
   }

return ans;
}
// el index,array

let trialarr= [2,4,5,6,7,8,9,10,11,12,13,14];
let xx=trialarr.filter((el)=>{
    if(el%2===0){
        return el;
    }
})
// console.log(xx)
// // let ansar= myfilter(trialarr,(el)=>el%2==0)
// console.log(ansar);

function mymap(arr,fun){
let ans=[];
for(let el of arr){
ans.push(fun(el));
}
return ans;
}
const newwww=()=>{

}
let newww=mymap(trialarr,(el)=>el*2)
console.log(newww)