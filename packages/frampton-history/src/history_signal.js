import isNothing from 'frampton-utils/is_nothing';
import history from 'frampton-history/get_history';
import stack from 'frampton-history/stack_signal';
import popstate from 'frampton-history/popstate_signal';

var instance = null;

/**
 * Returns a Signal of the current window.history
 *
 * @name historySignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function history_signal() {

  if (isNothing(instance)) {
    instance = stack().merge(popstate()).map(() => history());
  }

  return instance;
}