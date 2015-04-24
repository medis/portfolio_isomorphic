'use strict';
var React = require('react');
var Link = require('react-router').Link;
var StateMixin = require('react-router').State;
var navExpandAction = require('../actions/navExpand');

var Nav = React.createClass({
  mixins: [StateMixin],

  handleNavExpand: function() {
    var navExpandedState = !this.props.navExpanded;
    context.executeAction(navExpandAction, {navExpanded: navExpandedState}, function(data) {
      Animations.animate.menuExpand(navExpandedState);
    });
  },

  render: function() {
    return (
      <div>
        <div id="menuToggle" onClick={this.handleNavExpand}><i className={this.props.navExpanded ? "fa fa-caret-square-o-right" : "fa fa-caret-square-o-left"}></i></div>
        <ul className="main-menu">
          <li id="about" className={this.isActive('about') ? 'active' : ''}><Link to='about'><i className="fa fa-info"></i> About</Link></li>
          <li id="blog" className={this.isActive('blog') ? 'active' : ''}><Link to='blog'><i className="fa fa-pencil-square-o"></i> Blog</Link></li>
          <li id="portfolio" className={this.isActive('portfolio') ? 'active' : ''}><Link to='portfolio'><i className="fa fa-folder-open-o"></i> Portfolio</Link></li>
          <li id="contact" className={this.isActive('contact') ? 'active' : ''}><Link to='contact'><i className="fa fa-envelope-o"></i> Get in touch</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Nav;