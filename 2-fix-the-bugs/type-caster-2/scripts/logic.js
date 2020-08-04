const typeCasterTests = [
  { name: 'Test 1', args: [34, 'string'], expected: '34' },
  { name: 'Test 2', args: ['asdf', 'string'], expected: 'asdf' },
  { name: 'Test 3', args: [3, 'number'], expected: 3 },
  { name: 'Test 4', args: ['45', 'number'], expected: 45 },
  { name: 'Test 5', args: [true, 'number'], expected: 1 },
  { name: 'Test 6', args: [undefined, 'number'], expected: NaN },
  { name: 'Test 7', args: [undefined, 'boolean'], expected: false },
  { name: 'eighth', args: [1, 'boolean'], expected: true },
  { name: 'ninth', args: [0, 'boolean'], expected: false },
  { name: 'tenth', args: [' ', 'boolean'], expected: true },
  { name: 'eleventh', args: ['', 'boolean'], expected: false },
  { name: 'twelfth', args: ['anything!', 'undefined',], expected: undefined },
];

function typeCaster(value, type) {
  if (type === 'string') {
    return String(value);
  } else if (type === 'number') {
    return Number(value);
  } else if (type === 'boolean') {
    return Boolean(value);
  } else {
    return undefined;
  }
}

testing(typeCaster, typeCasterTests);
