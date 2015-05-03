// Slider.
// @TODO CHANGE TO REACT COMPONENT.
$(function() {
  init_animations();
  $(document).on("pageChange", function(e, page) {
    if (page !== "portfolio") { return; }
    changeActiveImage();
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

  function changeActiveImage() {
    $('.portfolio').each(function(i) {
      var active_index = $(this).find('.controls ul li.active').index();
      TweenMax.to('.portfolio-' + i + ' ul.images', 0, {x:250*active_index*(-1), force3D:true});
    });
  }
});
