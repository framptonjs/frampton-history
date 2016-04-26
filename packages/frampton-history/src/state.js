import isNothing from 'frampton-utils/is_nothing';
import stepper from 'frampton-signal/stepper';
import history from 'frampton-history/get_history';
import stateSignal from 'frampton-history/state_signal';

var instance = null;

/**
 * A Signal representing the current history.state
 *
 * @name state
 * @method
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function state() {
  if (isNothing(instance)) {
    instance = stepper(history().state, stateSignal());
  }
  return instance;
}