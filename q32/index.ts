//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a
// unique username.

let current_Users = ["Ali", "Fahad", "Salman", "Taimoor", "Naseer"];
let current_Users_lowerCase: string[] = [];
for (let user of current_Users) {
    current_Users_lowerCase.push(user.toLowerCase());

}
let new_users = ["Kamil", "Farhan", "salman", "ali", "Saqib"];

for (let new_user of new_users) {
    let new_user_lowerCase = new_user.toLowerCase();
    if (current_Users_lowerCase.includes(new_user_lowerCase)) {
        console.log("Sorry, the username " + new_user + " is already taken. Please enter a new username.");
    }
    else {
        console.log("The username " + new_user + " is available.");
    }
}
