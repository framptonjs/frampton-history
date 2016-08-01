import location from 'frampton-history/signals/location';

/**
 * Returns an Signal of updates to location.pathname
 *
 * @name pathSignal
 * @property
 * @private
 * @memberof Frampton.History
 * @type {Frampton.Signal.Signal}
 */
export default location.map(loc => loc.pathname);
