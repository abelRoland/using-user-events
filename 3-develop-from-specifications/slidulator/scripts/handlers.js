function showResult(event) {
    // read user input
    const form = event.target.form;
    const firstNumberValue = form.left.value;
    const firstNumber = Number(firstNumberValue);
  
    const operation = form.operation.value;
  
    const secondNumberValue = form.right.value;
    const secondNumber = Number(secondNumberValue);
  
    // execute core logic
    const result = doMath(operation, firstNumber, secondNumber );
  
    // communicate result to user
    document.getElementById('program-output').innerHTML = result;
  
    // log action for developers
    console.log('\n-- user action --');
    console.log('firstNumber:', '(' + typeof firstNumber + ')', firstNumber);
    console.log('operation:', '(' + typeof operation + ')', operation);
    console.log('secondNumber:', '(' + typeof secondNumber + ')', secondNumber);
    console.log('result:', '(' + typeof result + ')', result);
  }
  