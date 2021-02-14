"use strict";

const CANCEL_MESSAGE = "Отменино пользователем!";
const NOT_AVAILABLE = "В вашей стране доставка не доступна";

let message;
let credit = 0;

const inputedString = prompt("Введите страну куда нужно доставить товар!");

if (inputedString === null) {
  console.log(CANCEL_MESSAGE);
} else {
  const parsedString =
    inputedString[0].toUpperCase() + inputedString.slice(1).toLowerCase();

  switch (parsedString) {
    case "Китай":
      credit = 100;
      break;

    case "Чили":
      credit = 250;
      break;

    case "Австралия":
      credit = 170;
      break;

    case "Индия":
      credit = 80;
      break;

    case "Ямайка":
      credit = 120;
      break;

    default:
      message = alert(NOT_AVAILABLE);
      break;
  }
  if(credit > 0) {
    console.log(`Доставка в ${parsedString} будет стоить ${credit} кредитов.`);
}
}


