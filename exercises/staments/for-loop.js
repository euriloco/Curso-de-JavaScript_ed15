// Añade los números 0 al 5 inclusivos, en orden ascendente al array usando un loop for.
const array = [];
for (let i = 0; i <= 5; i++) {
  array[i] = i;
}

console.log(array);

// Añade los número impares del 1 al 9 en el array usando loop for

const array = [];
let index = 0;

/* for (let number = 1; number <= 9 && number % 2 != 0; number++) {
  array[index] = number;
  index++;
} */

for (let number = 1; number <= 9; number++) {
  if (number % 2 != 0) {
    array[index] = number;

    index++;
  }
}
console.log(array);

// Añade los número pares del 1 al 9 en orden descendente en el array usando loop for

const array = [];
let index = 0;
for (let number = 9; number >= 1; number--) {
  if (number % 2 === 0) {
    array[index] = number;
    index++;
  }
}
console.log(array);
