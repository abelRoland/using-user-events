function reverseHandler() {
  // read user input
  const input = document.getElementById('input-field');
  const userInput = input.value;

  // execute core logic
  const reversed = reverse(userInput);

  // communicate result to user
  document.getElementById('program-output').innerHTML = reversed;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', userInput);
  console.log('reversed:', reversed);
}
