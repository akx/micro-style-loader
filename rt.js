/* eslint-env browser */
module.exports = function loadStyles(list) {
  list.forEach(function(el) {
    var id = el[0];
    var css = el[1];
    var media = el[2];
    var styleEl = document.createElement('style');
    styleEl.setAttribute('type', 'text/css');
    styleEl.setAttribute('id', 'msl-' + id);
    if (media) {
      styleEl.setAttribute('media', media);
    }
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  });
};
