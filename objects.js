const person = {
    name: "Luis",
    age: 20
}

console.log(person.name);

//adding new key
person.coding = true

//updating value of name key
person.name = "Mr Gonzalez"

person.favSongs = ["Thriller", "Rock with you", "They don't care about us"];

console.log(person.favSongs)

// Alarm
let day = "Sunday";

const alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
}
if (day == "Saturday" || day == "Sunday") {
    console.log(alarm.weekendAlarm)
} else {
    console.log(alarm.weekdayAlarm)
}

//Adding functions in
let offer = "none"
let time = 1200;

const cafe = {
    cafeName: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "cappuccino",
        "latte",
        "filter coffee",
        "tea",
        "hot choc"
    ],
    breakfastOffer: "free croissant with coffee",
    lunchOffer: "free drink with sandwich",
    noOffer: "sorry no offer",
    //in ES6 functions here don't need => :
    openCafe(){
        return "come on in";
    },
    closeCafe(){
        return "we are closed, come back tomorrow!";
    }
};
console.log(cafe.openCafe());
console.log(cafe.closeCafe());