import history from 'frampton-history/signals/history';

/**
 * @name historyChange
 * @method
 * @memberof Frampton.History.Methods
 * @param {Function} fn A function to call when history changes
 */
export default function history_change(fn) {
  history.next(fn);
}
