import isNothing from 'frampton-utils/is_nothing';
import history from 'frampton-history/history_signal';

var instance = null;

/**
 * Returns an Signal of updates to history.state
 *
 * @name stateSignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function state_signal() {
  if (isNothing(instance)) {
    instance = history().map((h) => h.state);
  }
  return instance;
}