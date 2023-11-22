document.addEventListener('DOMContentLoaded', function () {

  // gets the buttons with they IDs
  const previousBtn = document.getElementById('previousBtn');
  const nextNumberBtn = document.getElementById('nextNumberBtn');

  // Get the result element by its ID
  const resultElement = document.getElementById('result');

  // The initial first number to go next / previous from 
  let currentNumber = 1;

  // show number when user comes onto the page for the first time
  resultElement.textContent = 'Result: ' + currentNumber;

  // Add click event listeners to the buttons
  previousBtn.addEventListener('click', function () {
    // Call the previousNumber function to get the previous number
    const previousNum = previousNumber(currentNumber);

    // Update the number
    currentNumber = previousNum;

    // Display = result 
    resultElement.textContent = 'Result: ' + currentNumber;
  });

  nextNumberBtn.addEventListener('click', function () {
    // Call the nextNumber function to get the next number
    const nextNum = nextNumber(currentNumber);

    // Update the  number
    currentNumber = nextNum;

    // Display the result in the result element
    resultElement.textContent = 'Result: ' + currentNumber;
  });

  //  nextNumber function
  function nextNumber(currentNumber) {
    // Assuming the input is a valid number
    return currentNumber + 1;
  }

  // previousNumber function
  function previousNumber(currentNumber) {
    // Assuming the input is a valid number
    return currentNumber - 1;
  }
});
