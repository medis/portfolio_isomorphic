var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// Send mail.
var Mailer = function(data) {
	var mailOpts = {
    from: 'noreply@audrius.io',
    to: 'aubuka@gmail.com',
    subject: 'AUDRIUS.IO Contact',
    html: '<strong>Name:</strong> ' + data.name + '<br/><strong>Email:</strong> ' + data.email + '<br/><strong>Message:</strong><br/>' + data.message
  };

  var transporter = nodemailer.createTransport(smtpTransport({
    host: 'localhost',
    port: 25,
    secure: false
  }));

  transporter.sendMail(mailOpts, function (error, response) {});
}

module.exports = Mailer;