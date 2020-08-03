function setColorHandler(event) {
  // read & process user input
  
  const form = event.target.form;
  const char1 = form.first.value;
  const char2 = form.second.value;
  const char3 = form.third.value;
  const char4 = form.forth.value;
  const char5 = form.fifth.value;
  const char6 = form.sixth.value;

  // execute core logic
  const newStyle = colorCodeToStyle(char1, char2, char3, char4, char5, char6);

  // display results to user
  document.getElementById('new-style').innerHTML = newStyle;
  document.body.style = newStyle;

  // log action for developers
  console.log('\n-- user action --');
  console.log('char1:', '(' + typeof char1 + ')', char1);
  console.log('char2:', '(' + typeof char2 + ')', char2);
  console.log('char3:', '(' + typeof char3 + ')', char3);
  console.log('char4:', '(' + typeof char4 + ')', char4);
  console.log('char5:', '(' + typeof char5 + ')', char5);
  console.log('char6:', '(' + typeof char6 + ')', char6);
  console.log('newStyle:', '(' + typeof newStyle + ')', newStyle);
}
