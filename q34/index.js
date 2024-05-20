//34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.
var pizzaNames = ["Chicken Fajita", "Ranch", "Tikka"];
for (var i = 0; i < pizzaNames.length; i++) {
    if (pizzaNames[i] === "Chicken Fajita") {
        console.log("I really like " + pizzaNames[i] + " Pizza");
    }
    else if (pizzaNames[i] === "Ranch") {
        console.log("I also like " + pizzaNames[i] + " Pizza");
    }
    else {
        console.log("I sometimes like " + pizzaNames[i] + " flavor Pizza");
    }
}
console.log("Everyone likes Pizza. Being a fan of Pizza I love to eat Pizza's especially outside when it is fresh and hot. Moreover, I like spicy flavours in Pizza like Fajita, Ranch and Tikka. So, You can Say I really Love Pizza. ");
