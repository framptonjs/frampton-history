import Frampton from 'frampton/namespace';

function createMockHistory() {

  return {
    state : null,
    pushState : function(state, title, url) {

    },
    replaceState : function(state, title, url) {

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