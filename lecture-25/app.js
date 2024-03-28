//1
const list = ['html', 'css', 'javascript', 'react.js'];
const ul = document.createElement('ul');
list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
document.body.appendChild(ul);
//2
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
const ol = document.createElement('ol');
listWithHref.forEach(item => {
    const key = Object.keys(item)[0]; 
    const value = item[key];
    const li = document.createElement('li'); 
    const a = document.createElement('a'); 
    a.href = value; 
    a.textContent = key;  
    li.appendChild(a); 
    ol.appendChild(li); 
});
document.body.appendChild(ol);
//3
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
];
const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headers = ['firstName', 'lastName', 'degree'];
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.backgroundColor = 'yellow'; 
    th.style.color = 'blue'; 
    headerRow.appendChild(th);
});
table.appendChild(headerRow);
students.forEach(student => {
    const row = document.createElement('tr');
    headers.forEach(header => {
        const td = document.createElement('td');
        td.style.backgroundColor = 'blue'
        td.textContent = student[header];
        td.style.color = 'yellow';
        row.appendChild(td);
    });
    table.appendChild(row);
});
document.body.appendChild(table);
