$(function() {
	$(document).on("pageChange", function(e, page) {
		if (page !== "contact") { return; }

		if ($('#g-recaptcha').is(':empty')) {
			grecaptcha.render('g-recaptcha', {
	      'sitekey' : '6LdiEAYTAAAAANX33ylhZIkx6V0ffIfogGHWKcIM'
	    });
		}
	});
});