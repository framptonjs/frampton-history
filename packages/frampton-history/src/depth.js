import create from 'frampton-signal/create';

var instance = null;

/**
 * A Behavior representing the current depth of application history
 *
 * @name depth
 * @method
 * @memberof Frampton.History
 * @returns {Frampton.Signal.Signal}
 */
export default function depth() {
  if (!instance) {
    instance = create(0);
  }
  return instance;
}