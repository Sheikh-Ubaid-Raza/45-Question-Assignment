var userNames = ["Admin", "Ubaid", "Adeel", "Maaz", "Kamran"];
userNames.forEach(function (username) {
    if (username == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for loggin in again."));
    }
});
