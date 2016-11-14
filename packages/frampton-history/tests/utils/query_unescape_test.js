import queryUnescape from 'frampton-history/utils/query_unescape';

QUnit.module('Frampton.History.Utils.queryUnescape');

QUnit.test('correctly unescapes spaces', function(assert) {
  const params = 'some+thing';
  const actual = queryUnescape(params);
  const expected = 'some thing';
  assert.equal(actual, expected);
});
