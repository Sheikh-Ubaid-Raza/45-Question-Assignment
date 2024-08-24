let userNames : string[]=["Admin","Ubaid","Adeel","Maaz","Kamran"]

userNames.forEach((username) => {
    if (username == "Admin") {
      console.log("Hello Admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for loggin in again.`);
    }
  });