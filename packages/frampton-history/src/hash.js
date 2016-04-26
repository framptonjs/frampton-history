import stepper from 'frampton-signal/stepper';
import location from 'frampton-history/get_location';
import hashSignal from 'frampton-history/hash_signal';

var instance = null;

/**
 * A Signal representing the current location.hash
 *
 * @name hash
 * @method
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function hash() {
  if (!instance) {
    instance = stepper(location().hash, hashSignal());
  }
  return instance;
}