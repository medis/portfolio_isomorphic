'use strict';

var createStore = require('fluxible/utils/createStore');

var ApplicationStore = createStore({
  storeName: 'ApplicationStore',
  handlers: {
    'CHANGE_ROUTE': 'handleNavigate',
    'CHANGE_NAVEXPAND': 'handleNavExpand'
  },
  initialize: function(dispatcher) {
    this.currentRoute = null;
    this.navExpanded = true;
  },
  handleNavigate: function(route) {
    if (this.currentRoute && route.path === this.currentRoute.path) {
      return;
    }
    
    this.currentPath = route;
    this.emitChange();
  },
  // Handle nav expand.
  handleNavExpand: function(payload) {
    this.navExpanded = payload.navExpanded;
    this.emitChange();
  },
  getState: function() {
    return {
      route: this.currentRoute,
      navExpanded: this.navExpanded
    };
  },
  dehydrate: function() {
    return this.getState();
  },
  rehydrate: function(state) {
    this.currentRoute = state.route;
    this.navExpanded = state.navExpanded;
  }
});

module.exports = ApplicationStore;
