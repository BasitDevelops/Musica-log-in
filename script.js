const alertBox = document.querySelector('#alert-box');
const alertText = document.querySelector('#alert-text');
const usernameInput = document.querySelector('#input-username');
const emailInput = document.querySelector('#input-email');
const passwordInput = document.querySelector('#input-password');
const submitBtn = document.querySelector('#submit');

let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const usernameAlertIcon = document.querySelector('#username-alert-icon');
const emailAlertIcon = document.querySelector('#email-alert-icon');
const passwordAlertIcon = document.querySelector('#password-alert-icon');

const formAlert = (message, color) => {
    alertText.innerHTML = message;
    alertBox.classList.add(`alert-${color}`);
}

if (window.location.href == 'http://127.0.0.1:5500/signUpPage.html' || window.location.href == 'https://basitdevelops.github.io/Musica-log-in/signUpPage.html') {
    usernameInput.addEventListener('change', () => {
        if (usernameInput.value.length < 5) {
            alertBox.classList.add('display-alert');
            formAlert('Username cannot be less than 5 characters.', 'danger');
            usernameAlertIcon.innerHTML = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
            userNameFlag = false;
        } else if (localStorage.getItem(JSON.stringify(usernameInput.value))) {
            alertBox.classList.add('display-alert');
            formAlert('Username already exists.', 'danger');
            usernameAlertIcon.innerHTML = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
            userNameFlag = false;
        } else {
            alertBox.classList.remove('display-alert');
            usernameAlertIcon.innerHTML = '<i class="fa-regular fa-circle-check text-success"></i>';
            userName = usernameInput.value
            userNameFlag = true;
        }
    })

    emailInput.addEventListener('change', () => {
        if (emailFilter.test(emailInput.value)) {
            alertBox.classList.remove('display-alert');
            emailAlertIcon.innerHTML = '<i class="fa-regular fa-circle-check text-success"></i>';
            email = emailInput.value;
            emailFlag = true;
        } else {
            alertBox.classList.add('display-alert');
            formAlert('Enter a valid email', 'danger');
            emailAlertIcon.innerHTML = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
            emailFlag = false;
        }

        if (localStorage.getItem(JSON.stringify(email))) {
            alertBox.classList.add('display-alert');
            formAlert('Email is already linked to an account.', 'danger');
            emailAlertIcon.innerHTML = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
            emailFlag = false;
        }
    })

    passwordInput.addEventListener('change', () => {
        if (passwordInput.value.length < 5) {
            alertBox.classList.add('display-alert');
            formAlert('Password cannot be less than 5 characters.', 'danger');
            passwordAlertIcon.innerHTML = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
            passwordFlag = false
        } else {
            alertBox.classList.remove('display-alert');
            passwordAlertIcon.innerHTML = '<i class="fa-regular fa-circle-check text-success"></i>';
            password = passwordInput.value;
            passwordFlag = true;
        }
    })

    submitBtn.addEventListener('click', () => {
        if (userNameFlag && emailFlag && passwordFlag) {
            alertBox.classList.remove('display-alert');
            localStorage.setItem(JSON.stringify(userName), JSON.stringify(userName));
            localStorage.setItem(JSON.stringify(email), JSON.stringify(email));
            localStorage.setItem(JSON.stringify(password), JSON.stringify(password));
            setTimeout(() => {
                alert('Your account has been created successfully, kindly login to access B.Musica.');
                window.location.href = 'https://basitdevelops.github.io/Musica-log-in/';
            }, 1000);
        } else {
            alertBox.classList.add('display-alert');
            formAlert('Fill all fields correctly.', 'danger');
        }
    })
}
//

//

//
if (window.location.href == 'https://basitdevelops.github.io/Musica-log-in/') {
    usernameInput.addEventListener('change', () => {
        if (!localStorage.getItem(JSON.stringify(usernameInput.value))) {
            alertBox.classList.add('display-alert');
            formAlert('Invalid username.', 'danger');
            usernameAlertIcon.innerHTML = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
            userNameFlag = false;
        } else {
            alertBox.classList.remove('display-alert');
            usernameAlertIcon.innerHTML = '<i class="fa-regular fa-circle-check text-success"></i>';
            userName = usernameInput.value
            userNameFlag = true;
        }
    })

    passwordInput.addEventListener('change', () => {
        if (!localStorage.getItem(JSON.stringify(passwordInput.value))) {
            alertBox.classList.add('display-alert');
            formAlert('Invalid password.', 'danger');
            passwordAlertIcon.innerHTML = '<i class="fa-regular fa-circle-xmark text-danger"></i>';
            passwordFlag = false;
        } else {
            alertBox.classList.remove('display-alert');
            passwordAlertIcon.innerHTML = '<i class="fa-regular fa-circle-check text-success"></i>';
            password = passwordInput.value;
            passwordFlag = true;
        }
    })

    submitBtn.addEventListener('click', () => {
        if (userNameFlag && passwordFlag) {
            alertBox.classList.remove('display-alert');
            setTimeout(() => {
                alert(`Welcome to B.Musica, ${userName}.`);
            }, 1000);
            setTimeout(() => {
                window.location.href = 'https://basitdevelops.github.io/Musica/'
            }, 1000);
        } else {
            alertBox.classList.add('display-alert');
            formAlert('Invalid username and / password.', 'danger');
        }
    })
}

