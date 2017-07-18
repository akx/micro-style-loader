var loaderUtils = require('loader-utils');
var path = require('path');

module.exports = function() {};
module.exports.pitch = function pitch(request) {
  if (this.cacheable) this.cacheable();
  var loaderRuntimeRequest = loaderUtils.stringifyRequest(this, '!' + path.join(__dirname, 'rt.js'));
  var contentRequest = loaderUtils.stringifyRequest(this, '!!' + request);
  return [
    'var content = require(' + contentRequest + ');',
    "if(typeof content === 'string') content = [[module.id, content, '']];",
    'require(' + loaderRuntimeRequest + ')(content);'
  ].join('');
};
