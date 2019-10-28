const {setContext, getId, getContext} = require('./store');
const multiplyService = require('./multiplyService');

module.exports = (a) => {
  console.log('multiplyBy2Service ID=', getId())

  multiplyService(a, 2);

  return setContext(getContext())
};