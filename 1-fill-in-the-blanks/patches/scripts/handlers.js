function setBackground(event) {
  // read & process user input
  //debugger;
  const divId = event.target.id;

  // execute core logic
  const newColor = filterColors(divId);

  // display results to user
  document.body.style.backgroundColor = newColor;

  // log action for developers
  console.log('\n-- setBackground --');
  console.log('divId:', '(' + typeof divId + ')', divId);
  console.log('newColor:', '(' + typeof newColor + ')', newColor);
}

function unsetBackground() {
  // render results to user
  document.body.style.backgroundColor = 'white';

  // log action for developers
  console.log('\n-- unsetBackground --');
}
