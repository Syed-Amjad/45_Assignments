//35. Animals: Think of at least three different animals that have a common characteristic. Store the names 
//of these animals in a list, and then use a for loop to print out the name of each animal. 

// let animalNames = ["Cat", "Dog", "Rabbit"];
// for (let i = 0; i < animalNames.length; i++) {
//     if (animalNames[i] === "Cat") {
//         console.log("A " + animalNames[i] + " is surely a best choice for a Pet")
//     }
//     else if (animalNames[i] === "Dog") {
//         console.log("A " + animalNames[i] + " is also a good choice for a Pet")
//     }
//     else {
//         console.log("A " + animalNames[i] + " is also a good choice for a Pet but you must have a lawn in your home.")
//     }
//     }
//     console.log("One thing which makes all these " + animalNames + " common is their loyality, all three of them are very faithful to humans. So, any of these animals could be a great Pet")

// Advance method by using Switch

let animalNames = ["Cat", "Dog", "Rabbit"];
for (let pet of animalNames) {
    let message = "";
    switch (pet) {
        case "Cat":
            message = "A " + pet + " is surely a best choice for a Pet";
            break;
            case "Dog":
                message = "A " + pet + " is also a good choice for a Pet";
                break;
                case "Rabbit":
                    message = "A " + pet + " is also a good choice for a Pet but you must have a lawn in your home."
    }
    console.log(message);
}
let characteristic = "Faithful and Loyal";
console.log("One thing which makes all these animals a lovely Pet is their characterisitc of being " + characteristic + " with their owners.")
