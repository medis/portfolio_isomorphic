
// Slider.
// @TODO CHANGE TO REACT COMPONENT.
$(function() {
  init_animations();
  init_popup();
  $(document).on("pageChange", function(e, page) {
    if (page !== "portfolio") { return; }
    changeActiveImage();
    init_animations();
    init_popup();
  });

  function init_animations() {
    if ($('.portfolio-item-inner-wrapper').length == 0) { return; }

    $('.portfolio-item-inner-wrapper').hover(over, out);
  }

  function over() {
    //close_others($(this).parents('.portfolio').index());
    if ($(this).find('.controls').find('.controls').css("opacity") != '1') {
      TweenMax.to($(this).find('.controls'), 0.2, {opacity: 1, y: 0});
      TweenMax.to($(this).find('.open'), 0.2, {opacity: 1});
    }
  }

  function out() {
    if ($(this).find('.controls').css("opacity") != '0') {
      TweenMax.to($(this).find('.controls'), 0.2, {opacity: 0, y: 10});
      TweenMax.to($(this).find('.open'), 0.2, {opacity: 0});
    }
  }

  function changeActiveImage() {
    $('.portfolio').each(function(i) {
      var active_index = $(this).find('.controls ul li.active').index();
      TweenMax.to('.portfolio-' + i + ' ul.images', 0, {x:250*active_index*(-1), force3D:true});
    });
  }

  function init_popup() {
    $('.portfolio').each(function() {
      // Init Colorbox.
      $(this).find('.image-wrapper').colorbox({
        href:"/portfolio/" + $(this).attr('data-name') + "/index.html",
        width: "70%",
        height: "90%",
      });
    });
  }

  $(document).bind('cbox_open', function(){
    // 70%, make it half.
    var width = ($(window).width() - 62) * .7 / 2;
    // Calculate triangle height relative to width. Make it 20% width.
    var height = width * .1;

    document.styleSheets[2].addRule('#colorbox .images:after','border-left: '+width+'px solid transparent; border-right: '+width+'px solid transparent; border-bottom: '+height+'px solid #fff;');
  });

  $(document).bind('cbox_complete', function(){
    $('#cboxLoadedContent .images').owlCarousel({
      loop: true,
      animateOut: 'fadeOut',
      items: 1,
      margin:10,
      nav: true,
      navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
      dots: false,
      stagePadding: 0,
      smartSpeed:450,
    });
  });
  
});