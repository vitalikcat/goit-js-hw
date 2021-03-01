const findLongestWord = function (string) {
  // твой код

  const arrayOfWords = string.split(" ");
  let longestWord = arrayOfWords[0];

  for (let index = 0; index < arrayOfWords.length; index++) {
    const element = arrayOfWords[index];

    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
