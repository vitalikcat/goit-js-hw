'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const CANCEL_MESSAGE = "Отменено пользователем!";
const NOT_ENOUGH_MONEY = "Недостаточно средств на счету!";

const inputMessage = prompt("Сколько дроидов хотите купить?");

if (inputMessage === null) {
  console.log(CANCEL_MESSAGE);
} else {
  totalPrice = Number(inputMessage) * pricePerDroid;
  console.log("totalPrice:", totalPrice);
  if(totalPrice > credits){
    console.log(NOT_ENOUGH_MONEY);
  } else {
      const balance = credits - totalPrice;
      console.log(`Вы купили ${inputMessage} дроидов, на счету осталось ${balance} кредитов.`)
  }
}
