( function ($) {
  "use strict";
  //preloader
  $(window).load(function(){
    $('.preloader').fadeOut(1500); // set duration in brackets    
  });

  //Back to top button
  $(document).ready(function(){   
    //to check scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn(200);
        } else {
            $('.back-to-top').fadeOut(200);
        }
    });		
    // Animate the scroll to top
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 2000);
    })
      
    
});

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

   // jQuery counterUp (used in Whu Us section)
   $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000

  
  })

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


  //one page nanigation
  /*
  $('.main-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
    
  });
  /*
  $('.main-nav a').on('click', function(e){
      if(this.hash !== ''){
          e.preventDefault();
          const hash = this.hash;
          $('html, body').animate(
              {
                  scrollTop: $(hash).offset().top
              },
              1000
          );
      }

  });
  $('#intro a').on('click', function(e){
    if(this.hash !== ''){
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate(

        {
          scrollTop: $(hash).offset().top
        },
        1000
      );
    }
  });
  $('#header a').on('click', function(e){
    if(this.hash !== ''){
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate(

        {
          scrollTop: $(hash).offset().top
        },
        1000
      );
    }
  });
  /**/


  

  
  
  
  

 

})(jQuery);
