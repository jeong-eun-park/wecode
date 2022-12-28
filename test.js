function odd(num) {
  let result;
  for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
  return result;
}

console.log(odd());
