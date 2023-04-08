// HOF- when a function have argument a function or he return a function these functions called higer order functions.

function myfun(el,i){
return myfun(el,i)
}
function mapp(arr,myfun){
    const ans=[];
    for(let i=0;i<arr.length;i++){
ans.push(myfun(arr[i],i));
    }
    return ans;
}

let Arr=[1,2,3,4,5];
let use= mapp(Arr,(el)=>el*2)
console.log("home   ",mapp(Arr,(el,i)=>{
    if(i%2==0){
      return   el*2
    }else{
      return  el*5
    }

}))
// console.log("inbulid   ", Arr.map((el)=>el*4) )
