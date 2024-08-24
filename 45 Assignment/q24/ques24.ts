// Question # 24

// Equality with string
console.log("Ubaid" == "Ubaid");  // T
console.log("raza" !== "raza"); // f

// Equality with lowerCase function
console.log("UBAID".toLowerCase() == "ubaid");  // T
console.log("ahmad".toLowerCase() == "shazad"); // F

// Numerical test
console.log(10 == 10); // T
console.log(5 !== 5)  // f 
console.log(25 >= 15); // T
console.log(12 < 10); // f

// Test using && and || operator
console.log( true && true);  // T
console.log( 5 > 3 || 3 < 5);  // T

// Test wheter an item in array
let fruits:string[] = ["apple","mango","banana","cherry"];
console.log(fruits.includes("apple"));                 // T 
console.log(fruits.includes("grapes"));                //   F

// Test wheter an item is not in array
console.log(!fruits.includes("grapes"));                //   T
