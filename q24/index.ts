//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result for each of the following:

let word1 = "Ali";
let word2 = "Salman";
let randomWord1 = "hello";
let randomWord2 = "HelLO";
let num1 = 5;
let num2 = 10;
let fruitNames = ["orange", "strawberry", "apple", "melon"];
let favPersonality = "Quaid-e-Azam";

//string check
console.log("Is word1 is equal to word2? I predict it as false");
console.log(word1 === word2);

//lowercase check
console.log("Is randomWord1 and randomWord2 are same? I predict it as true")
console.log(randomWord1.toLowerCase() === randomWord2.toLowerCase());

//Numbers comparison
console.log("Is num1 is equal to num2? I predict it as false");
console.log(num1 === num2);

console.log("Is num1 greater than num2? I predict it as false");
console.log(num1 > num2);

console.log("Is num1 less than num2? I predict it as true");
console.log(num1 < num2);

console.log("Is num1 greater than or equal to num2? I predict it as false");
console.log(num1 >= num2);

console.log("Is num1 less than or equal to num2? I predict it as true");
console.log(num1 <= num2);

console.log("Is num1 is not equal to num2? I predict it as true");
console.log(num1 !== num2);

//AND operator comparison

console.log("Is num1 is less than num2 and less than 12? I predict it as true ");
console.log(num1 < num2 && num1 < 12);

//OR operator comparison

console.log("Is num1 is less than num2 or greater than 20? I predict it as true")
console.log(num1 < num2 || num1 > 20); //first condition is true thats why JS gives result true and does not read the second conditon

//Test whether an item is in a array

console.log("Is apple is in the fruitNames array? I predict it as true");
console.log(fruitNames.includes("apple"));

//Test whether an item is not in a array

console.log("Is watermelon is in the fruitNames array? I predict it as false");
console.log(fruitNames.includes("watermelon"));





