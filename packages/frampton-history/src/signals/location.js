import getLocation from 'frampton-history/utils/get_location';
import history from 'frampton-history/signals/history';

/**
 * @name locationSignal
 * @property
 * @private
 * @memberof Frampton.History.Signals
 * @type {Frampton.Signal.Signal}
 */
export default history.map(() => getLocation());
