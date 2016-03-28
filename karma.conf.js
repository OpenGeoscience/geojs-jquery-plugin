module.exports = function (config) {
  config.set({
    files: [
      'test/index.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/d3/d3.js',
      'node_modules/geojs/geo.js',
      'node_modules/jquery-ui-bundle/jquery-ui.js',
      'index.js',
      {pattern: 'test/data/white.jpg', included: false}
    ],
    proxies: {
      '/data/': '/base/test/data/'
    },
    browsers: [
      'PhantomJS'
    ],
    reporters: [
      'progress', 'coverage'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'index.js': ['coverage']
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'lcovonly', subdir: '.'},
        {type: 'text'}
      ]
    }
  });
};
