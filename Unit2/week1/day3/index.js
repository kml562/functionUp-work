let arr= [1,45,-5,7,9,10]

let min= Infinity;

let max= -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i]<min){min=arr[i]}
    if(arr[i]>max){max=arr[i]}
}
console.log(min,max)
arr