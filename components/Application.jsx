'use strict';
var React = require('react');
var Nav = require('./Nav.jsx');
var FluxibleMixin = require('fluxible').Mixin;
var RouterHandler = require('react-router').RouteHandler;
var ApplicationStore = require('../stores/ApplicationStore');

var Application = React.createClass({
  mixins: [FluxibleMixin],
  statics: {
    storeListeners: [ApplicationStore]
  },
  
  getInitialState: function() {
    return this.getStore(ApplicationStore).getState();
  },
  
  onChange: function() {
    var state = this.getStore(ApplicationStore).getState();
    this.setState(state);
  },
  
  render: function() {
    return (
      <div>
        <aside id="sidebar">
          <div id="banner"><img src="/images/me.png" /></div>
          <div id="navigation"><Nav navExpanded={this.state.navExpanded} /></div>
        </aside>
        <main className="container">
          <div className="content">
            <RouterHandler />
          </div>
        </main>
        <footer id="footer">
          <div className="date">2015</div>
        </footer>
      </div>
    );
  }
});

module.exports = Application;