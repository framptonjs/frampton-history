import isNothing from 'frampton-utils/is_nothing';
import create from 'frampton-signal/create';

var instance = null;

/**
 * Signal of changes to the history stack
 *
 * @name stackSignal
 * @method
 * @private
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function stack_signal() {

  if (isNothing(instance)) {
    instance = create();
  }

  return instance;
}