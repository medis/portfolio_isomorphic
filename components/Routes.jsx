var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var Home = require('./Home.jsx');
var About = require('./About.jsx');
var Blog = require('./Blog.jsx');
var Contact = require('./Contact.jsx');
var Portfolio = require('./Portfolio.jsx');
var Application = require('./Application.jsx');
var NotFound = require('./NotFound.jsx');
var NotFoundRoute = require('react-router').NotFoundRoute;

var routes = (
  <Route name="app" path="/" handler={Application}>
    <DefaultRoute name="about" handler={About}/>
    <Route name="blog" handler={Blog}/>
    <Route name="portfolio" handler={Portfolio}/>
    <Route name="contact" handler={Contact}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = routes;