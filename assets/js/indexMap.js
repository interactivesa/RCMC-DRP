$(document).ready(function () {
  // Navigation links hover
  $(".navigation-links a").on("click", function () {
    $(".navigation-links a").removeClass("active")
    $(this).addClass("active");
    $('.map-bg > div').addClass("d-none");
    $('.tags-content > div').addClass("d-none")
    
    // kadwa
    if( $("#kadwa-link").hasClass("active")){
      console.log("kadwa");
      $('.map-bg > div.kadwa-bg').removeClass("d-none");
      $('.tags-content .kadwa-content').removeClass("d-none")

      $('.map-bg > div.kadwa-bg').addClass("d-block");
      $('.tags-content .kadwa-content').addClass("d-block")
    }

    // nakasa
    else if( $("#nakasa-link").hasClass("active")){
      console.log("nakasa");
      $('.map-bg > div.nakasa-bg').removeClass("d-none");
      $('.tags-content .nakasa-content').removeClass("d-none")

      $('.map-bg > div.nakasa-bg').addClass("d-block");
      $('.tags-content .nakasa-content').addClass("d-block")
    }

     // sharashef
     else if( $("#sharashef-link").hasClass("active")){
      console.log("sharashef");
      $('.map-bg > div.sharashef-bg').removeClass("d-none");
      $('.tags-content .sharashef-content').removeClass("d-none")

      $('.map-bg > div.sharashef-bg').addClass("d-block");
      $('.tags-content .sharashef-content').addClass("d-block")

    }

      // azeezia
      else if( $("#azeezia-link").hasClass("active")){
      console.log("azeezia");
      $('.map-bg > div.azeezia-bg').removeClass("d-none");
      $('.tags-content .azeezia-content').removeClass("d-none")

      $('.map-bg > div.azeezia-bg').addClass("d-block");
      $('.tags-content .azeezia-content').addClass("d-block")
      }

       // zohor
       else if( $("#zohor-link").hasClass("active")){
        console.log("zohor");
        $('.map-bg > div.zohor-bg').removeClass("d-none");
        $('.tags-content .zohor-content').removeClass("d-none")

        $('.map-bg > div.zohor-bg').addClass("d-block");
        $('.tags-content .zohor-content').addClass("d-block")
      }

      // saad
      else if( $("#saad-link").hasClass("active")){
        console.log("saad");
        $('.map-bg > div.saad-bg').removeClass("d-none");
        $('.tags-content .saad-content').removeClass("d-none")
  
        $('.map-bg > div.saad-bg').addClass("d-block");
        $('.tags-content .saad-content').addClass("d-block")
      }

       // masafy
       else if( $("#masafy-link").hasClass("active")){
        console.log("masafy");
        $('.map-bg > div.masafy-bg').removeClass("d-none");
        $('.tags-content .masafy-content').removeClass("d-none")
  
        $('.map-bg > div.masafy-bg').addClass("d-block");
        $('.tags-content .masafy-content').addClass("d-block")
      }

        // khaldia
        else if( $("#khaldia-link").hasClass("active")){
          console.log("khaldia");
          $('.map-bg > div.khaldia-bg').removeClass("d-none");
          $('.tags-content .khaldia-content').removeClass("d-none")

          $('.map-bg > div.khaldia-bg').addClass("d-block");
          $('.tags-content .khaldia-content').addClass("d-block")
        }

       

        // hendawiaEs
        else if( $("#hendawiaEs-link").hasClass("active")){
          console.log("hendawiaEs");
          $('.map-bg > div.hendawia-bg').removeClass("d-none");
          $('.tags-content .hendawiaEs-content').removeClass("d-none")

          $('.map-bg > div.hendawia-bg').addClass("d-block");
          $('.tags-content .hendawiaEs-content').addClass("d-block")
        }

         // hendawiaWes
         else if( $("#hendawiaWes-link").hasClass("active")){
          console.log("hendawiaWes");
          $('.map-bg > div.hendawia-bg').removeClass("d-none");
          $('.tags-content .hendawiaWes-content').removeClass("d-none")

          $('.map-bg > div.hendawia-bg').addClass("d-block");
          $('.tags-content .hendawiaWes-content').addClass("d-block")
        }

        // hendawiSo
        else if( $("#hendawiSo-link").hasClass("active")){
          console.log("hendawiSo");
          $('.map-bg > div.hendawia-bg').removeClass("d-none");
          $('.tags-content .hendawiaSo-content').removeClass("d-none")

          $('.map-bg > div.hendawia-bg').addClass("d-block");
          $('.tags-content .hendawiaSo-content').addClass("d-block")
        }

         // salamaSo
         else if( $("#salamaSo-link").hasClass("active")){
          console.log("salamaSo");
          $('.map-bg > div.salama-bg').removeClass("d-none");
          $('.tags-content .salamaSo-content').removeClass("d-none")

          $('.map-bg > div.salama-bg').addClass("d-block");
          $('.tags-content .salamaSo-content').addClass("d-block")
        }

         // salamaM
         else if( $("#salamaM-link").hasClass("active")){
          console.log("salamaM");
          $('.map-bg > div.salama-bg').removeClass("d-none");
          $('.tags-content .salamaM-content').removeClass("d-none")

          $('.map-bg > div.salama-bg').addClass("d-block");
          $('.tags-content .salamaM-content').addClass("d-block")
        }


         // salamaNo
         else if( $("#salamaNo-link").hasClass("active")){
          console.log("salamaNo");
          $('.map-bg > div.salama-bg').removeClass("d-none");
          $('.tags-content .salamaNo-content').removeClass("d-none")

          $('.map-bg > div.salama-bg').addClass("d-block");
          $('.tags-content .salamaNo-content').addClass("d-block")
        }


         // hagla
         else if( $("#hagla-link").hasClass("active")){
          console.log("hagla");
          $('.map-bg > div.hagla-bg').removeClass("d-none");
          $('.tags-content .hagla-content').removeClass("d-none")

          $('.map-bg > div.hagla-bg').addClass("d-block");
          $('.tags-content .hagla-content').addClass("d-block")
        }

        // eslam
        else if( $("#eslam-link").hasClass("active")){
          console.log("eslam");
          $('.map-bg > div.eslam-bg').removeClass("d-none");
          $('.tags-content .eslam-content').removeClass("d-none")

          $('.map-bg > div.eslam-bg').addClass("d-block");
          $('.tags-content .eslam-content').addClass("d-block")
        }

         // gemeza
         else if( $("#gemeza-link").hasClass("active")){
          console.log("gemeza");
          $('.map-bg > div.gemeza-bg').removeClass("d-none");
          $('.tags-content .gemeza-content').removeClass("d-none")

          $('.map-bg > div.gemeza-bg').addClass("d-block");
          $('.tags-content .gemeza-content').addClass("d-block")
        }

         // zahraa
         else if( $("#zahraa-link").hasClass("active")){
          console.log("zahraa");
          $('.map-bg > div.zahraa-bg').removeClass("d-none");
          $('.tags-content .zahraa-content').removeClass("d-none")

          $('.map-bg > div.zahraa-bg').addClass("d-block");
          $('.tags-content .zahraa-content').addClass("d-block")
        }

         // nozha
         else if( $("#nozha-link").hasClass("active")){
          console.log("nozha");
          $('.map-bg > div.nozha-bg').removeClass("d-none");
          $('.tags-content .nozha-content').removeClass("d-none")

          $('.map-bg > div.nozha-bg').addClass("d-block");
          $('.tags-content .nozha-content').addClass("d-block")
        }

         // sard
         else if( $("#sard-link").hasClass("active")){
          console.log("sard");
          $('.map-bg > div.sard-bg').removeClass("d-none");
          $('.tags-content .sard-content').removeClass("d-none")

          $('.map-bg > div.sard-bg').addClass("d-block");
          $('.tags-content .sard-content').addClass("d-block")
        }

         // galeelNo
         else if( $("#galeelNo-link").hasClass("active")){
          console.log("galeelNo");
          $('.map-bg > div.galeel-bg').removeClass("d-none");
          $('.tags-content .galeelNo-content').removeClass("d-none")

          $('.map-bg > div.galeel-bg').addClass("d-block");
          $('.tags-content .galeelNo-content').addClass("d-block")
        }

         // galeelSo
         else if( $("#galeelSo-link").hasClass("active")){
          console.log("galeelSo");
          $('.map-bg > div.galeel-bg').removeClass("d-none");
          $('.tags-content .galeelSo-content').removeClass("d-none")

          $('.map-bg > div.galeel-bg').addClass("d-block");
          $('.tags-content .galeelSo-content').addClass("d-block")
        }

         // galeelM
         else if( $("#galeelM-link").hasClass("active")){
          console.log("galeelM");
          $('.map-bg > div.galeel-bg').removeClass("d-none");
          $('.tags-content .galeelM-content').removeClass("d-none")

          $('.map-bg > div.galeel-bg').addClass("d-block");
          $('.tags-content .galeelM-content').addClass("d-block")
        }

         // taneem
         else if( $("#taneem-link").hasClass("active")){
          console.log("taneem");
          $('.map-bg > div.taneem-bg').removeClass("d-none");
          $('.tags-content .taneem-content').removeClass("d-none")

          $('.map-bg > div.taneem-bg').addClass("d-block");
          $('.tags-content .taneem-content').addClass("d-block")
        }

         // ekeshia
         else if( $("#ekeshia-link").hasClass("active")){
          console.log("ekeshia");
          $('.map-bg > div.ekeshia-bg').removeClass("d-none");
          $('.tags-content .ekeshia-content').removeClass("d-none")

          $('.map-bg > div.ekeshia-bg').addClass("d-block");
          $('.tags-content .ekeshia-content').addClass("d-block")
        }

         // safwa
         else if( $("#safwa-link").hasClass("active")){
          console.log("safwa");
          $('.map-bg > div.safwa-bg').removeClass("d-none");
          $('.tags-content .safwa-content').removeClass("d-none")

          $('.map-bg > div.safwa-bg').addClass("d-block");
          $('.tags-content .safwa-content').addClass("d-block")
        }





        // 
        // 
        // 

         // kadwa
    if( $("#kadwa-link2").hasClass("active")){
      console.log("kadwa");
      $('.map-bg > div.kadwa-bg').removeClass("d-none");
      $('.tags-content .kadwa-content').removeClass("d-none")

      $('.map-bg > div.kadwa-bg').addClass("d-block");
      $('.tags-content .kadwa-content').addClass("d-block")
    }

    // nakasa
    else if( $("#nakasa-link2").hasClass("active")){
      console.log("nakasa");
      $('.map-bg > div.nakasa-bg').removeClass("d-none");
      $('.tags-content .nakasa-content').removeClass("d-none")

      $('.map-bg > div.nakasa-bg').addClass("d-block");
      $('.tags-content .nakasa-content').addClass("d-block")
    }

     // sharashef
     else if( $("#sharashef-link2").hasClass("active")){
      console.log("sharashef");
      $('.map-bg > div.sharashef-bg').removeClass("d-none");
      $('.tags-content .sharashef-content').removeClass("d-none")

      $('.map-bg > div.sharashef-bg').addClass("d-block");
      $('.tags-content .sharashef-content').addClass("d-block")

    }

      // azeezia
      else if( $("#azeezia-link2").hasClass("active")){
      console.log("azeezia");
      $('.map-bg > div.azeezia-bg').removeClass("d-none");
      $('.tags-content .azeezia-content').removeClass("d-none")

      $('.map-bg > div.azeezia-bg').addClass("d-block");
      $('.tags-content .azeezia-content').addClass("d-block")
      }

       // zohor
       else if( $("#zohor-link2").hasClass("active")){
        console.log("zohor");
        $('.map-bg > div.zohor-bg').removeClass("d-none");
        $('.tags-content .zohor-content').removeClass("d-none")

        $('.map-bg > div.zohor-bg').addClass("d-block");
        $('.tags-content .zohor-content').addClass("d-block")
      }

      // saad
      else if( $("#saad-link2").hasClass("active")){
        console.log("saad");
        $('.map-bg > div.saad-bg').removeClass("d-none");
        $('.tags-content .saad-content').removeClass("d-none")
  
        $('.map-bg > div.saad-bg').addClass("d-block");
        $('.tags-content .saad-content').addClass("d-block")
      }

       // masafy
       else if( $("#masafy-link2").hasClass("active")){
        console.log("masafy");
        $('.map-bg > div.masafy-bg').removeClass("d-none");
        $('.tags-content .masafy-content').removeClass("d-none")
  
        $('.map-bg > div.masafy-bg').addClass("d-block");
        $('.tags-content .masafy-content').addClass("d-block")
      }

        // khaldia
        else if( $("#khaldia-link2").hasClass("active")){
          console.log("khaldia");
          $('.map-bg > div.khaldia-bg').removeClass("d-none");
          $('.tags-content .khaldia-content').removeClass("d-none")

          $('.map-bg > div.khaldia-bg').addClass("d-block");
          $('.tags-content .khaldia-content').addClass("d-block")
        }

        // hendawiaEs
        else if( $("#hendawiaEs-link2").hasClass("active")){
          console.log("hendawiaEs");
          $('.map-bg > div.hendawia-bg').removeClass("d-none");
          $('.tags-content .hendawiaEs-content').removeClass("d-none")

          $('.map-bg > div.hendawia-bg').addClass("d-block");
          $('.tags-content .hendawiaEs-content').addClass("d-block")
        }

         // hendawiaWes
         else if( $("#hendawiaWes-link2").hasClass("active")){
          console.log("hendawiaWes");
          $('.map-bg > div.hendawia-bg').removeClass("d-none");
          $('.tags-content .hendawiaWes-content').removeClass("d-none")

          $('.map-bg > div.hendawia-bg').addClass("d-block");
          $('.tags-content .hendawiaWes-content').addClass("d-block")
        }

        // hendawiSo
        else if( $("#hendawiSo-link2").hasClass("active")){
          console.log("hendawiSo");
          $('.map-bg > div.hendawia-bg').removeClass("d-none");
          $('.tags-content .hendawiaSo-content').removeClass("d-none")

          $('.map-bg > div.hendawia-bg').addClass("d-block");
          $('.tags-content .hendawiaSo-content').addClass("d-block")
        }

         // salamaSo
         else if( $("#salamaSo-link2").hasClass("active")){
          console.log("salamaSo");
          $('.map-bg > div.salama-bg').removeClass("d-none");
          $('.tags-content .salamaSo-content').removeClass("d-none")

          $('.map-bg > div.salama-bg').addClass("d-block");
          $('.tags-content .salamaSo-content').addClass("d-block")
        }

         // salamaM
         else if( $("#salamaM-link2").hasClass("active")){
          console.log("salamaM");
          $('.map-bg > div.salama-bg').removeClass("d-none");
          $('.tags-content .salamaM-content').removeClass("d-none")

          $('.map-bg > div.salama-bg').addClass("d-block");
          $('.tags-content .salamaM-content').addClass("d-block")
        }


         // salamaNo
         else if( $("#salamaNo-link2").hasClass("active")){
          console.log("salamaNo");
          $('.map-bg > div.salama-bg').removeClass("d-none");
          $('.tags-content .salamaNo-content').removeClass("d-none")

          $('.map-bg > div.salama-bg').addClass("d-block");
          $('.tags-content .salamaNo-content').addClass("d-block")
        }


         // hagla
         else if( $("#hagla-link2").hasClass("active")){
          console.log("hagla");
          $('.map-bg > div.hagla-bg').removeClass("d-none");
          $('.tags-content .hagla-content').removeClass("d-none")

          $('.map-bg > div.hagla-bg').addClass("d-block");
          $('.tags-content .hagla-content').addClass("d-block")
        }

        // eslam
        else if( $("#eslam-link2").hasClass("active")){
          console.log("eslam");
          $('.map-bg > div.eslam-bg').removeClass("d-none");
          $('.tags-content .eslam-content').removeClass("d-none")

          $('.map-bg > div.eslam-bg').addClass("d-block");
          $('.tags-content .eslam-content').addClass("d-block")
        }

         // gemeza
         else if( $("#gemeza-link2").hasClass("active")){
          console.log("gemeza");
          $('.map-bg > div.gemeza-bg').removeClass("d-none");
          $('.tags-content .gemeza-content').removeClass("d-none")

          $('.map-bg > div.gemeza-bg').addClass("d-block");
          $('.tags-content .gemeza-content').addClass("d-block")
        }

         // zahraa
         else if( $("#zahraa-link2").hasClass("active")){
          console.log("zahraa");
          $('.map-bg > div.zahraa-bg').removeClass("d-none");
          $('.tags-content .zahraa-content').removeClass("d-none")

          $('.map-bg > div.zahraa-bg').addClass("d-block");
          $('.tags-content .zahraa-content').addClass("d-block")
        }

         // nozha
         else if( $("#nozha-link2").hasClass("active")){
          console.log("nozha");
          $('.map-bg > div.nozha-bg').removeClass("d-none");
          $('.tags-content .nozha-content').removeClass("d-none")

          $('.map-bg > div.nozha-bg').addClass("d-block");
          $('.tags-content .nozha-content').addClass("d-block")
        }

         // sard
         else if( $("#sard-link2").hasClass("active")){
          console.log("sard");
          $('.map-bg > div.sard-bg').removeClass("d-none");
          $('.tags-content .sard-content').removeClass("d-none")

          $('.map-bg > div.sard-bg').addClass("d-block");
          $('.tags-content .sard-content').addClass("d-block")
        }

         // galeelNo
         else if( $("#galeelNo-link2").hasClass("active")){
          console.log("galeelNo");
          $('.map-bg > div.galeel-bg').removeClass("d-none");
          $('.tags-content .galeelNo-content').removeClass("d-none")

          $('.map-bg > div.galeel-bg').addClass("d-block");
          $('.tags-content .galeelNo-content').addClass("d-block")
        }

         // galeelSo
         else if( $("#galeelSo-link2").hasClass("active")){
          console.log("galeelSo");
          $('.map-bg > div.galeel-bg').removeClass("d-none");
          $('.tags-content .galeelSo-content').removeClass("d-none")

          $('.map-bg > div.galeel-bg').addClass("d-block");
          $('.tags-content .galeelSo-content').addClass("d-block")
        }

         // galeelM
         else if( $("#galeelM-link2").hasClass("active")){
          console.log("galeelM");
          $('.map-bg > div.galeel-bg').removeClass("d-none");
          $('.tags-content .galeelM-content').removeClass("d-none")

          $('.map-bg > div.galeel-bg').addClass("d-block");
          $('.tags-content .galeelM-content').addClass("d-block")
        }

         // taneem
         else if( $("#taneem-link2").hasClass("active")){
          console.log("taneem");
          $('.map-bg > div.taneem-bg').removeClass("d-none");
          $('.tags-content .taneem-content').removeClass("d-none")

          $('.map-bg > div.taneem-bg').addClass("d-block");
          $('.tags-content .taneem-content').addClass("d-block")
        }

         // ekeshia
         else if( $("#ekeshia-link2").hasClass("active")){
          console.log("ekeshia");
          $('.map-bg > div.ekeshia-bg').removeClass("d-none");
          $('.tags-content .ekeshia-content').removeClass("d-none")

          $('.map-bg > div.ekeshia-bg').addClass("d-block");
          $('.tags-content .ekeshia-content').addClass("d-block")
        }

         // safwa
         else if( $("#safwa-link2").hasClass("active")){
          console.log("safwa");
          $('.map-bg > div.safwa-bg').removeClass("d-none");
          $('.tags-content .safwa-content').removeClass("d-none")

          $('.map-bg > div.safwa-bg').addClass("d-block");
          $('.tags-content .safwa-content').addClass("d-block")
        }
  })


/* tabs click */

$(".map-cont .nav .nav-item button").on("click", function () {
  console.log('ccccc');
  $(".navigation-links a").removeClass("active")
  $('.map-bg > div').addClass("d-none");
  $('.tags-content > div').addClass("d-none")
  
    // removed-tab
    if( $("#all-tab").hasClass("active")){
      console.log("kadwa");
      $('.map-bg > div.kadwa-bg').removeClass("d-none");
      $('.tags-content .kadwa-content').removeClass("d-none")
  
      $('.navigation-links #kadwa-link2').addClass("active");
      $('.map-bg > div.kadwa-bg').addClass("d-block");
      $('.tags-content .kadwa-content').addClass("d-block")
    }

  // removed-tab
  if( $("#removed-tab").hasClass("active")){
    console.log("kadwa");
    $('.map-bg > div.kadwa-bg').removeClass("d-none");
    $('.tags-content .kadwa-content').removeClass("d-none")

    $('.navigation-links #kadwa-link').addClass("active");
    $('.map-bg > div.kadwa-bg').addClass("d-block");
    $('.tags-content .kadwa-content').addClass("d-block")
  }

  else if( $("#dev-tab").hasClass("active")){
    console.log("sharashef");
    $('.map-bg > div.sharashef-bg').removeClass("d-none");
    $('.tags-content .sharashef-content').removeClass("d-none")

    $('.navigation-links #sharashef-link').addClass("active");
    $('.map-bg > div.sharashef-bg').addClass("d-block");
    $('.tags-content .sharashef-content').addClass("d-block")
  }

  else if( $("#study-tab").hasClass("active")){
    console.log("saad");
    $('.map-bg > div.saad-bg').removeClass("d-none");
    $('.tags-content .saad-content').removeClass("d-none")

    $('.navigation-links #saad-link').addClass("active");
    $('.map-bg > div.saad-bg').addClass("d-block");
    $('.tags-content .saad-content').addClass("d-block")
  }

  else if( $("#loc-tab").hasClass("active")){
    console.log("tab4");
    $('.map-bg > div.tab4').removeClass("d-none");
    // $('.tags-content .sharashef-content').removeClass("d-none")

    // $('.navigation-links #sharashef-link').addClass("active");
    $('.map-bg > div.tab4').addClass("d-block");
    // $('.tags-content .sharashef-content').addClass("d-block")
  }

  else if( $("#studyTwo-tab").hasClass("active")){
    console.log("tab5");
    $('.map-bg > div.hendawia-bg').removeClass("d-none");
    $('.tags-content .hendawiaEs-content').removeClass("d-none")

    $('.navigation-links #hendawiaEs-link').addClass("active");
    $('.map-bg > div.hendawia-bg').addClass("d-block");
    $('.tags-content .hendawiaEs-content').addClass("d-block")
  }
})


});