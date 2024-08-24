// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
// only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop
// a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make
// sure you actually have an empty list at the end of your program.

let guests:string[]= ["Canon","Maaz","Kamran"];
console.log("Now We arrange bigger dinner table !!");

guests.unshift("Ahmer");

guests.splice(1,0,"Huzaifa");

guests.push("Zayan");

for(let i=0; i<guests.length; i++){
    console.log(`I want to invite ${guests[i]} on dinner.`);
}
// Question:17

console.log("Sorry I can invite only two peoples on dinner");

while(guests.length > 2){
   let removedGuests= guests.pop()
   console.log(`Sorry,I can't invite ${removedGuests} on dinner.`)
}

for (let i = 0; i < guests.length; i++) {
    const element = `${guests[i]} ,you're still invited to dinner`;
    console.log(element)
}

guests.splice(0, guests.length)
console.log(guests);                          // []
