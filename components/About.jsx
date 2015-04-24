'use strict';
var React = require('react');

var About = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div>
        <p>Hi and welcome to my page! My name is <span className="name">Audrius Bukauskas</span>. I am originally from Lithuania but currently living in London. As you may guess, I speak English and Lithuanian.</p>
        <p>I specialize on building web sites based on <a href="https://www.drupal.org/" target="_blank" rel="nofollow">Drupal</a> content management system, including <a href="#">server configuration</a>, <a href="#">backend</a> and even <a href="#">front end</a>.</p>
        <p>At free time, I love to hack some awesome stuff, try new technologies or do some DIY stuff. This site is no exception, read more about it <a href="#">here</a>.</p>
        <h2 id="skills">My top skills</h2>
        <div className="description">Everything that requires to build Drupal site, which includes the following:</div>
        <ul className="skills">
          <li className="php">
            <h3>PHP programming</h3>
            <p>I have a good understanding of PHP programming principles and can extend Drupal with custom modules which cannot be found amongst contributed modules list at <a href="https://www.drupal.org/" target="_blank" rel="nofollow">drupal.org</a>. Most of the time this is needed for better performance or niche feature. I can also extend contributed modules with specific needs, if module allows being extended.</p>
          </li>
          <li className="javascript">
            <h3>Javascript programming</h3>
            <p>I can easily make static websites "alive" using <a href="http://jquery.com/" target="_blank" rel="nofollow">jQuery</a>, <a href="http://greensock.com/gsap" target="_blank" rel="nofollow">Greensock</a> or <a href="https://janpaepke.github.io/ScrollMagic/" target="_blank" rel="nofollow">ScrollMagic</a> libraries. Javascript can also be used for data presentation and leave Drupal only responsible for content administration</p>
          </li>
          <li className="css">
            <h3>CSS styling</h3>
            <p>I can transform designer produced designs into live website. I prefer using <a href="http://sass-lang.com/" target="_blank" rel="nofollow">SASS</a> combined with <a href="http://susy.oddbird.net/" target="_blank" rel="nofollow">Susy</a> framework to make websites responsive, instead of pure CSS. Although <a href="http://lesscss.org/" target="_blank" rel="nofollow">LESS</a> can be an option, if so desired. </p>
          </li>
          <li className="performance">
            <h3>Drupal performance improvement</h3>
            <p>I can make Drupal fly. This include several contributed modules installation and if possible - server configuration.</p>
          </li>
        </ul>
        <h2 id="good-at">I am good at</h2>
        <ul className="good-at">
          <li className="database">
            <h3>Database design</h3>
            <p>Although Drupal do not require to design your own database, I am quite good at it when needed. I know what Third normal form means.</p>
          </li>
          <li className="server">
            <h3>Webserver configuration</h3>
            <p>I can configure server from scratch using <a href="http://nginx.org/" target="_blank" rel="nofollow">Nginx</a> webserver with <a href="https://mariadb.org/" target="_blank" rel="nofollow">MariaDB</a> database and <a href="http://redis.io/" target="_blank" rel="nofollow">Redis</a> key-value store for better Drupal performance.</p>
          </li>
          <li className="ruby">
            <h3>Ruby on Rails programming</h3>
            <p>I know <a href="https://www.ruby-lang.org/en/" target="_blank" rel="nofollow">Ruby</a> and <a href="http://rubyonrails.org/" target="_blank" rel="nofollow">Ruby on Rails</a> fundementals with <a href="http://rspec.info/" target="_blank" rel="nofollow">RSpec</a> for test driven development.</p>
          </li>
        </ul>
        <h2 id="scratching-surface">Scratching the surface</h2>
        <ul className="scratching-surface">
          <li className="react">
            <h3>ReactJS</h3>
            <p>A Javascript library for creating user interfaces by Facebook. The most awesome feature for me is ability to create <a href="http://isomorphic.net/" target="_blank" rel="nofollow">Isomorphic applications</a>. This is like <a href="http://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="nofollow">Single-Page Applications</a> but "on steroids". Article about these two types is coming soon. An example of Isomorphic application is this whole website you are looking at right now.</p>
          </li>
          <li className="angular">
            <h3>AngularJS</h3>
            <p>I have a basic understanding of creating <a href="https://angularjs.org/" target="_blank" rel="nofollow">AngularJS</a> applications.</p>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
