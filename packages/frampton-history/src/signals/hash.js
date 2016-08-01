import stepper from 'frampton-signal/stepper';
import getLocation from 'frampton-history/utils/get_location';
import hashBase from 'frampton-history/signals/hash_base';

/**
 * A Signal representing the current location.hash
 *
 * @name hash
 * @property
 * @memberof Frampton.History
 * @type {Frampton.Signal.Signal}
 */
export default stepper(getLocation().hash, hashBase);
