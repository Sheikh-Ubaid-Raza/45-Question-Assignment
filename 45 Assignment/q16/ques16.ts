// 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three
// more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
// list. • Print a new set of invitation messages, one for each person in your list.

let guests:string[]= ["Canon","Maaz","Kamran"];
console.log("Now We arrange bigger dinner table !!");

guests.unshift("Ahmer");

guests.splice(1,0,"Huzaifa");

guests.push("Zayan");

for(let i=0; i<guests.length; i++){
    console.log(`I want to invite ${guests[i]} on dinner.`);
}
