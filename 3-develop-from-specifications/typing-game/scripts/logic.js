const matchTests = [
  { name: 'Test 1', args: [1, 1], expected: 'passing' },
  { name: 'Test 2', args: ['1', 1], expected: 'failing' },
  { name: 'Test 3', args: [1e2, 100], expected: 'passing' },
  { name: 'Test 4', args: [NaN, NaN], expected: 'passing' },
  { name: 'Test 5', args: [null, undefined], expected: 'failing' },
  { name: 'Test 6', args: [undefined, undefined], expected: 'passing' },
  { name: 'Test 7', args: [true, false], expected: 'failing' },
  { name: 'eighth', args: [false, true], expected: 'failing' },
  { name: 'ninth', args: [false, false], expected: 'passing' },
];

function matchLogic(arg1, arg2) {
  let className = '';
  let string1 = String(arg1);
  let string2 = String(arg2);
  if (typeof arg1 !== typeof arg2 || string1.length !== string2.length) {
    className = 'failing';
  } else {
  
    for (let i = 0; i < string2.length; i++) {
      if (string1[i] === string2[i]) {
        className = 'passing';
      } else {
        className = 'failing';
      }
    }
    
}
return className;
}

testing(matchLogic, matchTests);
