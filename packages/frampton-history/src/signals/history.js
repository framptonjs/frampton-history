import getHistory from 'frampton-history/utils/get_history';
import stack from 'frampton-history/signals/stack';
import popstate from 'frampton-history/signals/popstate';

/**
 * Returns a Signal of the current window.history
 *
 * @name historySignal
 * @method
 * @private
 * @memberof Frampton.History.Signals
 * @returns {Frampton.Signal.Signal}
 */
export default stack.merge(popstate).map(() => getHistory());
