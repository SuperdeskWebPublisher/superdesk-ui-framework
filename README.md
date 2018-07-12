# Superdesk UI Framework - css non conflicting version for livesite manager

### Status
[![Build Status](https://travis-ci.org/superdesk/superdesk-client-core.svg?branch=master)](https://travis-ci.org/superdesk/superdesk-ui-framework)

### Documentation
Documentation page can be accessed via this link: https://superdesk.github.io/superdesk-ui-framework/dist/

### Install and connect
To install the package via npm use

```
npm install --save superdesk-ui-framework
```

After installation, the ui-framework distributive files will be available as

```
import 'superdesk-ui-framework'
```

There are also uncompressed versions (superdesk-ui-framework.js, superdesk-ui-framework.css) and sourcemaps for all of js/css-files.

To use it in your angular-app you should add the module (modules)

```
angular.module('application', ['superdesk-ui'])
```

### Contributing
1. Fork repo https://github.com/superdesk/superdesk-ui-framework
2. Clone `git clone https://github.com/superdesk/superdesk-ui-framework`
3. `npm install` to install dependencies
4. `grunt server` to run server locally
5. Open `localhost:9100`

Before pushing changes, please run `grunt build` to rebuild content for example page

### Testing
Runing `e2e&unit` tests
```
grunt test
```
