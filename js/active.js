(function ($) {
    'use strict';

    // collapse mobile menu
    $(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
    });

    // Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

   // SmoothScroll
    $('a[href*="#"]')
   // Remove links that don't actually link to anything
  .not('[href="#"]')
   // Remove links action not required
  .not('[href="#0"]')
  .not('[href="#nav"]')
  .not('[href="#carouselOne"]')
  .not('[href="#carouselTwo"]')
  .not('[href="#carouselThree"]')
  .not('[href="#carouselFour"]')
  .not('[href="#carouselFive"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    // Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn,.vid_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.yellowstone-springs').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.bigsprings').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.fintail').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.tarryall').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.riverwhy').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.steelcreek').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.summit').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.madison').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.jefferson').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.clover').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.littlewood').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.teton').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.trails').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.basin').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.preserve').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
        $('.gallery_img.cake').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
            callbacks: {
                open: function() {
                   jQuery('body').addClass('magnificpopupnoscroll');
                },
                close: function() {
                   jQuery('body').removeClass('magnificpopupnoscroll');
                }
            }
        });
    }

    // Touchswipe actions for magnific
    $("body").swipe({
            swipeRight: function(event, direction, distance, duration, fingerCount) {
                $(".mfp-arrow-left").magnificPopup("prev");
            },
            swipeLeft: function() {
                $(".mfp-arrow-right").magnificPopup("next");
            },
            threshold: 50
        });

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeOutSine',
            scrollText: '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>'
        });
    }

    // Masonary Gallery Active Code
    $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').imagesLoaded(function () {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').isotope({
            itemSelector: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item',
            percentPosition: true,
            filter: '.yellowstone-springs',
            masonry: {
                columnWidth: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item'
            }
        });
    });



    $(document).ready(function(){
                $("#service_details_1").on("show.bs.modal", function(e) {
                    var select = $(e.relatedTarget);
                    var link = select.data('creek-restoration-modal.html');
                    $(this).find(".modal-content").load('creek-restoration-modal.html'); 
                });
    });
    $(document).ready(function(){
                $("#service_details_2").on("show.bs.modal", function(e) {
                    var select = $(e.relatedTarget);
                    var link = select.data('river-restoration-modal.html');
                    $(this).find(".modal-content").load('river-restoration-modal.html'); 
                });
    });
    $(document).ready(function(){
                $("#service_details_3").on("show.bs.modal", function(e) {
                    var select = $(e.relatedTarget);
                    var link = select.data('pond-wetland-restoration-modal.html');
                    $(this).find(".modal-content").load('pond-wetland-restoration-modal.html'); 
                });
    });
    $(document).ready(function(){
                $("#service_details_4").on("show.bs.modal", function(e) {
                    var select = $(e.relatedTarget);
                    var link = select.data('agriculture-modal.html');
                    $(this).find(".modal-content").load('agriculture-modal.html'); 
                });
    });
    $(document).ready(function(){
                $("#service_details_5").on("show.bs.modal", function(e) {
                    var select = $(e.relatedTarget);
                    var link = select.data('structure-modal.html');
                    $(this).find(".modal-content").load('structure-modal.html'); 
                });
    });
    $(document).ready(function(){
                $("#service_details_6").on("show.bs.modal", function(e) {
                    var select = $(e.relatedTarget);
                    var link = select.data('reclamation-modal.html');
                    $(this).find(".modal-content").load('reclamation-modal.html'); 
                });
    });


    // :: 8.0 MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);


})(jQuery);
