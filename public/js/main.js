
(function ($) {
  'use strict';
jQuery(document).ready(function($) {

    //scroll and active class adding
    var stellarnav = $('.stellarnav');
    
    stellarnav.stellarNav({
      theme: 'light',
      breakpoint: 960,
      position: 'right',

    });


    $('#scroll a[href*="#"], a.arrowup').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        1000,
        'linear'
      )
    })

    var play__btn = $('.play__btn');
    play__btn.modalVideo();


    var grids      = $('.grids');
    var clse__btn  = $('.clse__btn');
    var side__menu = $('.side__menu');

    grids.on('click', function(){
      side__menu.addClass('active')
    })
    clse__btn.on('click', function(){
       side__menu.removeClass('active')
    })

    var welcome__carousel = $('.welcome__carousel');
    var logos             = $('.logos');
    var services          = $('.services');
    var news__feeds       = $('.news__feeds');
    var team__mambers     = $('.team__mambers');
    var testimonial2      = $('.testimonial2');
    var portfolio1        = $('.portfolio1');

    logos.owlCarousel({

      loop:true,
      nav:false,
      dots:false,
      margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
    })

    welcome__carousel.owlCarousel({
      items:1,
      loop:true,
      nav:true,
      smartSpeed:1000,
      navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>'],
      onInitialized  : counter,
      onTranslated : counter 
    })


        //==welcome_area animation==\\
    welcome__carousel.on('translate.owl.carousel', function() {
        $('.welcome__carousel .title span').removeClass('fadeInDown animated').hide();
        $('.welcome__carousel .title h1').removeClass('fadeInDown animated').hide();
        $('.welcome__carousel .title p').removeClass('fadeInDown animated').hide();
        $('.welcome__carousel .btn__group').removeClass('fadeInDown animated').hide();
        $('.welcome__carousel .carousel').removeClass('fadeInRight animated').hide();
    });
    welcome__carousel.on('translated.owl.carousel', function() {
        $('.owl-item.active .title span').addClass('fadeInDown animated').show();
        $('.owl-item.active .title h1').addClass('fadeInDown animated').show();
        $('.owl-item.active .title p').addClass('fadeInDown animated').show();
        $('.owl-item.active .btn__group').addClass('fadeInDown animated').show();
        $('.owl-item.active .carousel').addClass('fadeInRight animated').show();
    });



     function counter(event) {
        var element   = event.target; 
        var items     = event.item.count;
        var item      = event.item.index + 1; 
      
      // it loop is true then reset counter from 1
      if(item > items) {
        item = item - items
      }
      welcome__carousel.find('.owl-nav').append('<div class="counter__owl__item"></div>');
      $('.counter__owl__item').html(item+" / "+items)
    }


    services.owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>'],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })


    news__feeds.owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>'],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })

    portfolio1.owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>'],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })

    testimonial2.owlCarousel({
      loop:true,
      margin:30,
      dots:true,
      nav:false,
      margin:30,
      items:1
    })

    team__mambers.owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>'],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })

    $('.one.circle').circleProgress({
        value: 0.6
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
    });

    $('.two.circle').circleProgress({
    value: 0.7
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    });

    $('.three.circle').circleProgress({
    value: 0.99
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(99 * progress) + '<i>%</i>');
    });

    $('.four.circle').circleProgress({
    value: 0.9
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });

   $('.slider-for').slick({
      slidesToShow: 1,
      loop:true,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      fade: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      slidesToShow: 3,
      loop:true,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true
    });

    //CURRENT CLASS SELECTOR
    var navbarAddCalss = $('.navclass');
    navbarAddCalss.onePageNav();

    //fixed nav bar active
    function fixed_nav() {
        window.onscroll = function () {
          myFunction()
        }

        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    };
    fixed_nav();

    new WOW().init();

 });

   //JQURY LOAD FUNCTION
  jQuery(window).on("load", function() {
      //PRELOADER

    function handlePreloader() {
        var preloader = $('.preloader');
        if(preloader.length){
        preloader.delay(200).fadeOut(500);
        }
    }
    handlePreloader();
    
  });


}(jQuery));


