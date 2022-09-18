const compareNumbers = (num1, num2) => {
  if (num1 == num2) {
    return "Same"
  }
  if (num1 > num2) {
    return num1
  }
  return num2
}

console.log(compareNumbers(1, 2));
console.log(compareNumbers(4, 2));
console.log(compareNumbers(132, 53));
console.log(compareNumbers(132, 132));
