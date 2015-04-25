// Animate homepage.
$(function() {
	$(document).on("pageChange", function(e, page) {
		if (page !== "about") { return; }

		init_animations();
	});

	// Initialize animations.
	function init_animations() {
		var controller = new ScrollMagic.Controller();

		// Top skills animation.
		new ScrollMagic.Scene({
			triggerElement: '#trigger1'
		})
		.setTween('#top-skills-wrapper', 0.5, {opacity: 1, y: 0})
		.addTo(controller);

		// Good at animation.
		new ScrollMagic.Scene({
			triggerElement: '#trigger2'
		})
		.setTween('#good-at-wrapper', 0.5, {opacity: 1, y: 0})
		.addTo(controller);

		// Scratching the surface animation.
		new ScrollMagic.Scene({
			triggerElement: '#trigger3'
		})
		.setTween('#scratching-surface-wrapper', 0.5, {opacity: 1, y: 0})
		.addTo(controller);
	}
});