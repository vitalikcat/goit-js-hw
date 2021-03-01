"use strict";

let input;
const numbers = [];
let total = 0;

const ENTER_MESSAGE = "Введите числа!";
const ERROR_MESSAGE = "Было введено не число, попробуйте еще раз";

while (input !== null) {
  input = prompt(ERROR_MESSAGE, 0);
  const stringToNumber = Number(input);
  numbers.push(stringToNumber);
  // numbers.push(parseInt(input));
}
console.log(numbers);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
}

console.log(`Общая сумма чисел равна ${total}.`);
// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// do {
//   input = prompt(ENTER_MESSAGE);
//   if (isNaN(input)) {
//     alert(ERROR_MESSAGE);
//   }
//   numbers.push(parseInt(input));
//   console.log(numbers);
// } while (input != null);
