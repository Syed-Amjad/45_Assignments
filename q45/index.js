//45. Cars: Write a function that stores information about a car in a Object. The function should always 
//receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.
function my_Car(manufacturer, model, color) {
    var optionalDetails = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        optionalDetails[_i - 3] = arguments[_i];
    }
    return {
        manufacturer: manufacturer,
        model: model,
        color: color,
        optionalDetails: optionalDetails
    };
}
var car = my_Car("Toyota", "Corolla", "White", "AC");
var car2 = my_Car("Honda", "Civic");
var car3 = my_Car("Suzuki", "Cultus", "Grey", "Power Windows", "dsdasfs");
console.log(car);
console.log(car2);
console.log(car3);
