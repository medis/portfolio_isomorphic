var rekwest = require('co-request');

var Captcha = function *(key) {
	var SECRET = process.env.RECAPTCHA,
			url = "https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET + "&response=" + key;

	// Call google API.
	var result = yield rekwest(url);
  
  try {
		var parsedData = JSON.parse(data);
		return parsedData.success
	} catch (e) {
		return false;
	}

	return false;
}

module.exports = Captcha;