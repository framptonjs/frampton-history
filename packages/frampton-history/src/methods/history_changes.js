import location from 'frampton-history/signals/location';

/**
 * @name historyChange
 * @method
 * @memberof Frampton.History.Methods
 * @param {Function} fn A function to call when history changes
 */
export default function history_change(fn) {
  location.next(fn);
}
