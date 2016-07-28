import last from 'frampton-list/last';
import depth from 'frampton-history/depth';
import stack from 'frampton-history/stack_signal';

const depthSignal = depth();
const stackSignal = stack();

/**
 * The current state of the application history.
 *
 * @name stack
 * @private
 * @memberof Frampton.History
 * @type {Object}
 */
const state = {
  currentState : null,
  currentId : 0,
  _store : []
};

/**
 * Pushes a new state onto the application's internal history stack. In doing
 * so it also updates the current depth of the history stack.
 *
 * @name pushHistory
 * @method
 * @private
 * @memberof Frampton.History
 * @param {Object} newState
 */
const pushHistory = function push_state(newState) {
  state._store.push(newState);
  state.currentState = newState;
  state.currentId = newState.id;
  depthSignal(state._store.length);
  stackSignal(null);
};

/**
 * Replaces the current state on the application's internal history stack.
 *
 * @name replaceHistory
 * @method
 * @private
 * @memberof Frampton.History
 * @param {Object} newState
 */
var replaceHistory = function replace_state(newState) {
  state.currentState = newState;
  state.currentId = newState.id;
  stackSignal(null);
};

/**
 * Pops the last element from the application's internal history stack. In doing
 * so it also updates the current depth of the history stack.
 *
 * @name popHistory
 * @method
 * @private
 * @memberof Frampton.History
 */
const popHistory = function pop_history() {
  state._store.pop();
  state.currentState = last(state._store);
  state.currentId = ((state.currentState) ? state.currentState.id : 0);
  depthSignal(state._store.length);
  stackSignal(null);
};

export {
  state as stack,
  pushHistory,
  replaceHistory,
  popHistory
};
