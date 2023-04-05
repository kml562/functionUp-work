const facebookProfiles = [
  {
    firstName: "Akash",
    lastName: "Agarwal",
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
  },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )

// ==================================== 0 ==================================== //

function profileLookup(name, property) {
  //write your code here
  let data = facebookProfiles.find((el) => el.firstName === name);
  if (data) {
    return data[property] ? data[property] : "no such property";
  }
  return "person dose not exist";
}
// console.log(profileLookup("Pritesh", "number"))

function profileLookupLoop(name, property) {
  //write your code here
  for (let i = 0; i < facebookProfiles.length; i++) {
    if (facebookProfiles[i].firstName === name) {
      return facebookProfiles[i][property]
        ? facebookProfiles[i][property]
        : "no such property";
    }
  }
  return "person not found";
}
// console.log(profileLookupLoop("Pritesh", "number"))
// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
//
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']
// {
//     firstName: "Sabiha",
//     lastName: "Khan",
//     number: "333333333",
//     hasDrivingLicense: false,
//     address: {
//         location: "lucknow",
//         state: "up",
//     },
// },
function getNamesFromGurgaon(facebookProfiles) {
  return facebookProfiles.reduce((acc, curr) => {
    const location = curr.address.location;
    if (location == "gurgaon") {
      curr.lastName
        ? acc.unshift(curr.firstName + " " + curr.lastName)
        : acc.unshift(curr.firstName);
    }
    return acc;
  }, []);
}
//console.log(getNamesFromGurgaon(facebookProfiles));

const getNamesFromGurgaonLoop = (facebookProfiles) => {
  let ans = [];
  for (let i = 0; i < facebookProfiles.length; i++) {
    if (facebookProfiles[i].address.location == "gurgaon") {
      facebookProfiles[i].lastName
        ? ans.unshift(
            facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName
          )
        : ans.unshift(facebookProfiles[i].firstName);
    }
  }
  return ans;
};
// console.log(getNamesFromGurgaonLoop(facebookProfiles))
// ==================================2 ====================================== //

function findFullName(stateName) {
  let val = facebookProfiles.find((el) => {
    return el.address.state === stateName;
  });
  if (val) {
    return val.lastName ? val.firstName + " " + val.lastName : val.firstName;
  } else return "not found state";
}

// console.log(findFullName("haryana"))

const findFullNameLoop = (stateName) => {
  for (let i = 0; i < facebookProfiles.length; i++) {
    if (facebookProfiles[i].address.state === stateName) {
      return facebookProfiles[i].lastName
        ? facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName
        : facebookProfiles[i].firstName;
    }
  }
  return "state not found in database";
};
// console.log(findFullNameLoop("rajasthan"))
// 2. complete this function, which takes state name as argument and return the name
// of one of its residents

// ================================== 3 ====================================== //

function getDLStatus(facebookProfiles) {
  return facebookProfiles
    .filter((el) => el.address.location == "gurgaon")
    .reduce((acc, curr) => {
      const { hasDrivingLicense, firstName, lastName } = curr;
      hasDrivingLicense
        ? acc.unshift(
            lastName
              ? firstName + " " + lastName + " -D/L"
              : firstName + " -D/L"
          )
        : acc.unshift(
            lastName
              ? firstName + " " + lastName + " -N D/L"
              : firstName + " -N D/L"
          );

      return acc;
    }, []);
}
// console.log(getDLStatus(facebookProfiles))

const getDLStatusLoop = (facebookProfiles) => {
  let ansarr = [];
  for (let i = 0; i < facebookProfiles.length; i++) {
    const { hasDrivingLicense, firstName, lastName } = facebookProfiles[i];
    if (facebookProfiles[i].address.location === "gurgaon") {
      hasDrivingLicense
        ? ansarr.unshift(
            lastName
              ? firstName + " " + lastName + " -D/L"
              : firstName + " -D/L"
          )
        : ansarr.unshift(
            lastName
              ? firstName + " " + lastName + " -N D/L"
              : firstName + " -N D/L"
          );
    }
  }
  return ansarr
};
//  console.log(getDLStatusLoop(facebookProfiles))
//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array.
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

function getFullName(facebookProfiles) {
    let arr=[];
facebookProfiles.forEach((el) => {
el.lastName? arr.push(el.firstName+" "+el.lastName): arr.push(el.firstName);
});
return arr;
}
// console.log(getFullName(facebookProfiles))

const getFullNameLoop = (facebookProfiles) =>{
    let arr=[];
    for(el of facebookProfiles){
 el.lastName? arr.push(el.firstName+" "+el.lastName): arr.push(el.firstName);      
    }
    return arr;
}
// console.log(getFullNameLoop(facebookProfiles))
// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]

// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
    const likesSet = new Set();
    facebookProfiles.forEach(el => {
      if (el.likes) {
        el.likes.forEach(like => {
          likesSet.add(like);
        });
      }
    });

    return [...likesSet];
}
// console.log(getLikes(facebookProfiles));


function getLikesLoop(facebookProfiles) {
    let set= new Set();
    for(let el of facebookProfiles){
         if(el.likes){
let llkearr= el.likes;
for(let i of llkearr){
    set.add(i);
}
    }
    }
    return [...set];
}
console.log(getLikesLoop(facebookProfiles));    
// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {
let ans= facebookProfiles.find(el => el. address.state ==="delhi");
return ans? (ans.lastName?ans.firstName+" "+ans.lastName:ans.firstName):"no such person";
}

function getNameFromDelhiWithDLLoop(facebookProfiles){
    for(let el of facebookProfiles){
    if(el.address.state==="delhi"){
        return el.lastName?el.firstName+" "+el.lastName:el.firstName;
    }
}
return "no such person"
}
// console.log(getNameFromDelhiWithDL(facebookProfiles))
//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

function getNameOfDriverWithoutDL(facebookProfiles) {
  //write your code here
  const person = facebookProfiles.find((el) => {
    return el.likes && el.likes.includes("driving") && !el.hasDrivingLicense;
  });

  return person ?person.firstName: "No person found";
}
console.log(getNameOfDriverWithoutDL(facebookProfiles))
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh
