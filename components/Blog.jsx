'use strict'
var React = require('react');

var Blog = React.createClass({
  getInitialState: function() {
  	return {};
  },

  render: function() {
  	return (
  		<div>
	  	  <p>Coming soon.</p>
	  	  <div>{process.env.RECAPTCHA}</div>
  	  </div>
  	)
  }
});

module.exports = Blog;