import isNothing from 'frampton-utils/is_nothing';
import location from 'frampton-history/location_signal';
import parseSearch from 'frampton-history/parse_search';

var instance = null;

/**
 * Returns an Signal of updates to location.search
 *
 * @name searchSignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function hash_signal() {
  if (isNothing(instance)) {
    instance = location().map((loc) => {
      return parseSearch(loc.search || '');
    });
  }
  return instance;
}