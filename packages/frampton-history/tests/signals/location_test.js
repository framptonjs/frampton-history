import location from 'frampton-history/signals/location';

QUnit.module('Frampton.History.Signals.location');

QUnit.test('Should return a Signal with correct initial value', function(assert) {
  const actual = location.get();
  const expected = {
    hash : '',
    pathname : '/test/path',
    search : '?test=true'
  };
  assert.deepEqual(actual, expected);
});
