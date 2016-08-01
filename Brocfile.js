const FramptonBuild = require('frampton-build');
const packages = {
  'frampton-history' : { trees: null }
}

const build = new FramptonBuild({
  name : 'frampton-history',
  packages : packages
});

module.exports = build.getDistTree();
