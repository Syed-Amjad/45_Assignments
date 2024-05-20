//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//* Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Quaid-e-Azam", "Muhammad Rafi", "Nazia Hassan"];
//suppose Muhammad Rafi could not make it to the dinner due to his concert
console.log("Unfortunately! " + guestList[1] + " won't be able to arrive at the dinner");
guestList.splice(1, 1);
guestList.push("Ahmed Rushdi");
guestList.unshift("Allama Iqbal");
guestList.splice(guestList.length / 2, 0, "Muhammad Ali");
guestList.push("Waheed Murad");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + " you are cordially invited to dinner at my home at 9 o clock.");
}
