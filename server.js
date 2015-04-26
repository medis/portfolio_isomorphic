require('node-jsx').install({extension: '.jsx'});
var server = require('koa')();
var koa_router = require('koa-router');
var serve = require('koa-static');
var Router = require('react-router');
var app = require('./app');
var navigateAction = require('./actions/navigate');
var navExpandAction = require('./actions/navExpand');
var serialize = require('serialize-javascript');
var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html.jsx'));
var parse = require('co-body');
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');

// Handle POST requests outside koa-router.
server.use(koa_router(server))
      .post('/contact', function *() {

  var data = yield parse(this);

  var mailOpts = {
    from: data.email,
    to: 'aubuka@gmail.com',
    subject: 'AUDRIUS.IO Contact',
    text: data.name + '<br/>' + data.message
  };

  var transporter = nodemailer.createTransport(sendmailTransport());
  transporter.sendMail(mailOpts, function (error, response) {
  });

  this.body = 'sent';
});

server.use(serve('public', {defer: true}));

server.use(function *() {

  // Do nothing for POST requests.
  if (this.request.method == "POST") {
    return;
  }

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

server.listen(8080);
