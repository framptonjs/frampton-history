import createTask from 'frampton-data/task/create';
import guid from 'frampton-utils/guid';
import getHistory from 'frampton-history/utils/get_history';
import { pushHistory } from 'frampton-history/history_stack';

/**
 * @name pushState
 * @method
 * @memberof Frampton.History
 * @param {Object} state A state to replace the current state
 */
export default (state) =>
  createTask((sinks) => {
    state.id = guid();
    getHistory().pushState(state, state.name, state.path);
    pushHistory(state);
    sinks.resolve(null);
  });
