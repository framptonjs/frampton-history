import stepper from 'frampton-signal/stepper';
import getHistory from 'frampton-history/utils/get_history';
import stateBase from 'frampton-history/signals/state_base';

/**
 * A Signal representing the current history.state
 *
 * @name state
 * @property
 * @memberof Frampton.History
 * @type {Frampton.Signal.Signal}
 */
export default stepper(getHistory().state, stateBase);
