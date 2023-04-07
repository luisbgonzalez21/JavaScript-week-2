//Starter if/else recap
let age = 70;
if (age < 18) {
    console.log(`Child (below 18): £8`)
} else if (age < 60) {
    console.log(`Adult (18+): £10.95`)
} else {
    console.log(`Senior(60+): £7.50`)
}



const favColor = (color) => {
    console.log(`my favourite color is ${color}`)
}

favColor("blue");
favColor("green");
favColor("red");



let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();

//Activity

const addUp = (num1, num2) => {
    return num1 + num2;
}
let funcResult = addUp(7, 3) // 10

console.log(funcResult)

console.log(addUp(2,5)) // 7

//multiple functions example
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
}
const getFarenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
}
console.log("The temperature is " + getFarenheit(15) + "degrees F");


function square(number) {
    return number * number;
};
console.log(square(5));
//output: 25