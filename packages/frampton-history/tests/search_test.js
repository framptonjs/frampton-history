import search from 'frampton-history/search';

QUnit.module('Frampton.History.search');

QUnit.test('Should return a Signal with correct initial value', function(assert) {
  const s = search();
  const actual = s();
  const expected = { test : 'true' };
  assert.deepEqual(actual, expected);
});
