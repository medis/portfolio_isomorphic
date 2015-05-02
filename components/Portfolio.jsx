'use strict';
var React = require('react');
var StateMixin = require('react-router').State;
var FluxibleMixin = require('fluxible').Mixin;
var PortfolioStore = require('../stores/PortfolioStore');
var PortfolioItem = require('./PortfolioItem.jsx');
var portfolioChangeImageAction = require('../actions/portfolioChangeImage');

var Portfolio = React.createClass({
  mixins: [FluxibleMixin, StateMixin],
  statics: {
    storeListeners: [PortfolioStore]
  },

  getInitialState: function() {
  	return this.getStore(PortfolioStore).getState();
  },

  onChange: function() {
    var state = this.getStore(PortfolioStore).getState();
    this.setState(state);
  },

  render: function() {
    var ctx = this;

  	return (
      <div>
      {
        this.state.data.map(function(project, id) {
          return <PortfolioItem key={id} id={id} data={project} onSelectImage={ctx.onSelectImage} />;
        })
      }
      </div>
  	);
  },

  // Parent listening for children change image requests.
  onSelectImage: function(id, i) {
    context.executeAction(portfolioChangeImageAction, {id: id, index: i}, function(data) {
      Animations.animate.changeImage(id, i);
    });
  },

});

module.exports = Portfolio;