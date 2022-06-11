"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    lazyLoad: true,
    lazyContent: true,
    autoplayHoverPause: true,
    animateIn: true,
    callbacks: true,
    fallbackEasing: true,
    nav:false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: true
      }
    }
  }); // start AOS Animation

  AOS.init();
});