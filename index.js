const express = require('express');

const {getContext, getId} = require('./store');

const multiplyService = require('./multiplyService')
const multiplyBy2Service = require('./multiplyBy2Service')

const app = express()

app.get('/', (req, res) => {
  console.log('handling endpoint index')
  res.status(200).send('index');
})

app.get('/multiply/:a/:b', (req, res) => {
  const {a, b} = req.params;
  console.log('multiply Endpoint ID=', getId())

  multiplyService(a, b)

  console.log('---')

  res.status(200).send(`${a} * ${b} = ${getContext()}`);
})

app.get('/multiply-by-2/:a', (req, res) => {
  const {a} = req.params;

  console.log('multiplyBy2 Endpoint ID=', getId())

  multiplyBy2Service(a)

  console.log('---')

  res.status(200).send(`${a} * ${2} = ${getContext()}`);
})

app.listen(8080);