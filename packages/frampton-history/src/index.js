import Frampton from 'frampton/namespace';
import setHash from 'frampton-history/methods/set_hash';
import pushState from 'frampton-history/methods/push_state';
import replaceState from 'frampton-history/methods/replace_state';
import changes from 'frampton-history/methods/history_changes';
import location from 'frampton-history/signals/location';
import depth from 'frampton-history/signals/depth';
import state from 'frampton-history/signals/state';
import search from 'frampton-history/signals/search';
import hash from 'frampton-history/signals/hash';
import path from 'frampton-history/signals/path';

/**
 * @name History
 * @namespace
 * @memberof Frampton
 */
Frampton.History = {};
Frampton.History.VERSION      = '{-- VERSION_PLACEHOLDER --}';
Frampton.History.pushState    = pushState;
Frampton.History.replaceState = replaceState;
Frampton.History.setHash      = setHash;
Frampton.History.changes      = changes;
Frampton.History.location     = location;
Frampton.History.depth        = depth;
Frampton.History.state        = state;
Frampton.History.hash         = hash;
Frampton.History.path         = path;
Frampton.History.search       = search;
