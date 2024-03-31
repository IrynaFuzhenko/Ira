const ul = document.querySelector('ul');
const input = document.getElementById('item');

let itemsArray = JSON.parse(localStorage.getItem('items')) || [];

function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}
itemsArray.forEach(addTask);

function add() {
    const inputValue = input.value.trim();
    if (inputValue !== '') {
        itemsArray.push(inputValue);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addTask(inputValue);
        input.value = '';
    }
}
function del() {
    localStorage.removeItem('items');
    itemsArray = [];
    ul.innerHTML = '';
}
console.log('Items Array:', itemsArray);