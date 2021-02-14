"use strict";

let input;
let total = 0;

const NOT_A_NUMBER_ERROR = "Было введено не число, попробуйте еще раз";

do {
    input = prompt("Вводите число!");
  if (!isNaN(input)) {
    total += Number(input);
  } else {
    console.log(NOT_A_NUMBER_ERROR);
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);