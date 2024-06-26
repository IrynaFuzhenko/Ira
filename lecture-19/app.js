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
function lastChar(str) {
  return str[str.length - 1];
}

function lastChar(str) {
  return str.charAt(str.length - 1);
}

function lastChar(str) {
  return str.substring(str.length - 1);
}
console.log(lastChar(str3));
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
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  function greeting() {
   const fullName = getFullName('Tom', 'Cat');
   return `Hello, ${fullName}!`;
  }
  console.log(greeting()); 
//10
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
function greeting() {
    const fullName = getFullName('Tom', 'Cat');
    return `Hello, ${fullName}!`;
  }
  
  function createGreetingTemplate() {
    const greetingMessage = greeting();
    const template = `<div><h1>${greetingMessage}</h1></div>`;
    return template;
  }
  console.log(createGreetingTemplate());
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

console.log(trimPhoneNumber);       
console.log(phoneNumber.trimStart());

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

let username = "user_142";

let regex1 = /^[a-z,0-9_-]{8,16}$/i;
let isValid = regex1.test(username);
console.log((isValid)); 


//16
let email = "example123@example.com";

let regex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isValidEmail = regex2.test(email);
console.log(isValidEmail);

//17
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
  return text;
  } else {
  return text.substring(0, maxLength) + '...';
  }
  }
  let truncatedSentence = truncateText(sentence, 50);
  console.log(truncatedSentence);