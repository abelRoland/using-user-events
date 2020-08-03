const colorCodeToStyleTests = [
  { name: 'Test 1', args: ['2', '4', '6', '8', 'a', 'c'], expected: 'background-color: #2468ac;' },
  { name: 'Test 2', args: ['f', 'f', 'c', 'c', '0', '0'], expected: 'background-color: #ffcc00;' },
  { name: 'Test 3', args: ['e', 'e', 'e', 'e', 'e', 'e'], expected: 'background-color: #eeeeee;' },
  { name: 'Test 4', args: ['1', '3', '5', '7', '9', 'b'], expected: 'background-color: #13579b;' },
];

function colorCodeToStyle(a, b, c, d, e, f) {
  return 'background-color: #' + a + b + c + d + e + f + ';';
}

testing(colorCodeToStyle, colorCodeToStyleTests);
