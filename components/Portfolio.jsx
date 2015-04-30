'use strict';
var React = require('react');
var StateMixin = require('react-router').State;
var FluxibleMixin = require('fluxible').Mixin;
var PortfolioStore = require('../stores/PortfolioStore');
var PortfolioItem = require('./PortfolioItem.jsx');

var Portfolio = React.createClass({
  mixins: [FluxibleMixin/*, StateMixin*/],
  /*statics: {
    storeListeners: [PortfolioStore]
  },*/
  
  getInitialState: function() {
  	return this.getStore(PortfolioStore).getState();
  },
  
  render: function() {
    console.log(this);
  	return (
      <div>
  	  <ul id="portfolio-list">
  	  	<li className="yti">
  	  	  <div className="images">
  	  	  	<ul>
  	  	  		<li><img src="/images/portfolio/yti/1.JPG" /></li>
  	  	  		<li><img src="/images/portfolio/yti/2.JPG" /></li>
  	  	  		<li><img src="/images/portfolio/yti/3.JPG" /></li>
              <li className="logo"></li>
  	  	  	</ul>
  	  	  </div>
          <div className="controls">
            <ul>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
              <li className="active"><div></div></li>
            </ul>
          </div>
  	  	</li>
  	  </ul>
      <PortfolioItem/>
      </div>
  	);
  }
});

module.exports = Portfolio;