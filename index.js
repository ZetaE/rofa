var foia = require('foia');

module.exports = function(array,obj){
  let i = foia(array,obj);
  if(i < 0) return false;
  array.splice(i,1);
  return true;
}
