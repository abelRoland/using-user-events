function typeCastHandler(event) {
  // read & process user input
  //debugger;
  const form = event.target.form;
  const intendedType = form.type.value;
  const value = form.value.value;

  // execute core logic
  const newValue = typeCaster(value, intendedType);

  // communicate result to user
  document.getElementById('casted-value').innerHTML = typeof newValue + ': ' + newValue;

  // log action for developers
  console.log('\n-- user action --');
  console.log('stringToCast:', '(' + typeof value + ')', value);
  console.log('intendedType:', '(' + typeof intendedType + ')', intendedType);
  console.log('newValue:', '(' + typeof newValue + ')', newValue);
}

