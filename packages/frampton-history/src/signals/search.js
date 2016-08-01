import stepper from 'frampton-signal/stepper';
import getLocation from 'frampton-history/utils/get_location';
import parseSearch from 'frampton-history/utils/parse_search';
import searchBase from 'frampton-history/signals/search_base';

/**
 * A Signal representing the current location.search
 *
 * @name search
 * @property
 * @memberof Frampton.History
 * @type {Frampton.Signal.Signal}
 */
export default stepper(parseSearch(getLocation().search || ''), searchBase);
