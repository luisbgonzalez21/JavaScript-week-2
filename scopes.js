//Global scope
let age = 21; //global variable

console.log(`My age: ${age}`);

const callAge = () => {
    console.log(`My age: ${age}`);
};

callAge();

//Function scope
let age = 21;

console.log(`My age: ${age}`);

const callAge = () => {
    let name = "Karen";
    console.log(`My age is: ${age}`);
    console.log(`My name is: ${name}`);
};

callAge();

console.log(`Global scope with local variable: ${name}`)
//Error: Name is not defined

//Block scope
function startLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i); //Output: 0,1,2,3,4
        }
}
console.log(i); //Error i is not defined

//
