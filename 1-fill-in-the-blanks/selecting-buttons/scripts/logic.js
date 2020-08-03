const generateMessageTests = [
  { name: 'Test 1', args: [''], expected: '' },
  { name: 'Test 2', args: [false], expected: '' },
  { name: 'Test 3', args: [undefined], expected: '' },
  { name: 'Test 4', args: [null], expected: '' },
  { name: 'Test 5', args: ['yellow'], expected: 'selected: \nyellow' },
  { name: 'Test 6', args: ['top'], expected: 'selected: \ntop' },
  { name: 'Test 7', args: ['bottom'], expected: 'selected: \nbottom' },
  { name: 'eighth', args: [true], expected: 'selected: \ntrue' },
];

function generateMessage(text) {
  if (!text) {
    return '';
  } else {
    return 'selected: \n' + text;
  }
}

testing(generateMessage, generateMessageTests);

// --- --- --- --- --- --- ---

const keyIsEnterTests = [
  { name: '1', args: ['red'], expected: false },
  { name: '2', args: ['13'], expected: false },
  { name: '3', args: ['thirteen'], expected: false },
  { name: '4', args: [13.0], expected: true },
  { name: '5', args: [13], expected: true },
  { name: '6', args: [1.3e1], expected: true },
  { name: '7', args: [true], expected: false },
];

function keyIsEnter(keyCode) {
  return keyCode === 13
    ? true
    : false;
}

testing(keyIsEnter, keyIsEnterTests);
