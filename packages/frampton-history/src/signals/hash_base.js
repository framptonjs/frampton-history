import location from 'frampton-history/signals/location';

/**
 * Returns an Signal of the current location.hash
 *
 * @name hashStream
 * @property
 * @private
 * @memberof Frampton.History
 * @type {Frampton.Signal.Signal}
 */
export default location.map(loc => loc.hash.replace('#', ''));
