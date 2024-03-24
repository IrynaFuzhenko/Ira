const alert = document.querySelector('.alert');
//1
const primaryButton = document.querySelector('.btn-primary');
primaryButton.onclick = function() {
    const alertElement = document.querySelector('#alert');
    alertElement.classList.add('alert-primary');
    alertElement.textContent = "A simple primary alert—check it out!";
}
//2
const secondaryButton = document.querySelector('.btn-secondary');

secondaryButton.addEventListener('click', function() {
    const alertElement = document.querySelector('#alert');
    alertElement.classList.add('alert-primary');
    alertElement.textContent = "A simple secondary alert—check it out!";
})
//3
const successButton = document.querySelector('.btn-success');

successButton.addEventListener('mouseover', function() {
    const alertElement = document.querySelector('#alert');
    alertElement.classList.add('alert-success');
    alertElement.textContent = "A simple success alert—check it out!";
})
const btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseout', function() {
    const alertElement = document.getElementById('alert');
    alertElement.classList.remove('alert-success');
    alertElement.textContent = '';
})
//4
const alertElement = document.getElementById('alert');
document.querySelector('.btn-danger').addEventListener('focus', () => {
    alertElement.classList.add('alert-danger');
    alertElement.textContent = 'A simple danger alert—check it out!';
})

document.querySelector('.btn-danger').addEventListener('focusout', () => {
    alertElement.classList.remove('alert-danger');
    alertElement.textContent = '';
})
//5
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const btnDark = document.querySelector('.btn-dark');
    const btnLight = document.querySelector('.btn-light');
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        btnDark.style.display = 'none'; 
        btnLight.style.display = 'inline-block'; 
    } else {
        btnDark.style.display = 'inline-block'; 
        btnLight.style.display = 'none'; 
    }
}
document.querySelector('.btn-dark').addEventListener('click', toggleMode);
document.querySelector('.btn-light').addEventListener('click', toggleMode);
//6
const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const alertElement = document.querySelector('#alert');
        alertElement.classList.add('alert-info');
        alertElement.textContent = 'A simple info alert—check it out!';
    }
});
//7
const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    const cardTitle = cards[i].querySelector('.card-title');
    console.log(cardTitle.textContent);
}
//8
for (let i = 0; i < cards.length; i++) {
    const addToCartButton = cards[i].querySelector('.add-to-cart');
    const cardTitle = cards[i].querySelector('.card-title');
    addToCartButton.addEventListener('click', function() {
    console.log(cardTitle.textContent);
    });
}








