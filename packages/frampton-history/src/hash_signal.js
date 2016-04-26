import isNothing from 'frampton-utils/is_nothing';
import location from 'frampton-history/location_signal';

var instance = null;

/**
 * Returns an Signal of the current location.hash
 *
 * @name hashStream
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function hash_stream() {
  if (isNothing(instance)) {
    instance = location().map(loc => loc.hash.replace('#', ''));
  }
  return instance;
}