var current_users = ["Canon", "yashwa", "Hussain", "maaz", "Umar"];
var new_users = ["Yashwa", "Tayyab", "Sheryar", "Maaz", "Adeel"];
new_users.forEach(function (newUser) {
    if ( //    -
    current_users.some(//     |
    function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); } //     }    condition
    ) //     |
    ) { //    -
        console.log("Sorry ".concat(newUser, " is already been used"));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
