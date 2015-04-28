$(function() {
	$(document).on("pageChange", function(e, page) {
		if (page !== "contact") { return; }

		grecaptcha.render('g-recaptcha', {
      'sitekey' : '6LdiEAYTAAAAANX33ylhZIkx6V0ffIfogGHWKcIM'
    });
	});
});