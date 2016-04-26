import stepper from 'frampton-signal/stepper';
import location from 'frampton-history/get_location';
import pathSignal from 'frampton-history/path_signal';

var instance = null;

/**
 * A Signal representing the current location.pathname
 *
 * @name path
 * @method
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function path() {
  if (!instance) {
    instance = stepper(location().pathname, pathSignal());
  }
  return instance;
}