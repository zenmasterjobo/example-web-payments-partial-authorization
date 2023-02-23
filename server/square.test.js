const test = require('ava');

// eslint-disable-next-line import/extensions
const square = require('./square.js');

test('exports client', (t) => {
  t.true(typeof square.client.paymentsApi.createPayment === 'function');
});
