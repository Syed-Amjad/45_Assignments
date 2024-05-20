//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// let guestList = ["Quaid-e-Azam", "Muhammad Rafi", "Nazia Hassan"]
// //suppose Muhammad Rafi could not make it to the dinner due to his concert
// console.log("Unfortunately! " + guestList[1] + " won't be able to arrive at the dinner");
// guestList.splice(1, 1);
// guestList.push("Ahmed Rushdi");
// guestList.unshift("Allama Iqbal");
// guestList.splice(guestList.length / 2, 0, "Muhammad Ali");
// guestList.push("Waheed Murad");
// console.log("Unfortunately, Our new Dining Table won't be arrived in time, so we apologize for the invitation.")
// let finalList = guestList.splice(0, 2);
// for (let i = 0; i < guestList.length; i++) {
//     console.log("Dear " + guestList[i] + " Please accept my apologies as our Dining Table won't be arrive in time so we can't accomodate all the guests. We'll invite you later when our Dining Table arrive. Thank You!!")
// }
// console.log("\n Our Final Guest List: " + finalList + "\n");
// for (let j = 0; j < finalList.length; j++) {
//     console.log("Dear " + finalList[j] + " We are inviting you to dinner at our home. We hope to see you there.")
// }
//Method 2 Advanced (Took the idea from Google Gemini)
var guestList = ["Quaid-e-Azam", "Muhammad Rafi", "Nazia Hassan"];
//suppose Muhammad Rafi could not make it to the dinner due to his concert
console.log("Unfortunately! " + guestList[1] + " won't be able to arrive at the dinner");
guestList.splice(1, 1);
guestList.push("Ahmed Rushdi");
guestList.unshift("Allama Iqbal");
guestList.splice(guestList.length / 2, 0, "Muhammad Ali");
guestList.push("Waheed Murad");
console.log("Unfortunately, Our new Dining Table won't be arrived in time, so we apologize for the invitation.");
while (guestList.length > 2) {
    var removedGuest = guestList.splice(0, 1);
    console.log("Dear " + removedGuest + " Please accept my sincere apology as we our unable to held the dinner due to the delay of Dining Table");
}
console.log("\n The Remaining Guests are: " + guestList.join());
for (var j = 0; j < guestList.length; j++) {
    console.log("\n Dear " + guestList[j] + " We are inviting you to dinner at our home. We are looking forward to see you there.");
}
