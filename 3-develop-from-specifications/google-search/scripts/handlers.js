function googleIt(event) {
  // read & process user input
  const form = event.target.form;
  const userInput = form.query.value;

  // call the core logic
  const searchURL = googleURL(userInput);

  // render results for the user
  window.open(searchURL, '_blank');

  // log action for developers
  console.log('\n-- user action --');
  console.log('variable:', '(' + typeof searchURL + ')', searchURL);

  // tell the browser everything is OK
  return true;
}
