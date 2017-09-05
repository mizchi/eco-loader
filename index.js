var eco = require('eco');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = eco.precompile(source);
  var name = this.resourcePath;
  return 'global.JST=global.JST||{}; JST["' + name + '"] = module.exports = ' + template;
};
