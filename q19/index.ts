//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

let guestList = ["Quaid-e-Azam", "Muhammad Rafi", "Nazia Hassan"]

//suppose Muhammad Rafi could not make it to the dinner due to his concert
console.log("Unfortunately! " + guestList[1] + " won't be able to arrive at the dinner");
guestList.splice(1, 1);
guestList.push("Ahmed Rushdi");

for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + " you are cordially invited to dinner at my house at 8 o clock.")
}

//Indicating number of people
let guestNum = guestList.length;
console.log("\n Total number of Guests invited for Dinner are: " + guestNum);
