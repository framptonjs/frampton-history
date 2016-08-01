import guid from 'frampton-utils/guid';
import history from 'frampton-history/utils/get_history';
import withValidState from 'frampton-history/utils/with_valid_state';
import { replaceHistory } from 'frampton-history/history_stack';

/**
 * @name replaceState
 * @method
 * @memberof Frampton.History
 * @param {Object} state A state to replace the current state
 */
export default withValidState(function replace_state(state) {
  state.id = guid();
  history().replaceState(state, state.name, state.path);
  replaceHistory(state);
});