import Frampton from 'frampton/namespace';

var mockInstance = null;

function createMockHistory() {
  const stack = [];
  var currentIndex = 0;

  return {
    state : null,
    pushState : function(state, title, url) {
      currentIndex ++;
      stack.push({
        state : state,
        title : title,
        url : url
      });
    },
    replaceState : function(state, title, url) {
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

export default function ajax_api() {
  if (Frampton.isTest()) {
    return getMockHistory();
  } else {
    return window.history;
  }
}
