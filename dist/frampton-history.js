(function() {
/*globals Frampton:true */
var define, require;
var global = this;

(function() {

  if (typeof Frampton === 'undefined') {
    throw new Error('Frampton is undefined');
  };

  define = Frampton.__loader.define;
  require = Frampton.__loader.require;

}());
define('frampton-history', ['frampton/namespace', 'frampton-history/methods/set_hash', 'frampton-history/methods/push_state', 'frampton-history/methods/replace_state', 'frampton-history/methods/history_changes', 'frampton-history/signals/location', 'frampton-history/signals/depth', 'frampton-history/signals/state', 'frampton-history/signals/search', 'frampton-history/signals/hash', 'frampton-history/signals/path'], function (_namespace, _set_hash, _push_state, _replace_state, _history_changes, _location, _depth, _state, _search, _hash, _path) {
  'use strict';

  var _namespace2 = _interopRequireDefault(_namespace);

  var _set_hash2 = _interopRequireDefault(_set_hash);

  var _push_state2 = _interopRequireDefault(_push_state);

  var _replace_state2 = _interopRequireDefault(_replace_state);

  var _history_changes2 = _interopRequireDefault(_history_changes);

  var _location2 = _interopRequireDefault(_location);

  var _depth2 = _interopRequireDefault(_depth);

  var _state2 = _interopRequireDefault(_state);

  var _search2 = _interopRequireDefault(_search);

  var _hash2 = _interopRequireDefault(_hash);

  var _path2 = _interopRequireDefault(_path);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @name History
   * @namespace
   * @memberof Frampton
   */
  _namespace2.default.History = {};
  _namespace2.default.History.VERSION = '0.0.4';
  _namespace2.default.History.pushState = _push_state2.default;
  _namespace2.default.History.replaceState = _replace_state2.default;
  _namespace2.default.History.setHash = _set_hash2.default;
  _namespace2.default.History.changes = _history_changes2.default;
  _namespace2.default.History.location = _location2.default;
  _namespace2.default.History.depth = _depth2.default;
  _namespace2.default.History.state = _state2.default;
  _namespace2.default.History.hash = _hash2.default;
  _namespace2.default.History.path = _path2.default;
  _namespace2.default.History.search = _search2.default;
});
define('frampton-history/history_stack', ['exports', 'frampton-list/last', 'frampton-history/signals/depth', 'frampton-history/signals/stack'], function (exports, _last, _depth, _stack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.popHistory = exports.replaceHistory = exports.pushHistory = exports.stack = undefined;

  var _last2 = _interopRequireDefault(_last);

  var _depth2 = _interopRequireDefault(_depth);

  var _stack2 = _interopRequireDefault(_stack);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * The current state of the application history.
   *
   * @name stack
   * @private
   * @memberof Frampton.History
   * @type {Object}
   */
  var state = {
    currentState: null,
    currentId: 0,
    _store: []
  };

  /**
   * Pushes a new state onto the application's internal history stack. In doing
   * so it also updates the current depth of the history stack.
   *
   * @name pushHistory
   * @method
   * @private
   * @memberof Frampton.History
   * @param {Object} newState
   */
  var pushHistory = function push_state(newState) {
    state._store.push(newState);
    state.currentState = newState;
    state.currentId = newState.id;
    _depth2.default.push(state._store.length);
    _stack2.default.push(null);
  };

  /**
   * Replaces the current state on the application's internal history stack.
   *
   * @name replaceHistory
   * @method
   * @private
   * @memberof Frampton.History
   * @param {Object} newState
   */
  var replaceHistory = function replace_state(newState) {
    state.currentState = newState;
    state.currentId = newState.id;
    _stack2.default.push(null);
  };

  /**
   * Pops the last element from the application's internal history stack. In doing
   * so it also updates the current depth of the history stack.
   *
   * @name popHistory
   * @method
   * @private
   * @memberof Frampton.History
   */
  var popHistory = function pop_history() {
    state._store.pop();
    state.currentState = (0, _last2.default)(state._store);
    state.currentId = state.currentState ? state.currentState.id : 0;
    _depth2.default.push(state._store.length);
    _stack2.default.push(null);
  };

  exports.stack = state;
  exports.pushHistory = pushHistory;
  exports.replaceHistory = replaceHistory;
  exports.popHistory = popHistory;
});
define('frampton-history/methods/history_changes', ['exports', 'frampton-history/signals/location'], function (exports, _location) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = history_change;

  var _location2 = _interopRequireDefault(_location);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @name historyChange
   * @method
   * @memberof Frampton.History.Methods
   * @param {Function} fn A function to call when history changes
   */
  function history_change(fn) {
    _location2.default.next(fn);
  }
});
define('frampton-history/methods/push_state', ['exports', 'frampton-utils/guid', 'frampton-history/utils/get_history', 'frampton-history/utils/with_valid_state', 'frampton-history/history_stack'], function (exports, _guid, _get_history, _with_valid_state, _history_stack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _guid2 = _interopRequireDefault(_guid);

  var _get_history2 = _interopRequireDefault(_get_history);

  var _with_valid_state2 = _interopRequireDefault(_with_valid_state);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _with_valid_state2.default)(function push_state(state) {
    state.id = (0, _guid2.default)();
    (0, _get_history2.default)().pushState(state, state.name, state.path);
    (0, _history_stack.pushHistory)(state);
  });
});
define('frampton-history/methods/replace_state', ['exports', 'frampton-utils/guid', 'frampton-history/utils/get_history', 'frampton-history/utils/with_valid_state', 'frampton-history/history_stack'], function (exports, _guid, _get_history, _with_valid_state, _history_stack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _guid2 = _interopRequireDefault(_guid);

  var _get_history2 = _interopRequireDefault(_get_history);

  var _with_valid_state2 = _interopRequireDefault(_with_valid_state);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _with_valid_state2.default)(function replace_state(state) {
    state.id = (0, _guid2.default)();
    (0, _get_history2.default)().replaceState(state, state.name, state.path);
    (0, _history_stack.replaceHistory)(state);
  });
});
define('frampton-history/methods/set_hash', ['exports', 'frampton-history/history_stack'], function (exports, _history_stack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = set_hash;


  /**
   * @name setHash
   * @method
   * @memberof Frampton.History
   * @param {String} hash
   */
  function set_hash(hash) {
    (0, _history_stack.pushState)({
      name: 'hash',
      path: '#' + hash
    });
  }
});
define('frampton-history/signals/depth', ['exports', 'frampton-signal/create'], function (exports, _create) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _create2 = _interopRequireDefault(_create);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _create2.default)(0);
});
define('frampton-history/signals/hash', ['exports', 'frampton-signal/stepper', 'frampton-history/utils/get_location', 'frampton-history/signals/hash_base'], function (exports, _stepper, _get_location, _hash_base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _stepper2 = _interopRequireDefault(_stepper);

  var _get_location2 = _interopRequireDefault(_get_location);

  var _hash_base2 = _interopRequireDefault(_hash_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _stepper2.default)((0, _get_location2.default)().hash, _hash_base2.default);
});
define('frampton-history/signals/hash_base', ['exports', 'frampton-history/signals/location'], function (exports, _location) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _location2 = _interopRequireDefault(_location);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _location2.default.map(function (loc) {
    return loc.hash.replace('#', '');
  });
});
define('frampton-history/signals/history', ['exports', 'frampton-history/utils/get_history', 'frampton-history/signals/stack', 'frampton-history/signals/popstate'], function (exports, _get_history, _stack, _popstate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _get_history2 = _interopRequireDefault(_get_history);

  var _stack2 = _interopRequireDefault(_stack);

  var _popstate2 = _interopRequireDefault(_popstate);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _stack2.default.merge(_popstate2.default).map(function () {
    return (0, _get_history2.default)();
  });
});
define('frampton-history/signals/location', ['exports', 'frampton-history/utils/get_location', 'frampton-history/signals/history'], function (exports, _get_location, _history) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _get_location2 = _interopRequireDefault(_get_location);

  var _history2 = _interopRequireDefault(_history);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _history2.default.map(function () {
    return (0, _get_location2.default)();
  });
});
define('frampton-history/signals/path', ['exports', 'frampton-signal/stepper', 'frampton-history/utils/get_location', 'frampton-history/signals/path_base'], function (exports, _stepper, _get_location, _path_base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _stepper2 = _interopRequireDefault(_stepper);

  var _get_location2 = _interopRequireDefault(_get_location);

  var _path_base2 = _interopRequireDefault(_path_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _stepper2.default)((0, _get_location2.default)().pathname, _path_base2.default);
});
define('frampton-history/signals/path_base', ['exports', 'frampton-history/signals/location'], function (exports, _location) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _location2 = _interopRequireDefault(_location);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _location2.default.map(function (loc) {
    return loc.pathname;
  });
});
define('frampton-history/signals/popstate', ['exports', 'frampton-events/on_event', 'frampton-history/history_stack'], function (exports, _on_event, _history_stack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _on_event2 = _interopRequireDefault(_on_event);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  if (!window.history || !window.history.pushState) {
    throw new Error('History API is not supported by this browser');
  }

  /**
   * Returns a Signal of popstate events. Also helps to internally keep track of
   * the current depth of the history stack.
   *
   * @name popstateSignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Siganl}
   */
  exports.default = (0, _on_event2.default)('popstate', window).map(function (evt) {
    if (evt.state) {
      if (evt.state.id < _history_stack.stack.currentId) {
        (0, _history_stack.popHistory)();
      } else if (evt.state.id > _history_stack.stack.currentId) {
        (0, _history_stack.pushHistory)(evt.state);
      }
    }
    return evt;
  });
});
define('frampton-history/signals/search', ['exports', 'frampton-signal/stepper', 'frampton-history/utils/get_location', 'frampton-history/utils/parse_search', 'frampton-history/signals/search_base'], function (exports, _stepper, _get_location, _parse_search, _search_base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _stepper2 = _interopRequireDefault(_stepper);

  var _get_location2 = _interopRequireDefault(_get_location);

  var _parse_search2 = _interopRequireDefault(_parse_search);

  var _search_base2 = _interopRequireDefault(_search_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _stepper2.default)((0, _parse_search2.default)((0, _get_location2.default)().search || ''), _search_base2.default);
});
define('frampton-history/signals/search_base', ['exports', 'frampton-history/signals/location', 'frampton-history/utils/parse_search'], function (exports, _location, _parse_search) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _location2 = _interopRequireDefault(_location);

  var _parse_search2 = _interopRequireDefault(_parse_search);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _location2.default.map(function (loc) {
    return (0, _parse_search2.default)(loc.search || '');
  });
});
define('frampton-history/signals/stack', ['exports', 'frampton-signal/create'], function (exports, _create) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _create2 = _interopRequireDefault(_create);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _create2.default)();
});
define('frampton-history/signals/state', ['exports', 'frampton-signal/stepper', 'frampton-history/utils/get_history', 'frampton-history/signals/state_base'], function (exports, _stepper, _get_history, _state_base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _stepper2 = _interopRequireDefault(_stepper);

  var _get_history2 = _interopRequireDefault(_get_history);

  var _state_base2 = _interopRequireDefault(_state_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _stepper2.default)((0, _get_history2.default)().state, _state_base2.default);
});
define('frampton-history/signals/state_base', ['exports', 'frampton-history/signals/history'], function (exports, _history) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _history2 = _interopRequireDefault(_history);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _history2.default.map(function (h) {
    return h.state;
  });
});
define('frampton-history/utils/get_history', ['exports', 'frampton/namespace', 'frampton-history/utils/get_location'], function (exports, _namespace, _get_location) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = history_api;

  var _namespace2 = _interopRequireDefault(_namespace);

  var _get_location2 = _interopRequireDefault(_get_location);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var mockInstance = null;

  function createMockHistory() {
    var stack = [];
    var currentIndex = 0;

    return {
      state: null,
      pushState: function pushState(state, title, url) {
        currentIndex++;
        (0, _get_location2.default)().pathname = url;
        stack.push({
          state: state,
          title: title,
          url: url
        });
      },
      replaceState: function replaceState(state, title, url) {
        (0, _get_location2.default)().pathname = url;
        stack[currentIndex] = {
          state: state,
          title: title,
          url: url
        };
      }
    };
  }

  function getMockHistory() {

    if (mockInstance === null) {
      mockInstance = createMockHistory();
    }

    return mockInstance;
  }

  function history_api() {
    if (_namespace2.default.isTest()) {
      return getMockHistory();
    } else {
      return window.history;
    }
  }
});
define('frampton-history/utils/get_location', ['exports', 'frampton/namespace'], function (exports, _namespace) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = location_api;

  var _namespace2 = _interopRequireDefault(_namespace);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var instance = null;

  function createMockLocation() {
    return {
      hash: '',
      pathname: '/test/path',
      search: '?test=true'
    };
  }

  function getMockLocation() {
    if (instance === null) {
      instance = createMockLocation();
    }
    return instance;
  }

  function location_api() {
    if (_namespace2.default.isTest()) {
      return getMockLocation();
    } else {
      return window.location;
    }
  }
});
define('frampton-history/utils/parse_search', ['exports', 'frampton-utils/memoize', 'frampton-history/utils/query_unescape'], function (exports, _memoize, _query_unescape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  var _query_unescape2 = _interopRequireDefault(_query_unescape);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function validPair(pair) {
    return pair.length === 2 && pair[0] !== '' && pair[1] !== '';
  }

  /**
   * Takes a URL query string and returns a hash of key/values
   * @name parseSearch
   * @method
   * @private
   * @memberof Frampton.History
   * @param {String} search Query string to parse
   * @returns {Object}
   */
  exports.default = (0, _memoize2.default)(function parse_search(search) {
    var obj = {};
    var parts = search.replace('?', '').split('&');
    parts.forEach(function (part) {
      var pair = part.split('=');
      // check we have a properly-formed key/value pair.
      if (validPair(pair)) {
        obj[(0, _query_unescape2.default)(pair[0])] = (0, _query_unescape2.default)(pair[1]);
      }
    });
    return obj;
  });
});
define('frampton-history/utils/query_unescape', ['exports', 'frampton-utils/memoize', 'frampton-string/join', 'frampton-string/split', 'frampton-history/utils/uri_decode'], function (exports, _memoize, _join, _split, _uri_decode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  var _join2 = _interopRequireDefault(_join);

  var _split2 = _interopRequireDefault(_split);

  var _uri_decode2 = _interopRequireDefault(_uri_decode);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)(function query_unescape(str) {
    return (0, _join2.default)(' ', (0, _split2.default)('+', (0, _uri_decode2.default)(str)));
  });
});
define('frampton-history/utils/uri_decode', ['exports', 'frampton-utils/memoize'], function (exports, _memoize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)(function uri_decode(str) {
    return decodeURIComponent(str);
  });
});
define('frampton-history/utils/valid_state', ['exports', 'frampton-utils/is_object', 'frampton-utils/is_string'], function (exports, _is_object, _is_string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = valid_state;

  var _is_object2 = _interopRequireDefault(_is_object);

  var _is_string2 = _interopRequireDefault(_is_string);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Internally we require all state objects to have a name and path. This
   * checks a state object to ensure it meets those requirements.
   *
   * @name validState
   * @method
   * @private
   * @memberof Frampton.History
   * @param {Object} state
   * @returns {Boolean}
   */
  function valid_state(state) {
    return !!((0, _is_object2.default)(state) && (0, _is_string2.default)(state.path));
  }
});
define('frampton-history/utils/with_valid_state', ['exports', 'frampton-utils/assert', 'frampton-history/utils/valid_state'], function (exports, _assert, _valid_state) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = with_valid_state;

  var _assert2 = _interopRequireDefault(_assert);

  var _valid_state2 = _interopRequireDefault(_valid_state);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
  function with_valid_state(fn) {
    return function (state) {
      (0, _assert2.default)('State not valid', (0, _valid_state2.default)(state));
      fn({
        path: state.path,
        name: state.name || ''
      });
    };
  }
});
require("frampton-history");
})();
