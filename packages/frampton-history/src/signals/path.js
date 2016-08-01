import stepper from 'frampton-signal/stepper';
import getLocation from 'frampton-history/utils/get_location';
import pathBase from 'frampton-history/signals/path_base';

/**
 * A Signal representing the current location.pathname
 *
 * @name path
 * @property
 * @memberof Frampton.History
 * @type {Frampton.Signal.Signal}
 */
export default stepper(getLocation().pathname, pathBase);
