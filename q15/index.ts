// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList = ["Quaid-e-Azam", "Muhammad Rafi", "Nazia Hassan"]

//suppose Muhammad Rafi could not make it to the dinner due to his concert
console.log("Unfortunately! " + guestList[1] + " won't be able to arrive at the dinner");
guestList.splice(1, 1);
guestList.push("Ahmed Rushdi");

for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + " you are cordially invited to dinner at my house at 8 o clock.")
}
