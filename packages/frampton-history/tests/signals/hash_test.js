import hash from 'frampton-history/signals/hash';

QUnit.module('Frampton.History.Signals.hash');

QUnit.test('returns a Signal with initial value of empty string', function(assert) {
  const actual = hash.get();
  const expected = 0;
  assert.equal(actual, expected);
});
