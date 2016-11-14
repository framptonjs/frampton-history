import parseSearch from 'frampton-history/utils/parse_search';

QUnit.module('Frampton.History.Utils.parseSearch');

QUnit.test('correctly parses query string', function(assert) {
  const str = '?key1=test1&key2=test2&key3=test3';
  const actual = parseSearch(str);
  const expected = {
    key1 : 'test1',
    key2 : 'test2',
    key3 : 'test3'
  };
  assert.deepEqual(actual, expected);
});

QUnit.test('returns empty object for empty string', function(assert) {
  const str = '';
  const actual = parseSearch(str);
  const expected = {};
  assert.deepEqual(actual, expected);
});

QUnit.test('ignores malformed pairs', function(assert) {
  const str = '?key1-test1&key2=test2&key3=test3';
  const actual = parseSearch(str);
  const expected = {
    key2 : 'test2',
    key3 : 'test3'
  };
  assert.deepEqual(actual, expected);
});

QUnit.test('ignores empty values', function(assert) {
  const str = '?key1=&key2=test2&key3=test3';
  const actual = parseSearch(str);
  const expected = {
    key2 : 'test2',
    key3 : 'test3'
  };
  assert.deepEqual(actual, expected);
});
