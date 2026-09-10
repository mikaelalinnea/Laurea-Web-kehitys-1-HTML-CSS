console.log("Hello world!");
alert("Hello world!");

const name = "Mikaela";
let age = 23;
const favoriteAnimal = "Kissa";
console.log(name, age, favoriteAnimal);
console.log("Hei! Nimeni on " + name + " ja lempieläimeni on " + favoriteAnimal + ".");

const userName = prompt("Mikä sinun nimesi on?");
console.log("Hei " + userName + "! Tervetuloa JavaScriptiin.");

const userAge = prompt("Kuinka vanha olet?");
if (userAge >= 18) {
    console.log("Olet täysi-ikäinen.");
} else {
    console.log("Olet alle 18.")
}

function greetUser(name) {
    console.log("Hei " + name + "!");
}
greetUser("Janna");
greetUser("Hanna");
greetUser("Petri");

document.getElementById("button").addEventListener("click", function() {
    alert("Wohoo painoit nappia!!");
});