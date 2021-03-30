/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Provided by Canny.

function canny() {
  !(function(w, d, i, s) {
    function l() {
      if (!d.getElementById(i)) {
        let f = d.getElementsByTagName(s)[0],
          e = d.createElement(s);
        (e.type = 'text/javascript'),
          (e.async = !0),
          (e.src = 'https://canny.io/sdk.js'),
          f.parentNode.insertBefore(e, f);
      }
    }
    if (typeof w.Canny !== 'function') {
      var c = function() {
        c.q.push(arguments);
      };
      (c.q = []),
        (w.Canny = c),
        d.readyState === 'complete'
          ? l()
          : w.attachEvent
          ? w.attachEvent('onload', l)
          : w.addEventListener('load', l, !1);
    }
  })(window, document, 'canny-jssdk', 'script');
}

export default canny;
