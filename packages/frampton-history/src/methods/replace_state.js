import createTask from 'frampton-data/task/create';
import guid from 'frampton-utils/guid';
import history from 'frampton-history/utils/get_history';
import { replaceHistory } from 'frampton-history/history_stack';

/**
 * @name replaceState
 * @method
 * @memberof Frampton.History
 * @param {Object} state A state to replace the current state
 */
export default (state) =>
  createTask((sinks) => {
    state.id = guid();
    history().replaceState(state, state.name, state.path);
    replaceHistory(state);
    sinks.resolve(null);
  });
