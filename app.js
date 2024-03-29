'use strict';
var Fluxible = require('fluxible');

var app = new Fluxible({
  component: require('./components/Routes.jsx')
});

app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/PageStore'));
app.registerStore(require('./stores/PortfolioStore'));

module.exports = app;
