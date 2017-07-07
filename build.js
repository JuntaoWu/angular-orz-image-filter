var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('.', "system.config.js");

builder.config({
  meta: {
    'angular': {
        build: false
    }
  }
});

builder
.buildStatic('index.js', 'dist/angular-orz-image-filter.js', {
    globalName: 'orz',
    globalDeps: {
    'angular': 'angular'
  }
})
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});