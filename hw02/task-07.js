const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  // твой код
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  // твой код
  const isUnique = !allLogins.includes(login);
  return isUnique ? true : false;
};

const addLogin = function (allLogins, login) {
  // твой код
  const ERROR_MESSAGE = "Ошибка! Логин должен быть от 4 до 16 символов";

  const isValid = isLoginValid(login);
  console.log("login: ", login);

  if (isValid) {
    const isUnique = isLoginUnique(allLogins, login);
    if (isUnique) {
      logins.push(login);
      console.log("Логин успешно добавлен!");
    }
    console.log("Такой логин уже используется!");
  } else {
    return console.log(ERROR_MESSAGE);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
