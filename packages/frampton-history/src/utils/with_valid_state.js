import assert from 'frampton-utils/assert';
import validState from 'frampton-history/utils/valid_state';

/**
 * Validates that the given function recieves a valid state object as its
 * sole argument.
 *
 * @name withValidState
 * @method
 * @private
 * @memberof Frampton.History
 * @param {Function} fn Function whose argument to validate
 * @returns {Function} A function that will throw an error if it is not
 * passed a valid state.
 */
export default function with_valid_state(fn) {
  return function(state) {
    assert('State not valid', validState(state));
    fn({
      path : state.path,
      name : (state.name || '')
    });
  };
}
