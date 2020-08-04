function displaySubString(event) {
  // read & process user input 
  const userString = event.target.form.string.value;

  const preStart = event.target.form.begin.value;
  const start = Number(preStart);

  const preEnd = event.target.form.end.value;
  const end = Number(preEnd);

  // execute core logic
  const result = getPartialString(userString, start, end);

  // communicate result to user
  document.getElementById('program-output').innerHTML = result;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userString:', userString);
  console.log('start:', start);
  console.log('end:', end);
  console.log('result:', result);
}

