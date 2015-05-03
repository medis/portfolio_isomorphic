'use strict';

var createStore = require('fluxible/utils/createStore');
var data = require('../portfolioData');

var PortfolioStore = createStore({
  storeName: 'PortfolioStore',
  
  // Event handlers.
  handlers: {
    'CHANGE_IMAGE': 'handleChangeImage',
    'PREV_IMAGE': 'handlePrevImage',
    'NEXT_IMAGE': 'handleNextImage'
  },
  
  initialize: function(dispatcher) {
    this.data = data;
    // Add status to all portfolio items.
    for (var i = 0; i < this.data.length; i++) {
      this.data[i]['status'] = {
        currentIndex: 0
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

  // Change to next image.
  handleNextImage: function(payload) {
    // Check if there is no next image. If so, go to first.
    if (this.data[payload.id]['status'].currentIndex + 1 == this.data[payload.id].images.length) {
      this.data[payload.id]['status'].currentIndex = 0;
    } else {
      this.data[payload.id]['status'].currentIndex += 1;
    }

    this.emitChange();
  },

  // Change to previous image.
  handlePrevImage: function(payload) {
    // Check if there is no previous image. If so, go to last.
    if (this.data[payload.id]['status'].currentIndex == 0) {
      this.data[payload.id]['status'].currentIndex = this.data[payload.id].images.length - 1;
    } else {
      this.data[payload.id]['status'].currentIndex -= 1;
    }

    this.emitChange();
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