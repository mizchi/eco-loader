var eco = require('eco');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = eco.precompile(source);
  // return 'module.exports = ' + template;
  var name = this.resourcePath;
  var paths = name.split('/').map(function(n) { return n.replace('.jst.eco', '') }).reverse()
  var ret = []
  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (path === 'templates') {
      break
    }
    ret.push(path)
  }
  var tname = ret.reverse().join('/')
  return 'global.JST=global.JST||{}; JST["' + tname + '"]='  + template;
};

