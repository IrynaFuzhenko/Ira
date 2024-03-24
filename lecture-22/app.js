const classes = ['first', 'second', 'third', 'fourth'];
//1
const h1Elements = document.getElementsByTagName('h1');
  console.log(typeof h1Elements);
  console.log('Розмір масиву h1Elements:', h1Elements.length);
for (let i = 0; i < h1Elements.length; i++) {
  console.log('Елемент з тегом h1:', h1Elements[i]);
}
//2
const firstParagraph = document.querySelector('#p1');
 firstParagraph.style.backgroundColor = "gold";
//3
const secondParagraph = document.querySelector('#p2');
 secondParagraph.style.backgroundColor = "gold"; 
 secondParagraph.style.color = "blue";
 secondParagraph.style.fontSize = "2rem";
//4
const thirdParagraph = document.querySelector('#p3');
 thirdParagraph.classList.add('third');
//5
const fourthParagraph = document.querySelector('#p4');
 fourthParagraph.classList.add('fourth');
 fourthParagraph.classList.add('border');
//6
const containers = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    const firstElement = containers[i].querySelector(':first-child');
    console.log(firstElement);
}
//7
for (let i = 0; i < containers.length; i++) {
    const firstElementContent = containers[i].querySelector(':first-child').textContent;
    console.log(firstElementContent);
}
//8
const headers = document.querySelectorAll('.container header');
for (let i = 0; i < headers.length; i++) {
    const h1Elements = headers[i].getElementsByTagName('h1');
    const h1Element = h1Elements[0];
    let newHeading;
    switch (i) {
        case 1:
            newHeading = document.createElement('h2');
            break;
        case 2:
            newHeading = document.createElement('h3');
            break;
        case 3:
            newHeading = document.createElement('h4');
            newHeading.id = h1Element.id;
            newHeading.className = h1Element.className;
            break;
        default:
            continue;
    }
    newHeading.textContent = h1Element.textContent;
    headers[i].replaceChild(newHeading, h1Element);
}
for (let i = 0; i < headers.length; i++) {
    const tagName = headers[i].tagName.toLowerCase();
    headers[i].classList.add(classes[i]);
}