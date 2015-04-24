require('node-jsx').install({extension: '.jsx'});
var server = require('koa')();
//var route = require('koa-route');
var serve = require('koa-static');
var Router = require('react-router');
var app = require('./app');
var navigateAction = require('./actions/navigate');
var navExpandAction = require('./actions/navExpand');
var serialize = require('serialize-javascript');
var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html.jsx'));

server.use(serve('public', {defer: true}));

server.use(function *() {
  var context = app.createContext();
  var ctx = this;

  Router.run(app.getAppComponent(), ctx.path, function(Handler, state) {
    context.executeAction(navigateAction, state, function() {
      var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';
     
      React.withContext(context.getComponentContext(), function() {
        var html = React.renderToStaticMarkup(HtmlComponent({
          state: exposed,
          markup: React.renderToString(React.createFactory(Handler)())
        }));    
        ctx.body = html;
      });
    });
  });
});

server.listen(80);
