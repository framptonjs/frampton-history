import last from 'frampton-list/last';
import depth from 'frampton-history/depth';
import stackStream from 'frampton-history/stack_stream';

/**
 * The current state of the application history.
 *
 * @name stack
 * @private
 * @memberof Frampton.History
 * @type {Object}
 */
var stack = {
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
var pushHistory = function push_state(newState) {
  stack._store.push(newState);
  stack.currentState = newState;
  stack.currentId = newState.id;
  depth().update(stack._store.length);
  stackStream().pushNext(null);
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
  stack.currentState = newState;
  stack.currentId = newState.id;
  stackStream().pushNext(null);
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
var popHistory = function pop_history() {
  stack._store.pop();
  stack.currentState = last(stack._store);
  stack.currentId = ((stack.currentState) ? stack.currentState.id : 0);
  depth().update(stack._store.length);
  stackStream().pushNext(null);
};

export {
  stack,
  pushHistory,
  replaceHistory,
  popHistory
};