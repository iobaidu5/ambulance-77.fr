$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  
  $(document).ready(function () {
    var owl = $(".owl");
    owl.owlCarousel({
      items: 3,
      navigation: true,
      loop: true,
      rewind: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      dots: false,
      margin: 60,
      smartSpeed: 450,
      // animateIn: "fadeIn",
      // animateOut: "fadeOut",
      navText: [
        "<i class='fas fa-chevron-left nav-left'></i>",
        "<i class='fas fa-chevron-right nav-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        200: {
          items: 1,
          nav: true,
        },
        350: {
          items: 1,
          nav: true,
        },
        380: {
          items: 1,
          nav: true,
        },
        400: {
          items: 1,
          nav: true,
        },
        768: {
          items: 2,
          nav: true,
        },
        990: {
          items: 3,
          nav: true,
        },
        1200: {
          items: 3,
          nav: true
        },
        1600: {
          items: 3,
          nav: true
        },
  
      },
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [5000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  })


const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("navbar-active");
  } else {
    nav.classList.remove("navbar-active");
  }
}