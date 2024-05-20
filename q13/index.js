//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements
//about these items, such as “I would like to own a Honda motorcycle.”
//Method 1:
// let transportation = ["Bike", "Car", "Aeroplane", "Train"];
// for(let i = 0; i < transportation.length; i++) {
// }
// console.log(transportation[0] + ": I love to ride a bike, its very convenient and cheaper to use");
// console.log(transportation[1] + ": I love to drive, but only in holidays due to lack of traffic");
// console.log(transportation[2] + ": I love to fly, its a great way to travel" );
// console.log(transportation[3] + ": I love to travel by train and I have travelled a lot, its very convenient and cheap" );
//Method 2 (Advanced by using Switch):
var transportation = ["Bike", "Car", "Aeroplane", "Train"];
for (var i = 0; i < transportation.length; i++) {
    var reason = "";
    switch (transportation[i]) {
        case "Bike":
            reason = "I love to ride a bike, its very convenient and cheaper to use";
            break;
        case "Car":
            reason = "I love to drive, but only in holidays due to lack of traffic";
            break;
        case "Aeroplane":
            reason = "I love to fly, its a great way to travel";
            break;
        case "Train":
            reason = "I love to travel by train and I have travelled a lot, its very convenient and cheap";
    }
    console.log(transportation[i] + ": ", reason);
}
