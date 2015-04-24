// Slider.
// @TODO CHANGE TO REACT COMPONENT.
$(function() {
  // Initialize portfolio slider.
  initPortfolioSlider();

  // Initialize portfolio slider when react changes page.
  $(document).on("pageChange", function() {
    // Initialize portfolio slider.
    initPortfolioSlider();
  })

  function initPortfolioSlider() {
    if ($('#portfolio-list').length == 0) { return; }

    var $slides = $("#portfolio-list .images li");
    var currentSlide = $("#portfolio-list .images li").length - 1;
    var imgWidth = $slides.width();

    TweenLite.set($slides.filter(":lt(3)"), {left: imgWidth});

    $("#portfolio-list .controls li").click(function() {
      $("#portfolio-list .controls li.active").removeClass("active");
      $(this).addClass("active");

      // Hide current slide.
      TweenLite.to( $slides.eq(currentSlide), 1, {left: ((-1)*imgWidth) + "px" } );   

      // Slide in correct slide.
      TweenLite.fromTo( $slides.eq($(this).index()), 1, {left: imgWidth + "px"}, {left:"0px"} );

      // Set new index.
      currentSlide = $(this).index();
    });
  }
});
