import Frampton from 'frampton/namespace';

export default function ajax_api() {
  if (Frampton.isTest()) {
    return {
      pathname : '/test/path',
      search : '?test=true'
    };
  } else {
    return window.location;
  }
}