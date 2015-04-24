'use strict'
var React = require('react');

var NotFound = React.createClass({
	getInitialState: function() {
    return {};
  },

	render: function() {
		return (
			<p>Not Found</p>
		)
	}
});

module.exports = NotFound;