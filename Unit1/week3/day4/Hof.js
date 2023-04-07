// filter functin ; return array, in this array only true condition el will be filtered, if all condition false
//  return [],
// myfilter(trialarr,(el) => el%2==0)

function myfilter(arr,cond){
   let ans=[];
   for(let el of arr){
    if(cond(el)){
        ans.push(el);
    }
   }
return ans;
}

let trialarr= [2,4,5,6,7,8,9,10,11,12,13,14];

let ansar= myfilter(trialarr,(el)=>el%2==0)
console.log(ansar)
