function sortAsc(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        var temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

function sortDesc(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] < numbers[j + 1]) {
        var temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

module.exports = {
  sortAsc,
  sortDesc,
};
