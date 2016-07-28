import Frampton from 'frampton/namespace';

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

export default function ajax_api() {
  if (Frampton.isTest()) {
    return createMockHistory();
  } else {
    return window.history;
  }
}
