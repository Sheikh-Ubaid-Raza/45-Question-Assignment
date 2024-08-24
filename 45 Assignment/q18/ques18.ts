let places: string[] = ["Switzerland","Dubai","America","India","USA"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();                                             // work same of line  7
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);         //  work same of line  11
