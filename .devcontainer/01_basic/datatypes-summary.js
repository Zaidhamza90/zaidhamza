// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34565662655873322584n



// Refrence (None primititive)

// Array, Objects, Functions

const heros = ["Zaid", "Hamza", "Alveena"]
let myObj ={
    name: "zaid",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "zaidhamza"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "zaidhamza@google.com"

console.log(userOne.email);
console.log(userTwo.email);

