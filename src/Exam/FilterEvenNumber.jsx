import React from 'react';

function filterEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

function FilterEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numbers);

  return (
    <div>
      <h2>Even Numbers:</h2>
      <ul>
        {evenNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterEvenNumbers;
