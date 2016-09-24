# Frampton-History

[![Build Status](https://semaphoreci.com/api/v1/beatniklarry/frampton-history/branches/master/badge.svg)](https://semaphoreci.com/beatniklarry/frampton-history)

A module for managing browser history with framptonjs.

## Responding to History Changes

Frampton-history exposes a number of properties for responding to changes to browser history. All the properties exposed by frampton-history are Signals (time-varrying values) that can be monitored.

```
// The current location.
const location = Frampton.History.location;

// This callback will be run initially with the initial location and then every
// time the browser location changes.
location.value((currentLocation) => {
  console.log('current location: ', currentLocation);
});

// If you are just interested in the current path
const path = Frampton.History.path;

path.value((currentPath) => {
  console.log('current path: ', currentPath);
});

// Also current hash
const hash = Frampton.History.hash;

hash.value((currentHash) => {
  console.log('current hash: ', currentHash);
});

// And current search query
const search = Frampton.History.search;

search.value((currentSearch) => {
  console.log('current search: ', currentSearch);
});
```

### History Depth

There is another Signal for monitoring the depth of the current history stack for your application. Each time a history state is added using pushState or removed by a popstate action this Signal will update with the new history depth.

```
const depth = Frampton.History.depth;

depth.changes((stackDepth) => {
  console.log('items in history: ' + stackDepth);
});
```

## Manipulating History

When using frampton-history to manage browser history you should use the provided methods for pushState, replaceState and setHash. Using these methods will keep the internal state of frampton-history in sync with the actual state of the browser.

```
const pushState = Frampton.History.pushState;
const replaceState = Frampton.History.replaceState;
const setHash = Frampton.History.setHash;

pushState({
  path : '/test/path',
  name : 'test path'
});

replaceState({
  path : '/test/path',
  name : 'test path'
});

setHash('test-hash');
```
