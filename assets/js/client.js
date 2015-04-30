'use strict';
var React = require('react');
var app = require('../../app.js');
var dehydratedState = window.App; // Sent from server
var Router = require('react-router');
var HistoryLocation = Router.HistoryLocation;
var navigateAction = require('../../actions/navigate');
var portfolioChangeImageAction = require('../../actions/portfolioChangeImage');

// For Chrome dev tools support.
window.React = React;

app.rehydrate(dehydratedState, function(err, context) {
  if (err) {
    throw err;
  }
  
  window.context = context;
  var mountNode = document.getElementById('app');
  
  var firstRender = true;
  Router.run(app.getAppComponent(), HistoryLocation, function(Handler, state) {
    if (firstRender) {
      // Don't call the action on the first render on top of the server rehydration
      // Otherwise there is a race condition where the action gets executed before
      // render has been called, which cause the checksum to fail.
      React.withContext(context.getComponentContext(), function() {
        React.render(React.createFactory(Handler)(), mountNode, function() {
          // Server rendered.
          $(document).ready(function() {
            $(document).trigger('pageChange', [state.routes[1].name]);
          });
        });
      });
      firstRender = false;
    } else {
      $('main.container .content').css('opacity', 0);
      context.executeAction(navigateAction, state, function() {
        React.withContext(context.getComponentContext(), function() {
          React.render(React.createFactory(Handler)(), mountNode, function() {
            // New page rendered - reveal it's content.
            Animations.animate.revealPage();
            // Fire up page rendered event.
            $(document).trigger('pageChange', [state.routes[1].name]);
          });
        });
      });
    }
  });
});
