const evenNumbersByN = (n) => {
  return [...Array(n)].map((_, k) => k + 1).filter(num => num % 2 == 0);
}

console.log(evenNumbersByN(12));
console.log(evenNumbersByN(200));
// console.log(evenNumbersByN(18531));
// console.log(evenNumbersByN(89035472));

