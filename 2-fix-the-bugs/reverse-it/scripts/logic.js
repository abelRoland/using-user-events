const reverseTests = [
  { name: 'Test 1', args: ['lower case words'], expected: 'sdrow esac rewol' },
  { name: 'Test 2', args: ['1324 &*()'], expected: ')(*& 4231' },
  { name: 'Test 3', args: [''], expected: '' },
  { name: 'Test 4', args: ['UPPER CASE WORDS'], expected: 'SDROW ESAC REPPU' },
  { name: 'Test 5', args: ['--""{}""--'], expected: '--""}{""--' },
  { name: 'Test 6', args: ['String.prototype.toUpperCase'], expected: 'esaCreppUot.epytotorp.gnirtS' },
];

function reverse(str) {
  return str.split('').reverse().join('');
}

testing(reverse, reverseTests);
