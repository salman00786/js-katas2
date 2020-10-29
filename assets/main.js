console.log("--------------KATA 1-----------------");
function add(a, b) {
  let c = a + b;
  return c;
}
console.log(add(2, 4));

console.log("--------------KATA 2-----------------");

function multiply(y, z) {
  let f = 0;
  let counter = 0;
  while (counter < z) {
    f += y;
    counter++;
  }

  return f;
}
console.log(multiply(6, 4));

console.log("----------------KATA 3--------------");

function power(m, n) {
  let a = 1;
  let counter = 0;

  while (counter < n) {
    a = multiply(m, a);

    counter++;
  }
  return a;
}
console.log(power(3, 4));

console.log("----------------KATA 4------------------");

function factorial(c) {
  let x = 1;
  let counter = 0;
  let test = c;
  while (counter < test) {
    x = multiply(x, c);

    c = c - 1;
    counter++;
  }
  return x;
}
console.log(factorial(6));

console.log("---------------------KATA 5-------------------");

function fibonacci(number) {
  let fib = [0, 1];

  fib[0] = 0;
  fib[1] = 1;
  counter = 2;
  while (counter < number) {
    fib[counter] = add(fib[counter - 2], fib[counter - 1]);
    console.log(fib[counter]);
    counter++;
  }
  return fib[counter];
}
fibonacci(8);
