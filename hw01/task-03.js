'use strict';

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const CANCEL_MESSAGE = "Отменено пользователем!";
const WELCOME_MESSAGE = "Добро пожаловать!";
const WRONGPASSWORD_MESSAGE = "Доступ запрещен, неверный пароль!";

const inputMessage = prompt("Введите ваш пароль!");
console.log(inputMessage);

if(inputMessage === null) {
    message = CANCEL_MESSAGE;
    console.log(message);
} else if (inputMessage === ADMIN_PASSWORD) {
    message = WELCOME_MESSAGE;
    console.log(message);
} else {
    message = WRONGPASSWORD_MESSAGE;
    console.log(message);
}

alert(message);
