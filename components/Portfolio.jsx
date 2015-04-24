'use strict';
var React = require('react');

var Portfolio = React.createClass({
  getInitialState: function() {
  	return {};
  },
  render: function() {
  	return (
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
  	);
  }
});

module.exports = Portfolio;