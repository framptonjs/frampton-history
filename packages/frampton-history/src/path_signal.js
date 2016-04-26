import location from 'frampton-history/location_signal';

var instance = null;

/**
 * Returns an Signal of updates to location.pathname
 *
 * @name pathSignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function path_signal() {
  if (!instance) {
    instance = location().map(loc => loc.pathname);
  }
  return instance;
}