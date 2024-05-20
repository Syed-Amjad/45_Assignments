//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.


const favorite_fruits = ["apple", "strawberry", "oranges"];
if(favorite_fruits.includes("apple")) {
    console.log("You really like Apples")
}
if(favorite_fruits.includes("strawberry")) {
    console.log("You really like Strawberries")
}
if(favorite_fruits.includes("oranges")) {
    console.log("You really like Oranges")
}

//In question it is required to make 5 if statements for 3 fruits thats why the below if statements wont work.
if(favorite_fruits.includes("grapes")) {
    console.log("You really like Grapes")
}
if(favorite_fruits.includes("mango")) {
    console.log("You really like Mango")
}