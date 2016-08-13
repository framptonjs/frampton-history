import Frampton from 'frampton/namespace';

var instance = null;

function createMockLocation() {
  return {
    hash : '',
    pathname : '/test/path',
    search : '?test=true'
  };
}

function getMockLocation() {
  if (instance === null) {
    instance = createMockLocation();
  }
  return instance;
}

export default function location_api() {
  if (Frampton.isTest()) {
    return getMockLocation();
  } else {
    return window.location;
  }
}
