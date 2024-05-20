//41. Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
var magicians = ["Hamoon Jadugar", "Mushtaq,", "Van Helsing", "Harry Potter"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
// By using For... Of 
// let magicians = ["Hamoon Jadugar", "Mushtaq,", "Van Helsing", "Harry Potter"];
// function show_magicians(magicians: string[]) {
//     for (let mag of magicians) {
//         console.log(mag)
//     }
// }
// show_magicians(magicians);
