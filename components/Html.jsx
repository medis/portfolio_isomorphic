'use strict';
var React = require('react');

var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Audrius portfolio</title>
          <link href='http://fonts.googleapis.com/css?family=Roboto:400,400italic,700' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" media="all" href="/css/styles.min.css" />
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        </head>
        <body>
          <div className="container">
            <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}} />
          </div>
        </body>
        <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min.js"></script>
        <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.0/ScrollMagic.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.0/plugins/animation.gsap.min.js"></script>
        <script src="/js/client.min.js" defer></script>
      </html>
    );
  }
});

module.exports = Html;
