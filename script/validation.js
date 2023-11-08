var phonePattern = /^[+]\d{12}$/;
var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var validTlds = ["com", "net", "org", "ua", "gov", "edu"];


function displayError(fieldId, message) {
    let errorField = document.getElementById(fieldId + "-error");
    errorField.textContent = message;
}


document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById("register-button");
    const emailValidationButton = document.getElementById("email-validation-button");
    const phoneValidationButton = document.getElementById("phone-validation-button");

    const formElements = document.querySelectorAll("form input, form label, form select, form button");

    function toggleFormElements(show) {
        formElements.forEach(function (element) {
            element.style.display = show ? "block" : "none";
        });
    }

    emailValidationButton.addEventListener('click', function (event) {
        const email = document.getElementById("email").value;
    
        event.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {
            displayError("email", "Введіть правильну адресу електронної пошти");
            hasErrors = true;
        } else {
            const emailParts = email.split(".");
            const tld = emailParts[emailParts.length - 1];
    
            if (!validTlds.includes(tld)) {
                displayError("email", "Дійсне значення верхнього рівня домену не підтримується.");
                hasErrors = true;
            }
        }
    });

    phoneValidationButton.addEventListener('click', function (event) {
        const phone = document.getElementById("phone").value;

        event.preventDefault();
        if (phone.replace(/[^0-9]/g, '').length < 12) {
            displayError("phone", "Номер телефону повинен містити принаймні 12 цифр");
            hasErrors = true;
        }
        
        else if (phone.length > 13) {
            displayError("phone", "Занадто багато цифр!");
            hasErrors = true;
        }
        else if(!phonePattern.test(phone)) {
            displayError("phone", "Номер телефону повинен мати формат +380*********, схоже ви ввели неприпустимі символи");
            hasErrors = true;
        }

    });
    setTimeout(function () {
        registerButton.disabled = false;
    }, 20000);

    registerButton.addEventListener('click', function (event) {
        const name = document.getElementById("firstName").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        event.preventDefault();
        clearErrorMessages();


        let hasErrors = false;
        if (name == null || name.length === 0) {
            displayError("name", "Введіть ваше ім'я");
            hasErrors = true;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            displayError("email", "Введіть правильну адресу електронної пошти");
            hasErrors = true;
        }

        if (!phonePattern.test(phone)) {
            displayError("phone", "Номер телефону повинен мати формат +380*********");
            hasErrors = true;
        }


        if (!passwordPattern.test(password)) {
            displayError("password", "Пароль повинен містити принаймні 8 символів, з великих і малих літер та цифр");
            hasErrors = true;
        }

        if (password !== confirmPassword) {
            displayError("confirm-password", "Паролі не співпадають");
            hasErrors = true;
        }

        if (!hasErrors) {
            const formElements = document.querySelectorAll("form input, form label, form select, form button");
            formElements.forEach(function (element) {
                element.style.display = "none";
            });

            const successMessage = document.getElementById("success-message");
            successMessage.textContent = "Реєстрація пройшла вдало!";
            successMessage.style.display = "block";
        }


        function clearErrorMessages() {
            const errorFields = document.querySelectorAll("[id$='-error']");
            errorFields.forEach(function (errorField) {
                errorField.textContent = "";
            });
        }
        if (!hasErrors) {
            toggleFormElements(false); 

            const successMessage = document.getElementById("success-message");
            successMessage.textContent = "Реєстрація пройшла вдало!";
            successMessage.style.display = "block";
        }
    });
});
