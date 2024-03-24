//1
const colors = ['blue', 'green', 'white'];
function iter(item){
console.log(item);
}
colors.forEach(iter);
//2
const colors2 = ['blue', 'green', 'white'];
function iterate(item, index) {
    console.log(`${item} has index ${index}`);
    if (index === colors2.length - 1) {
        console.log('The last iteration!');
    }
}
colors2.forEach(iterate);
//3
const letters = ['a', 'b', 'c'];
function iterate2(letter) {
    if (this === window) {
        console.log(true);
    }
}
letters.forEach(iterate2, window);
//4
const numbers = [22, 3, 4, 10];
let allEven = true;
numbers.forEach(number => {
    if (number % 2 !== 0) {
        allEven = false;
    }
});
if (allEven) {
    console.log('Усі числа у масиві парні.');
} else {
    console.log('Не всі числа у масиві парні.');
}
//5
const numbers2 = [22, 3, 4, 10];
const allEven2 = numbers2.every(number => number % 2 === 0);

if (allEven) {
    console.log('Усі числа у масиві парні.');
} else {
    console.log('Не всі числа у масиві парні.');
}
//6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log("Індекс першого елемента зі значенням 'blueberries':", index);
//7
const arr = [7, 33, 47, 99, 2, 103, 79];
const firstElementGreaterThan10 = arr.find(element => element > 10);
console.log("Перший елемент > 10:", firstElementGreaterThan10);
//8
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); 
//9
const numbers3 = [1, 30, 4, 21, 100000];
numbers3.sort((a, b) => a - b);
console.log(numbers3);