//39. City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
// "Lahore, Pakistan"
function city_country(city, country) {
    return city + ", " + country;
}
var cityCountry = city_country("Karachi", "Pakistan");
console.log(cityCountry);
var cityCountry1 = city_country("Dacca", "Bangladesh");
console.log(cityCountry1);
var cityCountry2 = city_country("London", "England");
console.log(cityCountry2);
