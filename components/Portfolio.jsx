'use strict';
var React = require('react');
var StateMixin = require('react-router').State;
var FluxibleMixin = require('fluxible').Mixin;
var PortfolioStore = require('../stores/PortfolioStore');
var PortfolioItem = require('./PortfolioItem.jsx');
var portfolioChangeImageAction = require('../actions/portfolioChangeImage');

var Portfolio = React.createClass({
  mixins: [FluxibleMixin, StateMixin],

  getInitialState: function() {
  	return this.getStore(PortfolioStore).getState();
  },

  render: function() {
    var ctx = this;

  	return (
      <div>
      {
        this.state.data.map(function(project, id) {
          return <PortfolioItem 
            key={id}
            id={id}
            data={project}
            onSelectImage={ctx.onSelectImage}
            onNextImage={ctx.onNextImage}
            onPrevImage={ctx.onPrevImage} />;
        })
      }
      </div>
  	);
  },

  // Parent listening for children change image requests.
  onSelectImage: function(id, i) {
    var constant = 'CHANGE_IMAGE';
    context.executeAction(portfolioChangeImageAction, {constant: constant, id: id, index: i}, function(data) {
      Animations.animate.changeImage(id, i);
    });
  },

  // Parent listening for children next image request.
  onNextImage: function(id) {
    var constant = 'NEXT_IMAGE';
    var ctx = this;
    context.executeAction(portfolioChangeImageAction, {constant: constant, id: id}, function(data) {
      Animations.animate.changeImage(id, ctx.state.data[id]['status'].currentIndex);
    });
  },

  // Parent listening for children previous image request.
  onPrevImage: function(id) {
    var constant = 'PREV_IMAGE';
    var ctx = this;
    context.executeAction(portfolioChangeImageAction, {constant: constant, id: id}, function(data) {
      Animations.animate.changeImage(id, ctx.state.data[id]['status'].currentIndex);
    });
  },

});

module.exports = Portfolio;