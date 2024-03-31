//1
const fruits = 'apple banana cantaloupe blueberries grapefruit';
const fruitsArray = Array.from(fruits);

console.log(fruits.split(' '));

//2
const fruits2 = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}
//3
const fruits3 = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
let index = 0;

while (index < fruits3.length) {
  console.log(fruits3[index]);
  index++;
}
//4
const fruits4 = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
let i = 0;

do {
  console.log(fruits4[i]);
  i++;
} while (i < fruits4.length);

//5
const fruits5 = ['apple', 'banana', 'cantaloupe'];
for (const fruit of fruits5) {
console.log(fruit);
}
//6
const Numbs = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
}}
//7
const names = ['Batman'];
names.push('Joker')
console.log(names);
//8
const names0 = ['Batman'];
console.log(names0.unshift('Joker'))
console.log(names0);
//9
let names1 = ['Batman', 'Joker', 'Bane'];
console.log(names1.unshift('Catwoman'))
console.log(names1);
//10
let names2 = ['Batman', 'Joker', 'Bane'];
names2 = ['Catwoman', ...names2];
console.log(names2);
//11
let names3 = ['Batman', 'Joker', 'Bane'];
names3.splice(1, 0, 'Catwoman');
console.log(names3);
//12
const names4 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names4.splice(1,2);
console.log(names4);
//13
const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const fromIndex = 1;
const removeCount = 2;
names5.splice(fromIndex, removeCount, 'Alfred');
console.log(names5);
//14
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names6.includes('Alfred')){
    names6.push('Alfred');
}
console.log(names6);
//15
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const index7 = names7.indexOf('Alfred');
if (index7 !== -1) {
  names7.splice(index7, 1);
}
console.log(names7);