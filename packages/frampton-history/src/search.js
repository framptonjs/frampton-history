import stepper from 'frampton-signal/stepper';
import location from 'frampton-history/get_location';
import searchSignal from 'frampton-history/search_signal';
import parseSearch from 'frampton-history/parse_search';

var instance = null;

/**
 * A Signal representing the current location.search
 *
 * @name search
 * @method
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function search() {
  if (!instance) {
    instance = stepper(
      parseSearch(location().search || ''),
      searchSignal()
    );
  }
  return instance;
}