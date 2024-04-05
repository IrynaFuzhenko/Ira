
const form = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  errorMessages.innerHTML = '';

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username.trim() === '') {
    displayError('ім’я користувача не може бути пустим');
  }

  if (!isValidEmail(email)) {
    displayError('електронна адреса має бути у правильному форматі');
  }

  if (password.length < 8) {
    displayError('пароль має містити принаймні 8 символів');
  } else if (!isValidPassword(password)) {
    displayError('пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ');
  }


  if (errorMessages.innerHTML === '') {
    form.reset();
  }
});
function displayError(message) {
  const error = document.createElement('div');
  error.classList.add('error');
  error.textContent = message;
  errorMessages.appendChild(error);
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}
