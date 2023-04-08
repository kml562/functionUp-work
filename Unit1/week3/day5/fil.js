const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];


const result=facebookProfiles.filter((el)=>el.location==="gurgaon")
    
const final=result.map((x)=>
x.lastName? x.firstName+" "+x.lastName:x.firstName

)

console.log(final)

// function sum(a,b){
//      return a+b
// }
function sum(a,b){
    return a+b
}
function kml(x,y,sum){
return sum(x,y)
}
