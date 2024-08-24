let current_users:string[] = ["Canon","yashwa","Hussain","maaz","Umar"];

let new_users:string[]=["Yashwa","Tayyab","Sheryar","Maaz","Adeel"];

new_users.forEach((newUser) => {
    if (                                                                        //    -
      current_users.some(                                                       //     |
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()    //     }    condition
      )                                                                         //     |
    ) {                                                                         //    -
      console.log(`Sorry ${newUser} is already been used`);
    } else {
      console.log(`${newUser} is available.`);
    }
  });