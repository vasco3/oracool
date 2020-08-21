const bsconfig = require('./bsconfig.json');
const withPlugins = require('next-compose-plugins');
const transpileModules = ['bs-platform', 'three'].concat(
  bsconfig['bs-dependencies'],
);
const withTM = require('next-transpile-modules')(transpileModules);

module.exports = withPlugins([withTM], {
  env: {},
  pageExtensions: ['jsx', 'js', 'bs.js'],
});
