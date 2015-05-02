'use strict';

var createStore = require('fluxible/utils/createStore');
var data = require('../portfolioData');

var PortfolioStore = createStore({
  storeName: 'PortfolioStore',
  
  // Event handlers.
  handlers: {
    'CHANGE_IMAGE': 'handleChangeImage'
  },
  
  initialize: function(dispatcher) {
    this.data = data;
    // Add status to all portfolio items.
    for (var i = 0; i < this.data.length; i++) {
      this.data[i]['status'] = {
        currentIndex: 0,
        canChangeImage: true
      }
    }
  },
  
  // Change current image index.
  handleChangeImage: function(payload) {
    if (payload.index != this.data[payload.id]['status'].currentIndex) {
      this.data[payload.id]['status'].currentIndex = payload.index;
      this.emitChange();
    }
  },
  
  getState: function() {
    return { data: this.data }
  },
  
  dehydrate: function() {
    return this.getState();
  },
  
  rehydrate: function(state) {
    this.data = state.data;
  },
  
});

module.exports = PortfolioStore;