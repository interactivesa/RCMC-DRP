
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      //    console.log(window.scrollY,window.scrollX)
      if (window.scrollY > 50) {
        document.querySelector(".main-topnav").classList.add("fixedTop");
        // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.querySelector(".main-topnav").classList.remove("fixedTop");
        // remove padding top from body
        // document.body.style.paddingTop = '0';
      }
    });


    window.addEventListener("scroll", function () {
      //    console.log(window.scrollY,window.scrollX)
      if (window.scrollY > 200) {
        document.querySelector(".topNav").classList.add("onScroll");
      } else {
        document.querySelector(".topNav").classList.remove("onScroll");
    
      }
    });
  });

$( document ).ready(function() {

    if($('.InHome').length ){
        $('.homeBanner').addClass('homeClass')
     }
    $(".navbar-light .dmenu").hover(
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
        },
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
        }
      );

    let arrow = [
        '<img src="../assets/images/shared/part-arrow-R.svg" />',
        '<img src="../assets/images/shared/part-arrow-L.svg" />',
      ]


    $('.owl-carousel-partners').owlCarousel({
        loop:false,
        margin:44,
        nav:true,
        dots:false,
        rtl: true,
        navText: arrow,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            // 600:{
            //     items:3
            // },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    })
    // end ready
    $('.owl-carousel-banner').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        rtl: true,
        items:1,
        dots:true,
        dotsContainer: '#custom-owl-dots',
    })

    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });








    // end ready






    // AOS.init({
    //     duration: 1000,
    // });



});

var owl =  $('.owl-carousel-banner');

// contrastMode
$(".top-functions .colors").on("click", function (e) {
    console.log("colors");
    $("html").toggleClass("contrast");
    e.stopPropagation();
   
  });


    /* --- Font sizing Function --- */
    $('.top-functions .increase').click(function(){
        console.log("increase");
        modifyFontSize('html','increase');
      });
      $('.top-functions .decrease').click(function(){
        console.log("dec");
        modifyFontSize('html','decrease')
      });

        /*----Font sizing Function ---*/
  function modifyFontSize(MyElement,flag){

    var HtmlElement = $(MyElement);
    var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
    if (flag =='increase' & currentFontSize < 19 )
        currentFontSize += 1;
    else if (flag == 'decrease' & currentFontSize >= 16 )
        currentFontSize -= 1;
    else if (flag == 'reset')
    currentFontSize = 16;

    HtmlElement.css('font-size', currentFontSize);

    // console.log(currentFontSize);

  }





  $(".topNav .slide-nav").on("click", function (e) {
    console.log("slideeeeeeeee");
    // $(".bannerBg").toggleClass("slide-me");
    $( ".bannerBg" ).fadeToggle( 300 , function() {
      // Animation complete
    });
    $(".slide-nav").toggleClass("slideActive");
    e.stopPropagation();
   
  });









  var scrollTo = function (sectionEl = "", callback = function () {}) {
    $("html, body").animate(
      {
        scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
      },
      500,
      "swing",
      callback()
    );
  };
  var calculateOffset = function (el) {
    if ($(el).length == 0) return;
    if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
    return Math.floor($(el).offset().top);
  };

  $(function () {


  // search func
  $(".search-toggle").on("click", function (e) {
    $(".search-box").fadeToggle("fast", function() {
    $(".search-box input").focus();
  });
      
  $(document).click(function(e) {
  if (!$(e.target).is('.searchbox, .searchbox *')) {
  $(".searchbox").hide();
  }
  });
  $('.closeSearch').click(function(e) {
  $(".searchbox").hide();
  $(".search-input").val("");
  });

    $(".search-box").toggleClass("open-search");

    e.stopPropagation(); 
  });

  $(document).click(function(e) {
    if (!$(e.target).is('.search-box input, .search-toggle*')) {
      $(".search-box").hide();
      $("body").removeClass("header-popup-open");
      $(".search-box").toggleClass("open-search");
      $(".search-box input").val("");
    }
  });



  // navigator

  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var navbar = $(".main-navbar");
    if ($(window).width() >= 992) {
      if (scroll > 140) {
        if (!navbar.hasClass("fixed")) {
          $("body").css({ "padding-top": navbar.height() + "px" });
          navbar.addClass("fixed");
        }
      } else {
        navbar.removeClass("fixed");
        $("body").css({ "padding-top": "0px" });
        $(".search-toggle").removeClass("d-none");
      }
    }



    /*
      navigator
    */

      if (scroll == 0) {
        $("ul.navigator li").removeClass("active");
        $("#sec1").addClass("active");
      } else $("#sec1").removeClass("active");
      
      if (scroll >= calculateOffset(".partners") - 200) {
        $("ul.navigator li").removeClass("active");
        $("#sec2").addClass("active");
      } else $("#sec2").removeClass("active");
  
      
      if (scroll >= calculateOffset(".map-area") - 200) {
        $("ul.navigator li").removeClass("active");
        $("#sec3").addClass("active");
      } else $("#sec3").removeClass("active");
  
      if (scroll >= calculateOffset(".motem") - 200) {
        $("ul.navigator li").removeClass("active");
        $("#sec4").addClass("active");
      } else $("#sec4").removeClass("active");
     
      if (scroll >= calculateOffset(".home-news") - 200) {
        $("ul.navigator li").removeClass("active");
        $("#sec5").addClass("active");
      } else $("#sec5").removeClass("active");
  
      // if (scroll >= calculateOffset(".faq") - 200) {
      //   $("ul.navigator li").removeClass("active");
      //   $("#sec6").addClass("active");
      // } else $("#sec6").removeClass("active");
  



  }); 



  
    // navigator clicks

    $("#sec1 a").on("click", function () {
      scrollTo(false, function () {
        $("ul.navigator li").removeClass("active");
        $("#sec1").addClass("active");
      });
    });
    $("#sec2 a").on("click", function () {
      scrollTo(".partners", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec2").addClass("active");
      });
    });
    
    $("#sec3 a").on("click", function () {
      scrollTo(".map-area", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec3").addClass("active");
      });
    });
    $("#sec4 a").on("click", function () {
      scrollTo(".motem", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec4").addClass("active");
      });
    });
    $("#sec5 a").on("click", function () {
      scrollTo(".home-news", function () {
        $("ul.navigator li").removeClass("active");
        $("#sec5").addClass("active");
      });
    });
    // $("#sec6 a").on("click", function () {
    //   scrollTo(".faq", function () {
    //     $("ul.navigator li").removeClass("active");
    //     $("#sec6").addClass("active");
    //   });
    // });

    

    $(".scroll-down").on("click", function () {
      scrollTo(".partners", function () {
       
      });
    });
   

  });









//   var owl =  $('.owl-carousel-banner');

// $(document).ready(function() {

//     $('.owl-carousel-banner').owlCarousel({
//         nav: false,
//         loop: false,
//         // rewind: true, // rewind to first slide
//         autoplay: false,
//         // autoplaySpeed: 5000,
//         // autoplayTimeout: 5000,
//         dotsSpeed: 400,
//         items: 1,
//         margin:0,
//         rtl: true,
//         dotsContainer: '#custom-owl-dots'
//     });
    
//     $('.owl-dot').click(function () {
//         owl.trigger('to.owl.carousel', [$(this).index(), 300]);
//     });

// });