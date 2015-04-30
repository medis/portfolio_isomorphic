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
    this.currentIndex = 0;
    this.canChangeImage = true;
    this.data = data;
  },
  
  // Change current image index.
  handleChangeImage: function(index) {
    if (index != this.currentIndex) {
      this.currentIndex = index;
      this.emitChange();
    }
  },
  
  getState: function() {
    return {
      currentIndex: this.currentIndex,
      canChangeImage: this.canChangeImage,
      data: this.data,
    }
  },
  
  dehydrate: function() {
    return this.getState();
  },
  
  rehydrate: function(state) {
    this.currentIndex = state.currentIndex;
    this.canChangeImage = state.canChangeImage;
    this.data = state.data;
  },
  
});

module.exports = PortfolioStore;