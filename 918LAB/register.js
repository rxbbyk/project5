function checkForm() {
const formErrors = document.getElementById("formErrors");
formErrors.innerHTML = '';
formErrors.classList.add('hide');

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.classList.remove('error'));

const errors = [];
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

if (fullName.value.trim().length < 1) {
   errors.push("Missing full name.");
   fullName.classList.add('error');
}

   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!email.value.match(emailRegex)) {
      errors.push("Invalid or missing email address.");
      email.classList.add('error');
   }

   if (password.value.length < 10 || password.value.length > 20) {
      errors.push("Password must be between 10 and 20 characters.");
      password.classList.add('error');
   }

   const lowerCaseRegex = /[a-z]/;
   if (!password.value.match(lowerCaseRegex)) {
      errors.push("Password must contain at least one lowercase character.");
      password.classList.add('error');
   }

   const upperCaseRegex = /[A-Z]/;
   if (!password.value.match(upperCaseRegex)) {
      errors.push("Password must contain at least one uppercase character.");
      password.classList.add('error');
   }

   const digitRegex = /\d/;
   if (!password.value.match(digitRegex)) {
      errors.push("Password must contain at least one digit.");
      password.classList.add('error');
   }

   if (password.value !== passwordConfirm.value) {
      errors.push("Password and confirmation password don't match.");
      passwordConfirm.classList.add('error');
   }

   if (errors.length > 0) {
      formErrors.classList.remove('hide');
      const ul = document.createElement('ul');
      errors.forEach(error => {
         const li = document.createElement('li');
         li.textContent = error;
         ul.appendChild(li);
      });
      formErrors.appendChild(ul);
   } else {
      formErrors.classList.add('hide');
   }
   event.preventDefault();
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});