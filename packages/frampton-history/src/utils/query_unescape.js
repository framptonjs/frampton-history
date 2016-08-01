import memoize from 'frampton-utils/memoize';
import join from 'frampton-string/join';
import split from 'frampton-string/split';
import uriDecode from 'frampton-history/utils/uri_decode';

export default memoize(function query_unescape(str) {
  return join(' ', split('+', uriDecode(str)));
});
