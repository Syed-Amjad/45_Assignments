//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make 
// one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.

let guestList = ["Quaid-e-Azam", "Muhammad Rafi", "Nazia Hassan"]
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + " you are cordially invited to dinner at my house at 8 o clock.")
}

//Making intentional Array Error by calling wrong index i.e 3 instead of 2
console.log("\n" + guestList[3]);

//Now correcting this error by calling the right index
console.log("\n" + guestList[2]);




