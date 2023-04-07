//let number = 10

//number += 35

//console.log(number)

//let myName = "Luis"

//myName += " Gonzalez"

//console.log(`Hi my name is ${myName}, I am a multi-millionaire`)

//Activity 1
let name = "Luis";
let age = 20;
let favColour = "blue";
console.log(`Hello, my name is ${name}. I am ${age} and my favourite color is ${favColour}.`);

//Activity 2
let breakfast = "toast";
let lunch = "pasta";
let dinner = "rice and peas";

console.log(`Today ate ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

breakfast = "fruit";
lunch = "beans on toast";
dinner = "waffles";

console.log(`Tommorrow I might eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

//Activity 3
const date1 = new Date("04/01/2023");

const date2 = new Date("01/21/2003");
const difference = date1.getTime() - date2.getTime();

const difference_days = difference / (1000 * 3600 * 24);

console.log(`The total number of days since my birth is ${difference_days}.`);

//Activity 4
let space1 = "x"
let space2 = "o"
let space3 = "o"
let space4 = "x"
let space5 = "x"
let space6 = "o"
let space7 = "o"
let space8 = "x"
let space9 = "x"

console.log(`       |   |   
     ${space1} | ${space2} |   
       |   |   
    -----------
       |   |   
     ${space4} | ${space5} |   
       |   |   
    -----------
       |   |   
     ${space6} |   |   
       |   |   `)