$(document).ready(function () {
    // Home Banner Slider
    $('.home-banner-slider').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $(".menu-bar").click(function () {
        $(".custom-navigation").slideToggle();
    });
    $('.contact-info-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
         // navText: ['<img src="assets/images/arrow2.svg">', '<img src="assets/images/arrow1.svg">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
   
});
  if ($(window).width() < 991) {
    $('.sub-menu-dropdown').click(function (e) {
      $(this).parent().find('.sub-menu').slideToggle();
      $(this).parent().siblings().children().next().slideUp();
      return false;
    });
  }