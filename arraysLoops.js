let coffeeOrder = [
    "Alex - Cortado", "Ben - Cortado", "Charlie - Whatever's new"
]

coffeeOrder[2] = "Tea"

console.log(coffeeOrder[2])
//coffeeOrder[2] returns the third item which has been changed to "Tea".

let coffeeOrder = [
    "Alex - Cortado", "Ben - Cortado", "Charlie - Whatever's new"
]

coffeeOrder[2] = "Tea"

console.log(coffeeOrder.length)
//coffeeOrder.length will tell us how many items are in that array.

coffeeOrder.push("Espresso")

console.log(coffeeOrder)
//coffeeOrder will now have an extra item on the end "Espresso".

coffeeOrder.pop()

console.log(coffeeOrder)
//This will "pop" off the last item of an array(list). In this case removes "Espresso".

let favDrinks = [
    "Tea", 
    "Pressd juice", 
    "Coconut water",
    "grape drink"
];

//For loops (run a finite or limited number of times)

for (let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}
//i++ = increment by 1 each time. i can be called anything (not just "i").

let favDrinks = [
    "Tea", 
    "Pressd juice", 
    "Coconut water",
    "grape drink"
];
for (let count = 0; count < coffeeOrder.length; count++) {
    console.log( coffeeOrder[count] )
}
//"count = 0" -> starting point for loop

//e.g
let favDrinks = [
    "Tea", 
    "Pressd juice", 
    "Coconut water",
    "grape drink"
];
for (let count = 3; count < coffeeOrder.length; count--) {
    console.log( coffeeOrder[count] )
}

let evenNums = []

for(let counter = 0; counter < 30; counter++) {
    if (counter % 2 === 0) {
        evenNums.push(counter)
    }
}

console.log(`Numbers divisible by 2 between 0 andd 20 are: ${multiplesTwo}.`);

//Numbers divisible by 2 between 0 and 20 are: 0,2,4,6,8,10,12,14,16,18

// Array Activities
//Activity 1
let favSongs = [
    "Michael Jackson - Rock With You",
    "Nipsey Hussle - Blue Laces 2",
    "Meek Mill - 1942 flows"
];
console.log(favSongs);
//Stretch
favSongs.push("Sheff G - Flows")
favSongs.push("Sleepy Hallow - Lowkey")

favSongs.pop()

//Activity 2
let favSongs = [
    "Michael Jackson - Rock With You",
    "Nipsey Hussle - Blue Laces 2",
    "Meek Mill - 1942 flows"
];

favSongs.shift()


//While loops (run "while" a condition is met (or not))

//examples
let age = 15;

while( age < 18 ){
    console.log("You're a child"); age++;
}
console.log("You're an adult");

//cards example
let cards = ["diamond", "spade", "heart", "club"];
let currentCard = "club";

while(currentCard != "spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);


//Loop Activities
//Activity 1
let favFilms = [
    "Coach Carter",
    "Paid In Full",
    "Malcolm X"
];

favFilms.push("The Pursuit of Happyness", "Grown Ups")

for (let i = 0; i < 5; i++) {

    console.log(favFilms[i])

}


//Activity 2
for (let i = 0; i < 6; i++) {

    let numbers = Math.floor((Math.random() * 50) + 1);
    
    console.log(numbers);

}


//Activity 3
let num = [];

for (let i = 9; i >= 0; i--) {
    if (i >= 0) {
        num.push(i);
    }
}
console.log(`This is how you count from 9 - 0: ${num}.`)
//When counting from 0 - 9 the if statement changes to "if (i <= 9)" and the for statement would be "for (let i = 0(start point); i <= 9; i++"

//Activity 4
let favFilms = [
    "Coach Carter",
    "Paid In Full",
    "Malcolm X",
    "Grown Ups"
];

for (let i = 0; i < 4; i++) {
    console.log(favFilms[i])
}
if (favFilms[2] == "Ghostbusters") {
    console.log("Yay its Ghostbusters")
} else {
    console.log("Boo! We want Ghostbusters")
}

//Activity 5
for (let i = 0; i < 6; i++) {

    let numbers = Math.floor((Math.random() * 30) + 1);
    console.log(numbers);
    if (i % 7 == 0) {
        console.log("This number is divisible by 7")
    } else {
        console.log("This number is not divisible by 7")
    }
}

//Activity 6
let bobsFollowers = [
    "Luke",
    "Joe",
    "Rick",
    "Paul"
];

let hannahsFollowers = [
    "Susan",
    "Marge",
    "Rick",
    "Paul"
]

while(bobsFollowers != "Rick" && bobsFollowers != "Paul") {
    console.log(bobsFollowers)
}