var myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < myNumber.length; i++) {
    if (myNumber[i] === 1) {
        console.log("".concat(myNumber[i], "st")); // 1st
    }
    else if (myNumber[i] === 2) {
        console.log("".concat(myNumber[i], "nd")); // 2nd
    }
    else if (myNumber[i] === 3) {
        console.log("".concat(myNumber[i], "rd")); //  3rd
    }
    else if (myNumber[i] >= 4 && myNumber[i] <= 9) {
        console.log("".concat(myNumber[i], "th")); //  4th to 9th
    }
}
