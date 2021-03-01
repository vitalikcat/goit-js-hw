const checkForSpam = function (message) {
  // твой код
  const SPAM_WORD = "spam";
  const SALE_WORD = "sale";

  const lowerCaseMessage = message.toLowerCase();

  if (
    lowerCaseMessage.includes(SALE_WORD) ||
    lowerCaseMessage.includes(SPAM_WORD)
  ) {
    return true;
  }

  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
