const nsum=(n)=>{
let nval= (n*(n+1))/2;
return nval;
}

const actualsum= (arr)=>{
    let asum=0;
    arr.forEach(el => {
        asum+=el;
    });
    return asum;
}


// if arr[0]!=1; then ;



module.exports= {nsum,actualsum}