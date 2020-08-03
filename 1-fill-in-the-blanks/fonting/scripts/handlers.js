function editorClassesHandler(event) {
  // read & process user input
  const form = event.target.form;
  const newEmphasis = form.emphasis.value;
  const newSize = form.size.value;
  const newColor = form.color.value;

  // execute core logic
  const newClasses = editorClasses(newEmphasis, newSize, newColor);

  // display results to user
  document.getElementById('editor').innerHTML = newClasses;

  // log action for developers
  console.log('\n-- user action --');
  console.log('newEmphasis:', '(' + typeof newEmphasis + ')', newEmphasis);
  console.log('newSize:', '(' + typeof newSize + ')', newSize);
  console.log('newColor:', '(' + typeof newColor + ')', newColor);
  console.log('newClasses:', '(' + typeof newClasses + ')', newClasses);
}
