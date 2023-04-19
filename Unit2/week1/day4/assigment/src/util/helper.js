//  printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example -
//Californium, W3D4, the topic for today is Nodejs module system’

// Call all these functions in route.js inside the test-me route handler

const printDate = () => {
  let date = new Date();
  let day = date.getDate();
  return day;
};

function printMonth() {
  const date = new Date();
  const month = date.getMonth() + 1;
  return month;
}

function getBatchInfo() {
  return `Technetium, Name:Kamal Bisht ,today Date: ${printDate()},Month: ${printMonth()}, and today they taught us about node modules,
   routes and prots , how to install modules how to use modules 
    `;
}
  module.exports = { getBatchInfo,printDate,printMonth};