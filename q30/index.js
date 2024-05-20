//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// let userNames = ["admin", "Ahmed", "Ali", "Eric", "Farhan"];
// if(userNames.includes("admin")){
//     console.log("Hello admin, would you like to see a status report?")
// }
// else{
//     console.log("Hello and Welcome to our Website!")
// }
// Method 2:
let userNames = ["admin", "Ahmed", "Ali", "Eric", "Farhan"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + userNames[i] + ", Thank you for logging in again");
    }
}
export {};
