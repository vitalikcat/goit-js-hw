const formatString = function (string) {
  // твой код

  const maxSymbols = 40;

  if (string.length < maxSymbols) {
    return string;
  }

  if (string.length > maxSymbols) {
    const formatedString = string.slice(0, 40).concat("...");
    return formatedString;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
