//40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, 
//and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number
// of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

//Method 1: By Using Object Literal
// function make_album(artist: string, title: string, tracks?: number): object {
//     return {
//         artist: artist,
//         title: title,
//         tracks: tracks
//     }
// }
// let album = make_album("Sajjad Ali", "Babia", 8);
// let album1 = make_album("Shehzad Roy", "Saali", 6);
// let album2 = make_album("Amir Saleem", "Ajnabi");

// console.log(album);
// console.log(album1);
// console.log(album2);

//Method 2: By using Interface

interface Album {
    artist: string,
    title: string,
    tracks?: number
}
function make_album(artist: string, title: string, tracks?: number): Album {
    return {
        artist: artist,
        title: title,
        tracks: tracks
    };
}   
let album1: Album = make_album("Sajjad Ali", "Babia", 8);
let album2: Album = make_album("Shehzad Roy", "Saali", 6);
let album3: Album = make_album("Amir Saleem", "Ajnabi");

console.log(album1);
console.log(album2);
console.log(album3);

