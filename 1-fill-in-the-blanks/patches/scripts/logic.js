const filterColorsTests = [
  { name: 'Test 1', args: ['red'], expected: 'red' },
  { name: 'Test 2', args: ['orange'], expected: 'white' },
  { name: 'Test 3', args: ['blue'], expected: 'white' },
  { name: 'Test 4', args: ['green'], expected: 'green' },
  { name: 'Test 5', args: ['yellow'], expected: 'yellow' },
  { name: 'Test 6', args: ['grey'], expected: 'grey' },
  { name: 'Test 7', args: ['black'], expected: 'black' },
  { name: 'eighth', args: [''], expected: 'white' },
  { name: 'ninth', args: ['magenta'], expected: 'white' },
  { name: 'tenth', args: ['purple'], expected: 'white' },
];

function filterColors(color) {
  if (color === 'red'
    || color === 'green'
    || color === 'yellow'
    || color === 'black'
    || color === 'grey') {
    return color;
  } else {
    return 'white';
  }
}

testing(filterColors, filterColorsTests);
