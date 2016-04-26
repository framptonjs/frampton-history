import search from 'frampton-history/search';

QUnit.module('Frampton.History.search');

QUnit.test('Should return a Signal with correct initial value', function() {
  const s = search();
  deepEqual(s(), { test : 'true' });
});