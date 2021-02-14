'use strict';

const total = 100;
const ordered = 50;

const SUCCESS_MESSAGE = "Заказ оформлен, с вами свяжется менеджер";
const FAIL_MESSAGE = "На складе недостаточно твоаров!";

const result =
  ordered > total ? console.log(FAIL_MESSAGE) : console.log(SUCCESS_MESSAGE);

// if (ordered > total) {
//   console.log(FAIL_MESSAGE);
// } else {
//   console.log(SUCCESS_MESSAGE);
// }
