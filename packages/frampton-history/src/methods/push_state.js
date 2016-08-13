import guid from 'frampton-utils/guid';
import getHistory from 'frampton-history/utils/get_history';
import withValidState from 'frampton-history/utils/with_valid_state';
import { pushHistory } from 'frampton-history/history_stack';

/**
 * @name pushState
 * @method
 * @memberof Frampton.History
 * @param {Object} state A state to replace the current state
 */
export default withValidState(function push_state(state) {
  state.id = guid();
  getHistory().pushState(state, state.name, state.path);
  pushHistory(state);
});
