//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.




// let magicians = ["Hamoon Jadugar", "Mushtaq", "Van Helsing", "Harry Potter"];
// function show_magicians(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);

//     }
// }
// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//        console.log( magicians[i] = "The Great " + magicians[i]);
//     }
// }   
// // show_magicians(magicians);
// make_great(magicians);

//Method 2:

let magicians = ["Hamoon Jadugar", "Mushtaq", "Van Helsing", "Harry Potter"];
function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);

    }
}
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

make_great(magicians);
show_magicians(magicians);
