const doTheyMatch = (event) => {
  //  debugger;
    const form = event.target.form;
    const target = form.target.value;
    const guess = form.guess.value;

    const changeClass = matchLogic(guess, target);

    document.getElementById('user-interface').className = changeClass;

    console.log('Input 1: ', guess, 'Input 2: ', target, 'Class: ', changeClass);
}