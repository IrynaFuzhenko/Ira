//1
// function calculate(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//       sum = sum + number;
//     }
//     return sum;
//    }
//    calculate([1, 2, 4]); 
   
//    function sum(n1, n2) {
//       return n1 + n2;
//    }
   
//    function multiply(n1, n2) {
//       return n1 * n2;
//    }
   function calculate(operation, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
        result = operation(result, number);
    }
    return result;
}

function sum(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

console.log(calculate(sum, 0, [1, 2, 4]));  
console.log(calculate(multiply, 1, [1, 2, 4])); 
//2
let student_names = ["Wick", "Malcolm", "Smith"]
student_names.map((name, index, array) => {
    console.log(`name: ${name} | index: ${index} | array: ${JSON.stringify(array)}`);
});
//3
let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
const maxDegree = 600;

const result = students_information.map(student => {
    const percentage = (student.degree / maxDegree) * 100;
    return { ...student, percentage };
});
console.log(result);
//4
const multiDimensionalArray = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];;
const flatArray = multiDimensionalArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
console.log(flatArray);
//5
Array.prototype.upperCase = function() {
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === 'string') {
            this[i] = this[i].toUpperCase();
        }
    }
};
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}
myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
