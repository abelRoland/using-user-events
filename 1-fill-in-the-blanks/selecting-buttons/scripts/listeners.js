const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('focus', identifyButton);
  buttons[i].addEventListener('keypress', alertButtonName);
  buttons[i].addEventListener('blur', clearOutput);
}
