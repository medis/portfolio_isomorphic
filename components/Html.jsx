'use strict';
var React = require('react');

var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Audrius portfolio</title>
          <link href='http://fonts.googleapis.com/css?family=Roboto:400,400italic,700' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" media="all" href="/css/normalize.css" />
          <link rel="stylesheet" media="all" href="/css/styles.min.css" />
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.4.33/example1/colorbox.min.css" />
        </head>
        <body>
          <div className="container" id="app-wrapper">
            <ul className="social-wrapper">
              <li className="linkedin"><a className="linkedin" href="https://uk.linkedin.com/pub/audrius-bukauskas/45/983/879" target="_blank" rel="nofollow"><i className="fa fa-linkedin-square"></i></a></li>
              <li className="facebook"><a className="facebook" href="https://www.facebook.com/audrius.bukauskas.7" target="_blank" rel="nofollow"><i className="fa fa-facebook-square"></i></a></li>
              <li className="twitter"><a className="twitter" href="https://twitter.com/aubuka" target="_blank" rel="nofollow"><i className="fa fa-twitter-square"></i></a></li>
              <li className="drupal"><a className="drupal" href="https://www.drupal.org/u/audriusb" target="_blank" rel="nofollow"><i className="fa fa-drupal"></i></a></li>
            </ul>
            <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}} />
          </div>
        </body>
        <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min.js"></script>
        <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.0/ScrollMagic.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.0/plugins/animation.gsap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.0/plugins/debug.addIndicators.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.4.33/jquery.colorbox-min.js"></script>
        <script src='//www.google.com/recaptcha/api.js'></script>
        <script src="/js/client.min.js" defer></script>
      </html>
    );
  }
});

module.exports = Html;
