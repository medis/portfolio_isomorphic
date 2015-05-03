'use strict';
var React = require('react');
var Nav = require('./Nav.jsx');
var FluxibleMixin = require('fluxible').Mixin;
var RouterHandler = require('react-router').RouteHandler;
var ApplicationStore = require('../stores/ApplicationStore');
var PortfolioStore = require('../stores/PortfolioStore');

var Application = React.createClass({
  mixins: [FluxibleMixin],
  statics: {
    storeListeners: [ApplicationStore, PortfolioStore]
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
          <ul className="social-wrapper footer">
            <li className="linkedin"><a className="linkedin" href="https://uk.linkedin.com/pub/audrius-bukauskas/45/983/879" target="_blank" rel="nofollow"><i className="fa fa-linkedin-square"></i></a></li>
            <li className="facebook"><a className="facebook" href="https://www.facebook.com/audrius.bukauskas.7" target="_blank" rel="nofollow"><i className="fa fa-facebook-square"></i></a></li>
            <li className="twitter"><a className="twitter" href="https://twitter.com/aubuka" target="_blank" rel="nofollow"><i className="fa fa-twitter-square"></i></a></li>
            <li className="drupal"><a className="drupal" href="https://www.drupal.org/u/audriusb" target="_blank" rel="nofollow"><i className="fa fa-drupal"></i></a></li>
          </ul>
        </footer>
      </div>
    );
  }
});

module.exports = Application;