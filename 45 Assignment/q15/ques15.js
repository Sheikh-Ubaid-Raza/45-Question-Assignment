// 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
// out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guests = ["Zakriya", "Shazad", "Adeel", "Yousuf"];
for (var i = 0; i < guests.length; i++) {
    console.log("I want to invite ".concat(guests[i], " on dinner"));
}
var unableToAttendGuest = "Shazad";
console.log("".concat(unableToAttendGuest, ",can not make dinner because of some reason!"));
var newGuest = "Tayyab";
guests[guests.indexOf(unableToAttendGuest)] = newGuest;
for (var i = 0; i < guests.length; i++) {
    console.log("I want to invite ".concat(guests[i], " on dinner"));
}
