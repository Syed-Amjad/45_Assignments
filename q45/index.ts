//45. Cars: Write a function that stores information about a car in a Object. The function should always 
//receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

    function my_Car (manufacturer: string, model: string, color?: string, ...optionalDetails: string[]): object {
        return {
            manufacturer: manufacturer,
            model: model,
            color: color,
            optionalDetails: optionalDetails
        }
    }
    let car = my_Car("Toyota", "Corolla", "White", "AC");
    let car2 = my_Car("Honda", "Civic");
    let car3 = my_Car("Suzuki", "Cultus", "Grey", "Power Windows");

    console.log(car);
    console.log(car2);
    console.log(car3);

