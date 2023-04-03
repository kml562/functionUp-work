
let h1= document.querySelector("h1");

const check=(num)=>{
    if(num<=1){
        return false;
    }
    for(let i=2; i<=num**0.5;i++){
        if(num%i==0){
            return false;
        }
    }return true;}
      

let text="";
for(let j=1;j<=50;j++){
if(check(j)){
    text+=j+" ";
}
}
h1.innerText=text;








   