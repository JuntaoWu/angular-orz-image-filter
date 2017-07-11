[![Build Status](https://travis-ci.org/juntaowu/angular-orz-image-filter.svg?branch=master)](https://travis-ci.org/juntaowu/angular-orz-image-filter.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/juntaowu/angular-orz-image-filter/badge.svg?branch=master)](https://coveralls.io/github/juntaowu/angular-orz-image-filter?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Using this module in other modules

 - npm
```

npm install angular-orz-image-filter --save

```

 - jspm
```

jspm install npm:angular-orz-image-filter

```

> Use angular-orz-image-filter via systemjs/jspm

Just have your system.config have this:
```
  packages: {
    "angular-orz-image-filter": { main: "lib/index.js", defaultJSExtensions: true }
  },
  map: {
    "angular-orz-image-filter": "path/to/angular-orz-image-filter/folder",
    "angular": "npm:angular@1.6.5",
    ...
  }
```
The "path/to/angular-orz-image-filter/folder" depends on how you installed your package, (via npm or jspm)

- To use the `blur` module in a TypeScript file -

```ts
import { blur } from "angular-orz-image-filter";

angular.module("mainApp", [blur.name]);
```

- To use the `blur` module in a JavaScript file -

```js
const blur = require('angular-orz-image-filter').blur;

angular.module("mainApp", [blur.name]);
```

- Then you can include the orz-blur inside your html

```
    <img orz-blur src="test.png" stddeviation="5" />
    <orz-blur src="test.png" stddeviation="5"></orz-blur>
``` 

> Use angular-orz-image-filter via script tag

- Install or download angular-orz-image-filter via npm

- Then include script reference

```
    <img orz-blur src="test.png" stddeviation="5" />
    <orz-blur src="test.png" stddeviation="5"></orz-blur>
    
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angular-orz-image-filter/lib/angular-orz-image-filter.js"></script>
    <script>
        angular.module("mainApp", ["orz.blur"]);
    </script>
```

- See https://juntaowu.github.io/angular-orz-image-filter/examples/global/ for a demo