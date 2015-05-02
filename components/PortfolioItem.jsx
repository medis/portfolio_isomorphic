'use strict';

var React = require('react');
var PortfolioStore = require('../stores/PortfolioStore');
var StateMixin = require('react-router').State;

var PortfolioItem = React.createClass({
	mixins: [StateMixin],

  // Image select event listener.
  changePicture: function(id, index) {
  	// Pass it to parent.
  	this.props.onSelectImage(id, index);
  },

  render: function() {
  	var ctx = this;
    return (
    	<div className={"portfolio portfolio-" + this.props.id}>
    		<div className="image-wrapper">
	  	  	<ul className="images">
	  	  		{
		  	  		this.props.data.images.map(function(image, id) {
			          return <li key={id}><img src={image} /></li>
			        })
		  	  	}
	  	  	</ul>
  	  	</div>
	      <div className="controls">
	        <ul>
	        	{
		  	  		this.props.data.images.map(function(image, id) {
		  	  			var active = (ctx.props.data['status'].currentIndex == id);
			          return <li key={id} className={(active) ? 'active' : ''} onClick={ctx.changePicture.bind(ctx, ctx.props.id, id)}><i className={(active) ? "fa fa-circle" : "fa fa-circle-o"}></i></li>;
			        })
		  	  	}
	        </ul>
	      </div>
      </div>
		);
  }
});

module.exports = PortfolioItem;