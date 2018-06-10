  jQuery(document).ready(function($) {

        var headerTopHeight = $("#header-top").outerHeight(),
        navItemHeight =  $("#main-navigation ul.menu li a").outerHeight(),
        navHeight =  $("#main-navigation").outerHeight(),
        toolbarHeight =  $("#toolbar").outerHeight(),
        headerHeight = $("#header").outerHeight();

        if ($("#toolbar").length>0) {
          var toolbarHeight =  $("#toolbar").outerHeight();
        } else {
          var toolbarHeight =  0;
        }

        // fix for Chrome
        if (navHeight > navItemHeight*2) {
          headerHeight = headerHeight - navItemHeight;
        };

        $(".logged-in .tabs.primary a, .logged-in .contextual-links a").click(function() {
          $("body").removeClass("onscroll");
          $("#header-container").css("paddingBottom", (0)+"px");
          $("#header, .offcanvas-trigger").css("top", (0)+"px");
        });

        $(window).load(function() {
          if(($(window).width() > 767)) {
            $("body").addClass("fixed-header-enabled");
          } else {
            $("body").removeClass("fixed-header-enabled");
          }
        });

        $(window).resize(function() {
          if(($(window).width() > 767)) {
            $("body").addClass("fixed-header-enabled");
          } else {
            $("body").removeClass("fixed-header-enabled");
          }
        });

        $(window).scroll(function() {
          if (!(($(".transparent-header-active").length>0) && ($("#banner #slideshow-fullwidth").length>0))) {
            if (($(this).scrollTop() > headerTopHeight+headerHeight) && ($(window).width() > 767)) {
              $("body").addClass("onscroll");
               $("#header-container").css("paddingBottom", (headerHeight)+"px");
               $("#header, .offcanvas-trigger").css("top", (toolbarHeight)+"px");
            } else {
              $("body").removeClass("onscroll");
              $("#header-container").css("paddingBottom", (0)+"px");
              $("#header, .offcanvas-trigger").css("top", (0)+"px");
            }
          } else {
            if (($(this).scrollTop() > headerTopHeight+headerHeight) && ($(window).width() > 767)) {
              $("body").addClass("onscroll");
               $("#header, .offcanvas-trigger").css("top", (toolbarHeight)+"px");
            } else {
              $("body").removeClass("onscroll");
              $("#header, .offcanvas-trigger").css("top", (0)+"px");
            }

          };
        });
      });
