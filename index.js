function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
}

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}

function makeInt(n) {
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);
}
function preserveDecimal(n) {
  return parseFloat(n);
}
// Example usage:
console.log(add(1, 80)); //=> 81
console.log(subtract(60, 40)); //=> 20
console.log(multiply(2, 3.4)); //=> 6.8
console.log(divide(5.0, 2.5)); //=> 2
console.log(increment(5)); //=> 6
console.log(decrement(5)); //=> 4
console.log(makeInt("42")); //=> 42
