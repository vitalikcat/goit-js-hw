"use strict";

const logItems = function (array) {
  // твой код
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`[${index + 1}] - [${element}]`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
