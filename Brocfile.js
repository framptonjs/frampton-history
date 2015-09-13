var FramptonBuild = require('frampton-build');
var packages = {
  'frampton-history' : { trees: null }
}

var build = new FramptonBuild({
  name     : 'frampton-history',
  packages : packages
});

module.exports = build.getDistTree();