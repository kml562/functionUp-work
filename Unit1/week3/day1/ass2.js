const facebookProfiles = [
  {
    firstName: "Akash",
    lastName: "Negi",
    number: "111111111",
    likes: ["music", "movies"],
    hasDrivingLicense: false,
    address: {
      location: "rampur",
      state: "up",
    },
    emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
  },
  {
    firstName: "Pritesh",
    lastName: "Kumar",
    number: "222222222",
    likes: ["code", "driving"],
    hasDrivingLicense: false,
    address: {
      location: "gurgaon",
      state: "haryana",
    },
    emails: ["fgdfg@gmail.com"],
  },
  {
    firstName: "Sabiha",
    lastName: "Khan",
    number: "333333333",
    hasDrivingLicense: false,
    address: {
      location: "lucknow",
      state: "up",
    },
  },
  {
    firstName: "Suyash",
    lastName: "Kashyap",
    number: "444444444",
    likes: ["travel", "driving"],
    hasDrivingLicense: true,
    address: {
      location: "alwar",
      state: "rajasthan",
    },
    emails: ["abc@yahoo.com"],
  },
  {
    firstName: "Jay",
    likes: ["food", "mobile"],
    hasDrivingLicense: true,
    address: {
      location: "gurgaon",
      state: "haryana",
    },
    emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
  },{
    firstName: "ritik",
    likes: ["food", "mobile"],
    hasDrivingLicense: true,
    address: {
      location: "gurgaon",
      state: "haryana",
  }}
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )

// ==================================== 0 ==================================== //

function forrev(name,property){

for(let i=0;i<facebookProfiles.length;i++){
if(facebookProfiles[i].firstName===name){
  if(facebookProfiles[i][property]!==undefined){
let val=facebookProfiles[i][property]
return val;
  }else{
return "value donse not exist";
  }

}

}
return "use dose not found"

};

// console.log(forrev("ritik","likes"))
// 
function useHOF(name,property){
let val=facebookProfiles.find(el=>(name==el.firstName));
 if(val){
return  val[property]?val[property]:"value not found";
 }else{
  return "user not found";
 }


}

console.log(useHOF("ritiks","likess"));





















function profileLookup(name, property) {
  for (let i = 0; i < facebookProfiles.length; i++) {
    if (facebookProfiles[i].firstName === name) {
      if (facebookProfiles[i][property]) {
        return facebookProfiles[i][property];
      }

      return "no such property";
    }
  }
  return "person does not exist";
}
//  console.log(profileLookup("Pritesh", "number"));

//   return

// function lookup(name, property) {
//   facebookProfiles.forEach((el) => {
//     console.log(el.firstName);
//   });
// }
function profileLookups(name, property) {
  const profile = facebookProfiles.find(
    (profile) => profile.firstName === name
  );

  if (!profile) {
    return "person does not exist";
  }
  const value = profile[property];
  if (value === undefined) {
    return "no such property";
  }
  return value;
}

// console.log(profileLookups("Priteksh", "number"));

// ==================================2 ====================================== //
function getNamesFromGurgaon(facebookProfiles) {
  let ans = facebookProfiles
    .filter((el) => el.address.location == "gurgaon")
    .map((el) => {
      if (el.lastName != undefined) {
        return el.firstName + " " + el.lastName;
      }
      return el.firstName;
    });
  return ans;
}
// console.log( getNamesFromGurgaon(facebookProfiles))
const getNamesFromGurgaonforloop = (arr) => {
  let Arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].address.location == "gurgaon") {
      if (arr[i].lastName != undefined) {
        Arr.unshift(arr[i].firstName + " " + arr[i].lastName);
      } else {
        Arr.unshift(arr[i].firstName);
      }
    }
  }
  return Arr;
};
//  console.log(getNamesFromGurgaonforloop(facebookProfiles))
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //
// 2. complete this function, which takes state name as argument and return the name
// of one of its residents

function findFullName(stateName) {
  for (let i = 0; i < facebookProfiles.length; i++) {
    if (stateName == facebookProfiles[i].address.state) {
      if (facebookProfiles[i].lastName) {
        return (
          facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName
        );
      }
      return facebookProfiles[i].firstName;
    }
  }
  return "no state data found";
}

function findFullNameHOF(stateName) {
  const residents = facebookProfiles.filter(
    (profile) => profile.address && profile.address.state === stateName
  );

  if (residents.length === 0) {
    return "no state data found";
  }

  return `${residents[0].firstName} ${residents[0].lastName}`;
}

//console.log(findFullNameHOF("up"));
// ================================== 3 ====================================== //

