const queryTests = [
  { name: 'Test 1', args: ['asdf'], expected: 'https://google.com/?q=asdf' },
  { name: 'Test 2', args: ['fdsa'], expected: 'https://google.com/?q=fdsa' },
  { name: 'Test 3', args: ['tor browser'], expected: 'https://google.com/?q=tor%20browser' },
  { name: 'Test 4', args: ['==-+_ *&^*<>diso }{[si'], expected: 'https://google.com/?q=%3D%3D-%2B_%20*%26%5E*%3C%3Ediso%20%7D%7B%5Bsi' },
];

function googleURL(query) { 
  const encodedQuery = encodeURIComponent(query);
  return 'https://google.com/?q=' + encodedQuery;
}

testing(googleURL, queryTests);
