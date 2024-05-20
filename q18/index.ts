//18. Seeing the World: Think of at least five places in the world you’d like to visit.

let placesList = ["Turkey", "USA", "Italy", "Switzerland", "Maldives"];
console.log(placesList);
let placesListCopy = placesList.slice();

//Printing in Alphabetical Order
console.log(placesListCopy.sort());

console.log("The Array is still in its original state \n" + placesList);
//Printing the list in Reversed Order
let placesListRevSorted = placesList.slice();
console.log(placesListRevSorted.reverse());
console.log("The Array is still in its original state \n" + placesList);

//Reverse the original Array
placesList.reverse();
console.log("Reverse Order: \n" + placesList);
placesList.reverse();
console.log("Again Reverse Order: \n" + placesList);

//Printing the originial Array in alphabetical order
placesList.sort();
console.log("Alphabetical Order: \n" + placesList);

//Printing the original Array in a Reverse Order
placesList.reverse();
console.log("Reverse Alphabetical Order: \n" + placesList);

