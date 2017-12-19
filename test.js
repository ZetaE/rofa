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
  assert.end();
});

test('obj not found',function(assert){
  assert.isEqual( rofa(arrayofobjects,{}),false);
  assert.isEqual( rofa(arrayofobjects,{x : 'x'}),false);
  assert.end();
});

test('null values',function(assert){
  assert.isEqual( rofa(arrayofobjects, null),false);
  assert.isEqual( rofa(arrayofobjects,{ x : null }),false);
  assert.isEqual( rofa(null, null),false);
  assert.end();
});
