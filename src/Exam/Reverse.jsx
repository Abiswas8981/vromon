import React from 'react';

function reverseString(event) {
  return event.split('').reverse().join('');
}

function Reverse() {
  const original = 'My name is Aritra Biswas';
  const reversed = reverseString(original);

  return (
    <center><div>
      Original: {original}
      <br />
      Reversed: {reversed}
    </div></center>
  );
}
export default Reverse;






