import Frampton from 'frampton/namespace';
import getLocation from 'frampton-history/utils/get_location';

var mockInstance = null;

function createMockHistory() {
  const stack = [];
  var currentIndex = 0;

  return {
    state : null,
    pushState : function(state, title, url) {
      currentIndex ++;
      getLocation().pathname = url;
      stack.push({
        state : state,
        title : title,
        url : url
      });
    },
    replaceState : function(state, title, url) {
      getLocation().pathname = url;
      stack[currentIndex] = {
        state : state,
        title : title,
        url : url
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

export default function history_api() {
  if (Frampton.isTest()) {
    return getMockHistory();
  } else {
    return window.history;
  }
}
