//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each 
//person’s name, print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

let names = ["Ali", "Salman", "Umair"];
let message = "! Hello, Welcome to TypeScript"
for (var i = 0; i < names.length; i++) {
    console.log(names[i] + message);
}
