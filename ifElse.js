if (condition1) {
    //do this
}
else if (condition2) {
    //do this
}
else {
    //if nothing else matched do this
}

//examples

if (1 === "1") {
    console.log(true);
} else {
    console.log(false);
}
//console.log(false) -> wrong data type

if (1 != "1") {
    console.log(true);
} else {
    console.log(false);
}
//console.log(false) -> 1 and "1" have same value

let place = "Manc";
let weather = "Cloudy";
if (place == "Manc" && weather == "Sunny") {
    console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs");
}
else {
    console.log("What it isn't raining?");
}
//console.log("What it isn't raining?") -> weather variable = "Cloudy" (not "Sunny" or "Rain")


//logicalOperators below:

// && = and (both conditions must be met in order for code to run)

// || = or (either condition can be met in order for the code to run)

//(expressionToBeEvaluated logicalOperator &&,|| expressionToBeEvaluated)

//e.g.
let day = "Saturday";
if (day == "Saturday" || day == "Sunday") {
    console.log("It's the weekend!")
}
else {
    console.log("When's the weekend?")
}

//Conditional (Ternary) Operators (shorthand if/else statements)

//examples
let age = 16;
if (age < 18) {
    console.log("Too young")
} else {
    console.log("Old enough")
}
//as a conditional operator
let age = 16;
(age < 18) ? console.log("Too young") : console.log("Old enough");
//console.log("Too young") -> age variable = 16 which is < 18

let age = 16;

let canDrink = (age < 18) ? "Too young" : "Old enough"

console.log(canDrink)
//This would log "Too young" -> age variable is 16 which is < 18

//Switch
switch(expression) {
    case x:
        //code here
        break;
    case y:
        //code here
        break;
    default:
        //code here
}

//e.g
const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}
//console.log("Distinction") -> grade = 87 which is >= 70

//Activity 1
let age = 19;
if (age > 17) {
    console.log("Yes I can serve you");
} else {
    console.log("You aren't old enough")
}
//Stretch
let age = 19;
let contry = "UK";
if (age > 17 && country == "USA") {
    console.log("Yes I can serve you")
} else {
    console.log ("You aren't old enough")
}

//Activity 2
let topping = "margherita";

switch (topping) {
    case "margherita":
    case "jalapenos":
    case "mozzerella":
    case "stuffed crust":
        console.log("These are important ingredients for my pizza");
        break;
    case "garlic and cheese": 
    case "american bbq chicken":
        console.log("I don't mind having ${topping} on my pizza");
        break;
    default:
        console.log("${topping} should not be on a pizza");
}

//cam also be written like:
switch (true) {
    case ("margherita" == topping || "jalapenos" == topping || "mozzerella" == topping || "stuffed crust"):
        console.log("These are important ingredients for my pizza");
        break; //.....

        
//Activity 3
let password = "PassWorddd"
if (password.length < 8) {
    console.log("Too short");
} else {
    console.log(password)
}
//Stretch
let num = 15;
if (num % 3 == 0|| num % 5 == 0) {
    console.log("This is a number divisible by 3 or 5")
} else {
    console.log("This is not divisible by 3 or 5")
}

//Activity 4
let num = 20;
if (num % 3 === 0) {
    console.log("fizz");
} else if (num % 5 === 0) {
    console.log("buzz");
} else  if (num % 3 && num % 5 === 0) {
    console.log("fizz buzz");
}

//Activity 5
let num = 22;

let palindrome = (num == 22) ? "true" : "not a palindrome"

console.log(palindrome);

//Activity 6
let time = 1200;
let placeOfWork = "office";
let townOfHome = "Chester";
if (time == 900) {
    console.log("commuting");
} else if (time <= 1700) {
    console.log(placeOfWork);
} else {
    console.log(townOfHome);
}

//Activity 7
let myString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowel = ("a","e","i","o","u");
let lastVowel = myString.lastIndexOf(vowel);

console.log(lastVowel);

//Activity 8
let word = "peace";
if (word[0] == word[4]) {
    console.log("true");
} else {
    console.log(false);
}

//Activity 9
let num1 = 1;
let num2 = 9;
let sum = num1 + num2;
let multiplied = num1 * num2;

if (sum % 2 == 0) {
    console.log(sum);
} else {
    console.log(multiplied);
}