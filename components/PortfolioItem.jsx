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

  // Go to next image.
  nextPicture: function(id) {
  	this.props.onNextImage(id);
  },

  // Go to previous image.
  prevPicture: function(id) {
  	this.props.onPrevImage(id);
  },

  render: function() {
  	var ctx = this;
    return (
    	<div className={"portfolio portfolio-" + this.props.id}>
    	  <div className="portfolio-item-inner-wrapper">
	    		<div className="image-wrapper">
	    			<div className="open"><i className="fa fa-eye"></i>OPEN</div>
		  	  	<ul className="images">
		  	  		{
			  	  		this.props.data.images.map(function(image, id) {
				          return <li key={id}><img src={image} /></li>
				        })
			  	  	}
		  	  	</ul>
	  	  	</div>
		      <div className="controls">
		      	<div className="control prev"><i className="fa fa-arrow-circle-o-left" onClick={ctx.prevPicture.bind(ctx, ctx.props.id)}></i></div>
		        <ul>
		        	{
			  	  		this.props.data.images.map(function(image, id) {
			  	  			var active = (ctx.props.data['status'].currentIndex == id);
				          return <li key={id} className={(active) ? 'active' : ''} onClick={ctx.changePicture.bind(ctx, ctx.props.id, id)}><i className={(active) ? "fa fa-circle" : "fa fa-circle-o"}></i></li>;
				        })
			  	  	}
		        </ul>
		        <div className="control next"><i className="fa fa-arrow-circle-o-right" onClick={ctx.nextPicture.bind(ctx, ctx.props.id)}></i></div>
		      </div>
		    </div>
      </div>
		);
  }
});

module.exports = PortfolioItem;