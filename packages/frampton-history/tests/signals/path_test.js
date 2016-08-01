import path from 'frampton-history/signals/path';

QUnit.module('Frampton.History.Signals.path');

QUnit.test('Should return a Signal with correct initial value', function(assert) {
  const actual = path.get();
  const expected = '/test/path';
  assert.equal(actual, expected);
});
