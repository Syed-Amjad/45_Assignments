//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function make_sandwich(ingredients) {
    var sandwichSummary = "Your Sandwich will have ";
    var flag = true;
    for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
        var i = ingredients_1[_i];
        if (flag) {
            flag = false;
        }
        else {
            sandwichSummary += ", ";
        }
        sandwichSummary += i;
    }
    console.log(sandwichSummary);
}
make_sandwich(["cheese", "butter"]);
make_sandwich(["cheese", "egg", "cucumber"]);
make_sandwich(["cheese", "butter", "egg", "lettuce"]);
