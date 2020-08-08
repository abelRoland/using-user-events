const doMathTests = [
  { name: 'Test 1', args: ['add', 4, 5], expected: 9 },
  { name: 'Test 2', args: ['subtract', 4, 5], expected: -1 },
  { name: 'Test 3', args: ['multiply', 4, 5], expected: 20 },
  { name: 'Test 4', args: ['divide', 4, 5], expected: .8 },
  { name: 'Test 5', args: ['toad', 4, 5], expected: 'invalid operation' },
];

function doMath(op, a, b) {
  if (op === 'add') {
    return a + b;
  } else if (op === 'subtract') {
    return a - b;
  } else if (op === 'multiply') {
    return a * b;
  } else if (op === 'divide') {
    return a / b;
  } else {
    return 'invalid operation';
  }
}

testing(doMath, doMathTests);
