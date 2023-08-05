import React from 'react';

function sumArray(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

function Component() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers);

  return (
    <center><h1>
      Sum: {sum}
    </h1></center>
  );
}

export default Component;