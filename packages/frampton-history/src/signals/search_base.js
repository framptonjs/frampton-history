import location from 'frampton-history/signals/location';
import parseSearch from 'frampton-history/utils/parse_search';

/**
 * Returns an Signal of updates to location.search
 *
 * @name searchSignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default location.map((loc) => {
  return parseSearch(loc.search || '');
});