function getDLStatus(facebookProfiles) {
  const gurgaonResidents = [];
  for (let i = 0; i < facebookProfiles.length; i++) {
    const profile = facebookProfiles[i];
    if (profile.address.location === "gurgaon") {
      const fullName = profile.firstName + " " + profile.lastName;
      const licenseStatus = profile.hasDrivingLicense ? "D/L" : "N D/L";
      gurgaonResidents.push(fullName + " - " + licenseStatus);
    }
  }
  return gurgaonResidents;
}

function getGurgaonResidentsWithLicenseStatus() {
  const gurgaonResidents = facebookProfiles.filter(
    (profile) => profile.address.location === "gurgaon"
  );
  return gurgaonResidents.map((profile) => {
    const fullName = `${profile.firstName}`;
    const licenseStatus = profile.hasDrivingLicense ? "D/L" : "N D/L";
    return `${fullName} - ${licenseStatus}`;
  });
}
console.log(getGurgaonResidentsWithLicenseStatus())
//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array.
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //
function getFullName(facebookProfiles) {
  return facebookProfiles.map(
    (profile) => `${profile.firstName} ${profile.lastName}`
  );
}

// const fullNames = getFullName(facebookProfiles);
// console.log(fullNames);

function getFullNameLoop(facebookProfiles) {
  let fullNames = [];
  for (let i = 0; i < facebookProfiles.length; i++) {
    let profile = facebookProfiles[i];
    if (profile.lastName) {
      let fullName = profile.firstName + " " + profile.lastName;
      fullNames.push(fullName);
    } else {
      let fullName = profile.firstName;
      fullNames.push(fullName);
    }
  }
  return fullNames;
}
// console.log(getFullNameLoop(facebookProfiles))

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]

// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
  let ansarr = [];
  for (let i = 0; i < facebookProfiles.length; i++) {
    let currarr = facebookProfiles[i].likes?facebookProfiles[i].likes:[];
ansarr= ansarr.concat(currarr);
  }
  return ansarr;
}
// console.log(getLikes(facebookProfiles))

function getAllLikesHof(profiles) {
  let likes = [];
  profiles.forEach(profile => {
    if (profile.likes) {
      likes.push(...profile.likes);
    } });
  return likes;
}

// const allLikes = getAllLikesHof(facebookProfiles);
// console.log(allLikes);

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {
let ans=facebookProfiles.find((el)=>{
if(el.address.state=="dehli"  ){
  return el
}
})
if(ans){
  if(el.hasDrivingLicense){
    return ans.lastName? ans.firstName+" "+ans.lastName+"-- DL":ans.firstName+"-- DL";
  }else{     return ans.lastName? ans.firstName+" "+ans.lastName+"--NDL":ans.firstName+"-- NDL";}
  
}else{
  return "no such person"
}

}

//  console.log( getNameFromDelhiWithDL(facebookProfiles))

function getNameFromDelhiWithDLloop(arr){
 
  for(let i=0;i<arr.length;i++){
    if(arr[i].address.state=="delhi"){
      if(arr[i].hasDrivingLicense){ return ans.lastName? ans.firstName+" "+ans.lastName+"-- DL":ans.firstName+"-- DL"; }
  else{
    return ans.lastName? ans.firstName+" "+ans.lastName+"--NDL":ans.firstName+"-- NDL"; 
  }
  
  }else{
    let x="no such person"
    return x;
  }
}}

//  console.log(getNameFromDelhiWithDLloop(facebookProfiles))
//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh

function getNameOfDriverWithoutDL(facebookProfiles) {
 for(let i=0;i<facebookProfiles.length;i++){
  for(let j=0;j<facebookProfiles[i].likes.length;j++){
if(facebookProfiles[i].likes[j]==="driving"){
  if(facebookProfiles[i].hasDrivingLicense==false){
return facebookProfiles[i].lastName? facebookProfiles[i].firstName+" "+facebookProfiles[i].lastName: facebookProfiles[i].firstName;
  }
}
  }
 }
 return "not found";
}
let getName=getNameOfDriverWithoutDL(facebookProfiles);
// console.log(getName);

function findDrivingLikesWithoutLicensehof(facebookProfiles) {
  const person = facebookProfiles.find((el) => {
    return el.likes && el.likes.includes("driving") && !el.hasDrivingLicense;
  });

  return person ? person.firstName : "No person found";
}
console.log(findDrivingLikesWithoutLicensehof(facebookProfiles))

/*
  {
    firstName: "Akash",
    lastName: "Negi",
    number: "111111111",
    likes: ["music", "movies"],
    hasDrivingLicense: false,
    address: {
      location: "rampur",
      state: "up",
    },
    emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
  },
  {
*/
