var test = require('tape')
var rofa = require('./')

var arrayofobjects = [
  { a : 'a' , b : 'b' },
  { c : 'c' , d : 'd' }
];

var emptyarray = [];

test('delete obj',function(assert){
  assert.isEqual( rofa(arrayofobjects, { a : 'a' , b : 'b'}), true);
  assert.isEqual( rofa(arrayofobjects, { c : 'c' , d : 'd'}), true);
  assert.isEqual(arrayofobjects.length,0);
  assert.end();
});
