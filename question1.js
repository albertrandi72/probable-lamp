function main() {
  let data = [3, 5, 15, 16, 20, 30];
  let res = checkNumber(data);
  res.forEach((v) => console.log(v));
}
main();

function checkNumber(numbers) {
  let resultData = [];
  for (let i = 0; i < numbers.length; i++) {
    let res = divisibleBy15(numbers[i]);
    if (res != null) {
      resultData.push(res);
      continue;
    }
    res = divisibleBy5(numbers[i]);
    if (res != null) {
      resultData.push(res);
      continue;
    }
    res = divisibleBy3(numbers[i]);
    if (res != null) {
      resultData.push(res);
      continue;
    }
  }
  return resultData;
}

function divisibleBy3(number) {
  return number % 3 == 0 ? "fish" : null;
}
function divisibleBy5(number) {
  return number % 5 == 0 ? "bash" : null;
}
function divisibleBy15(number) {
  return number % 15 == 0 ? "fish bash" : null;
}
module.exports = {
  checkNumber,
  divisibleBy3,
  divisibleBy5,
  divisibleBy15,
};
