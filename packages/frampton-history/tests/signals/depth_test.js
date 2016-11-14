import depth from 'frampton-history/signals/depth';

QUnit.module('Frampton.History.Signals.depth');

QUnit.test('returns a Signal with initial value of 0', function(assert) {
  const actual = depth.get();
  const expected = 0;
  assert.equal(actual, expected);
});
