// Global animations namespace.
var Animations = Animations || {};
// Because after browserify action all js is wrapped in anonymous function,
// place animations object into window object, so it is available when needed.
window.Animations = Animations;

Animations.animate = {
  menuExpand: function(navState) {
    if (navState == false) {
      // Minify.
      $('#navigation').css('width', 'auto');
      TweenMax.to($('#navigation ul.main-menu li span'), 0, {display: 'none'});
      TweenMax.to($('#sidebar'), 0.2, {width: '8.75%'});
      TweenMax.to($('main.container'), 0.2, {width: '91.25%'});
      TweenMax.to($('#navigation #menuToggle'), 0.2, {width: '19.6%'});
      TweenMax.to($('#navigation .main-menu'), 0.2, {width: '79.5%'});
    } else {
      // Expand.
      $('#navigation').css('width', '100%');
      TweenMax.to($('#sidebar'), 0.2, {width: '25%'});
      TweenMax.to($('main.container'), 0.2, {width: '75%'});
      TweenMax.to($('#navigation #menuToggle'), 0.2, {width: '10%'});
      TweenMax.to($('#navigation .main-menu'), 0.2, {width: '89.5%'});
      TweenMax.to($('#navigation ul.main-menu li span'), 0, {delay: 0.2, display: 'inline'});
    }
  },
  revealPage: function() {
    TweenMax.to($('main.container .content'), .4, {opacity: 1});
  },
  changeImage: function(id, i) {
    TweenMax.to('.portfolio-' + id + ' ul.images', 1, {x:250*i*(-1), force3D:true});
  }
}