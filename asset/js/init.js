
 jQuery(document).ready(function($) {
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 9000,
      animationSpeed: 600,
      randomize: false
   });
});