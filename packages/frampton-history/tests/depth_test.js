import depth from 'frampton-history/depth';

QUnit.module('Frampton.History.depth');

QUnit.test('Should return a Signal with initial value of 0', function() {
  const d = depth();
  equal(d(), 0);
});