//1
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
// Перевірка на рівність
console.log(str1 == str2); // true
// Перевірка на строгу рівність
console.log(str1 === str2); // true

//2
let string5 = 'Hello World';

let first1 = string5[0]; 
let first2 = string5.charAt(0); 
//3
// повернути символ J рядка:
let str3 = "Hello Javascript";

console.log(str3[6]);
//4
console.log(str3[str3.length -1]);
console.log(str3.charAt(str3.length -1));
//5
console.log(str3.slice(-1));
console.log(str3.substring (str3.length -1));
console.log(Array.from(str3).pop(-1));
//6
// let a = 'When candles are out,';
// let b = 'all cats are grey.';
// console.log(a.concat(''));
// console.log(b.concat(''));
//7
let fact = "Fifteen is the same as " + (5 + 10);
let a = 5;
let b = 10;
console.log(fact);
//8
let firstName = "Tom";
let lastName = "Cat";
function getFullName (firstName, lastName) {
    return firstName + " " + lastName;
    } 
//9
greeting = "Hello, " + getFullName(firstName, lastName) + "!"; 
//10
function mygreeting(firstName, lastName) {
    return `<div><h1>Hello, ${firstName} ${lastName}!</h1></div>`;
  }
//11
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'

let trimmedString1 = string1.trim();
console.log(trimmedString1); // "The name of our game"
console.log(string1.trimStart());        // "  The name of our game"
console.log(string1.trimEnd());// "  The name of our game"


let trimPhoneNumber = phoneNumber.trim();

console.log(trimPhoneNumber);       // '555-123'
console.log(phoneNumber.trimStart());// '\t  555-123\n '
console.log(phoneNumber.trim());    // '\t  555-123\n'

//12
// let sentence = 'Always look on the bright side of life';

// console.log(sentence.includes('look up')); // false

// // Перевірити, чи містить рядок значення 'look on'

// console.log(sentence.includes('look on')); // true

// // Перевірити, чи містить рядок значення 'look on' починаючи з 8-ї позиції

// console.log(sentence.includes('look on', 8)); // false
//13
// let sentence = 'Always look on the bright side of life';

// console.log(sentence.indexOf('l')); 

// console.log(sentence.indexOf('l', 3));

// console.log(sentence.indexOf('L'));
//14
// let sentence = 'Always look on the bright side of life';

// console.log(sentence.slice(6));

// console.log(sentence.slice(0,6));

// console.log(sentence.slice(6,11));

//15




//16
const passcode = 'bacon';
const findme = `8sowl0xebaconxjwo98w`;
const found = findme.includes(passcode);
console.log(found); // true

//17
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
let truncateText1 = sentence.substring(sentence, 50);

console.log(truncateText1);

let truncateText2 = sentence.substr(sentence, 50);

console.log(truncateText2);