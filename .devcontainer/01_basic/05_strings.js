const name = "Zaid hamza"
const repoCount = 50

// console.log(name + repCount + "Value");

console.log(`Hello my anme is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Zaid-hamza')

// console.log(gameName[0]);
//console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = " Zaid  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://zaidhamza.com/zaidhamza90"

console.log(url.replace('%20', '-'))

console.log(url.includes('zaid'))