import path from 'frampton-history/path';

QUnit.module('Frampton.History.depth');

QUnit.test('Should return a Signal with correct initial value', function(assert) {
  const p = path();
  assert.equal(p(), '/test/path');
});
