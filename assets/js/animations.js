// Global animations namespace.
var Animations = Animations || {};
// Because after browserify action all js is wrapped in anonymous function,
// place animations object into window object, so it is available when needed.
window.Animations = Animations;

Animations.animate =  {
  menuExpand: function(navState) {
    if (navState == false) {
      TweenMax.to($('#navigation ul.main-menu li span'), 0, {display: 'none'});
      TweenMax.to($('#sidebar, #navigation'), 0.2, {width: '112px'});
      TweenMax.to($('main.container'), 0.2, {width: '1168px'});
      TweenMax.to($('#navigation #menuToggle'), 0.2, {width: '19.6%'});
      TweenMax.to($('#navigation .main-menu'), 0.2, {width: '79.5%'});
    } else {
      TweenMax.to($('#sidebar'), 0.2, {width: '25%'});
      TweenMax.to($('#navigation'), 0.2, {width: '20.601%'});
      TweenMax.to($('main.container'), 0.2, {width: '75%'});
      TweenMax.to($('#navigation #menuToggle'), 0.2, {width: '10%'});
      TweenMax.to($('#navigation .main-menu'), 0.2, {width: '89.5%'});
      TweenMax.to($('#navigation ul.main-menu li span'), 0, {delay: 0.2, display: 'inline'});
    }
  },
  revealPage: function() {
    TweenMax.to($('main.container .content'), .4, {opacity: 1});
  }
}