// logical operators

// OR ||

// evaluates operands from left to right
// it converts it to boolean and if its true returns its original value of that operand
// if there's is no truthy values it returns the last falsy value

console.log(2 === 2 || 2 < 1 || 2 > 5); // true

// AND &&

// opposite to OR ||
// evaluates operands from left to right
// if converts it to boolean and if its false returns its original value of that operand
// if there's no falsy value it returns the last truthy value

console.log(2 === 1 && 1 === 1 && "2" > 2); // false

// logical not !

// Converts the operand to boolean type: true or false
// returns the inverse value

console.log("2" !== 2); // true

// nullish coalescing

// returns the first argument if it's not null/undefined otherwise  the second one

console.log(undefined ?? null); // null
console.log(2 ?? null);
