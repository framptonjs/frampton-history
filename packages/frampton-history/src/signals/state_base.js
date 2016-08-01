import history from 'frampton-history/signals/history';

/**
 * Returns an Signal of updates to history.state
 *
 * @name stateSignal
 * @property
 * @private
 * @memberof Frampton.History.Signals
 * @type {Frampton.Signal.Signal}
 */
export default history.map((h) => h.state);
