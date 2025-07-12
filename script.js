const currentPartner = "Queenie";
const age = 25;

if (currentPartner === "Queenie" && age < 25) {
  console.log("Wait until she is  25");
} else if (currentPartner === "Queenie" && age >= 30) {
  console.log("Leave her bro she is too old for you");
} else {
  console.log("You can find another one younger");
}

// Conditional Statements

/**
 * if to specify a block of code to be executed, if a specified condition is true
 * else to specify a block of code to be executed, if the same condition is false
 * else if to specify a new condition to test, if the first condition is false
 * switch to specify many alternative blocks of code to be executed
 */
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
  case 2:
    day = "Tuesday";
  case 3:
    day = "Wednesday";
  case 4:
    day = "Thursday";
  case 5:
    day = "Friday";
  case 6:
    day = "Saturday";
}
console.log(day);
