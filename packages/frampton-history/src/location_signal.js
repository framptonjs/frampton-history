import isNothing from 'frampton-utils/is_nothing';
import history from 'frampton-history/history_signal';
import location from 'frampton-history/get_location';

var instance = null;

/**
 * @name locationSignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function location_signal() {
  if (isNothing(instance)) {
    instance = history().map(() => location());
  }
  return instance;
}