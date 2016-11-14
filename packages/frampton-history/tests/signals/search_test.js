import search from 'frampton-history/signals/search';

QUnit.module('Frampton.History.Signals.search');

QUnit.test('returns a Signal with correct initial value', function(assert) {
  const actual = search.get();
  const expected = { test : 'true' };
  assert.deepEqual(actual, expected);
});
