'use strict';
var React = require('react');
var PageStore = require('../stores/PageStore');
var FluxibleMixin = require('fluxible').Mixin;

var Page = React.createClass({
  mixins: [FluxibleMixin],
  statics: {
    storeListeners: [PageStore]
  },
  getInitialState: function() {
    return this.getStore(PageStore).getState();
  },
  onChange: function() {
    var state = this.getStore(PageStore).getState();
    this.setState(state);
  },
  render: function() {
    render (
      <p>{this.state.content}</p>
    );
  }
});

module.exports = Page;
