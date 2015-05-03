// Slider.
// @TODO CHANGE TO REACT COMPONENT.
$(function() {
  init_animations();
  $(document).on("pageChange", function(e, page) {
    if (page !== "portfolio") { return; }

    init_animations();
  });

  function init_animations() {
    if ($('.portfolio-item-inner-wrapper').length == 0) { return; }

    $('.portfolio-item-inner-wrapper').hover(over, out);
  }

  function over() {
    if ($(this).css("height") == '252px') {
      TweenMax.to($(this), 0.2, {height: "280px"});
      TweenMax.to($(this).find('.open'), 0.2, {opacity: 1});
    }
  }

  function out() {
    if ($(this).css("height") == '280px') {
      TweenMax.to($(this), 0.2, {height: "252px"});
      TweenMax.to($(this).find('.open'), 0.2, {opacity: 0});
    }
  }
});
