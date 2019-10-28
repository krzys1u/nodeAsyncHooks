const {setContext, getId} = require('./store');

module.exports = (a, b) => {
  console.log('multiplyService ID=', getId())

  const result = a * b;

  setContext(result);
}