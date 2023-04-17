
let nums=[1,2,1,1,2,3,3,3,3,4,5,6]
let obj={};
for(let el of nums){
    if(!obj[el]){
        obj[el]=1;
    }else if(obj[el]===1){
        obj[el]++;
    }
}

let ans=[];
for(let i in obj){
    let val=+i
    if(obj[i]==1){
        ans.push(val);
    }else if(obj[i]==2){
 ans.push(val);
 ans.push(val);
    }
}
for(let i=ans.length;i<nums.length;i++) {
    ans= [...ans,"_"]
}
console.log(ans)

