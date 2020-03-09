$(document).ready(function($){
	"use strict";
    
	// WOW Js Active
	new WOW().init();
    
    // Check the initial Poistion of the Sticky Header
	$(window).scroll(function(){
	    if( $(window).scrollTop() > 60 ) {
	        $('#stickyheader').css('padding','20px');
            $('#stickyheader').css('opacity','0');
            $('#stickyheader').css('visibility','hidden');
            if ( $(window).scrollTop() > 200 ) {
                $('#stickyheader').addClass('fix-top');
                $('.slicknav_menu').css('top','20px');
                $('.slicknav_nav').css('top','60px');
                $('#stickyheader').css('padding','8px 0');
                $('#stickyheader').css('opacity','1');
                $('#stickyheader').css('visibility','visible');
            }
	    } else {
	        $('#stickyheader').removeClass('fix-top');
            $('.slicknav_menu').css('top','14px');
            $('.slicknav_nav').css('top','64px');
            $('#stickyheader').css('opacity','1');
            $('#stickyheader').css('padding','8px 0');
            $('#stickyheader').css('visibility','visible');
	    }
	});
    // Check the initial Poistion of the Sticky Header-2
	$(window).scroll(function(){
	    if( $(window).scrollTop() > 60 ) {
	        $('#stickyheader_2').css('padding','20px');
            $('#stickyheader_2').css('opacity','0');
            $('#stickyheader_2').css('visibility','hidden');
            if ( $(window).scrollTop() > 200 ) {
                $('#stickyheader_2').addClass('fix-top_2');
                $('.slicknav_menu').css('top','20px');
                $('.slicknav_nav').css('top','60px');
                $('#stickyheader_2').css('padding','8px 0');
                $('#stickyheader_2').css('opacity','1');
                $('#stickyheader_2').css('visibility','visible');
            }
	    } else {
	        $('#stickyheader_2').removeClass('fix-top_2');
            $('.slicknav_menu').css('top','14px');
            $('.slicknav_nav').css('top','64px');
            $('#stickyheader_2').css('opacity','1');
            $('#stickyheader_2').css('padding','8px 0');
            $('#stickyheader_2').css('visibility','visible');
	    }
	});

    //Nav menu active class change
    var lastId
        , topMenu = $(".menu")
        , topMenuHeight = topMenu.outerHeight() + 15
        ,menuItems = topMenu.find("a")
        ,scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind to scroll
    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop) return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

    // Mobile Menu
    $('#menu').slicknav({
        label: '',
    });

    // ScrollToTop
    function scrollToTop($topClass){   
        var top_0 = {scrollTop:0};
        var topClass = $($topClass);
        topClass.on("click" , function(e){
            $("html,body").animate(top_0,1000);
            return false;
        });
        $(window).scroll(function(){
            if($(this).scrollTop() > 400) {
                topClass.fadeIn(500);
            }
            else {
                topClass.fadeOut(500);
            }
        });
    }
    scrollToTop('.scrolltotop a');

    $('body').addClass('preloader-active'); 
    $(window).on('load', function() { 
        $('.preloader').fadeOut();
        $('.preloader-spinner').delay(350).fadeOut('slow');
        $('body').removeClass('preloader-active');
    });

    // Smooth Scroll
    $('#menu a[href*="#"]:not([href="#"])').on("click" , function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
            }
        }
    });
  
	$('#demo-scroll a[href*="#"]:not([href="#"])').on("click" , function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
            }
        }
    });

    // Testiimonal
    $('.testimonial-owl-carousel').owlCarousel({
        loop:true,
        items:1,
        margin:20,
        dots:true,
        nav:false,
        autoplay: true,
    });
    $( ".owl-prev").html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
    $( ".owl-next").html('<i class="fa fa-angle-right" aria-hidden="true"></i>');

	 // Screenshot
   
    $('.owl-carousel-team').owlCarousel({
        loop:true,
        items:4,
        margin:20,
        dots:true,
        nav:false,
        autoplay: true,    
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
	// Screenshort Carousel
	$('.screenshort-carousel').owlCarousel({
        loop:true,
        items:3,
        margin:20,
        dots:true,
        nav:false,
        autoplay: true,  
		loop:true,		
        responsiveClass:true,
        responsive:{
            0:{
                items:1, 
            },
            600:{
                items:2, 
            },
            1000:{
                items:3,  
            }
        }
    });


    function app_popup(){
        $('.download-box').hide();
        if ( $('.download-box').hide() ) {
            $('.app-download').on('click',function(){
                $('.download-box').fadeIn();

                return false;
            });
        }
        $('.popup-hide').on('click',function(){
            $('.download-box').fadeOut();

            return false;
        });
    }
    app_popup();


    // Video Area
    $('.main-vedio').magnificPopup({
        type: 'iframe',

        iframe: {
            patterns: {
              vimeo: {

                index: 'vimeo.com',

                id:'https://vimeo.com/54298665',

                src: 'https://player.vimeo.com/video/131298876'

              }
            }
        }
    });
	
 	// Canvas Menu 
	$(".menu-trigger").on("click", function(){
		$(".off-canvas-menu ").addClass("active");
		return false;
	}) ;
	$(".menu-close").on("click", function(){
		$(".off-canvas-menu").removeClass("active"); 
	}) ; 
	
	


}(jQuery));

