import isNothing from 'frampton-utils/is_nothing';
import onEvent from 'frampton-events/on_event';
import {
  popHistory,
  pushHistory,
  stack
} from 'frampton-history/history_stack';

var instance = null;

/**
 * Returns a Signal of popstate events. Also helps to internally keep track of
 * the current depth of the history stack.
 *
 * @name popstateSignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Siganl}
 */
export default function popstate_signal() {

  if (!window.history || !window.history.pushState) {
    throw new Error('History API is not supported by this browser');
  }

  if (isNothing(instance)) {
    instance = onEvent('popstate', window).map((evt) => {
      if (evt.state) {
        if (evt.state.id < stack.currentId) {
          popHistory();
        } else if (evt.state.id > stack.currentId) {
          pushHistory(evt.state);
        }
      }
      return evt;
    });
  }

  return instance;
}
