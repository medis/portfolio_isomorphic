// Menu animation.
$(function() {
  if ($('ul.main-menu').length == 0) { return; }
  
  $('ul.main-menu li').hover(over, out);
  $('ul.main-menu li').click(runMenuCloseAnimation);

  // Make it sticky.
  $("#navigation").sticky({topSpacing:0});

  function over() {
  	TweenMax.to(this, 0.1, {borderBottomWidth: "5px"});
  }
  function out() {
  	if (!$(this).hasClass('active')) {
  	  TweenMax.to(this, 0.1, {borderBottomWidth: "1px"});
  	}
  }
  function runMenuCloseAnimation() {
  	TweenMax.to($('ul.main-menu li.active'), 0.1, {borderBottomWidth: "1px"});
  }
});
