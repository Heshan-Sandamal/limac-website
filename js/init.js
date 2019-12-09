/*
 * Copyright (c) 2017 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";

	// here all ready functions
	
	//var H = jQuery( window ).height();
	//var W = jQuery( window ).width();
	
	albano_tm_hamburger();
	albano_tm_imgtosvg();
	albano_tm_flexslider();
	albano_tm_about_image();
	albano_tm_magnific_popup();
	albano_tm_jarallax();
	albano_tm_owl_carousel();
	albano_tm_portfolio();
	albano_tm_totop();
	albano_tm_totop_myhide();
	albano_tm_nav_bg_scroll();
	albano_tm_anchor();
	albano_tm_waypoint();
	albano_tm_contact_form();
	albano_tm_magnific_popup();
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		albano_tm_totop_myhide();
		albano_tm_nav_bg_scroll();
		
	});
	
	jQuery(window).on('resize',function(){
		 albano_tm_about_image();
		
	});
	
	jQuery(window).on('load', function(e) {
		e.preventDefault();
	});

});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function albano_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function albano_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.albano_tm_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------     MAIN FLEXSLIDER     --------------
// -----------------------------------------------------

function albano_tm_flexslider(){
	
	"use strict";
	
	var flexslider 			= jQuery('.albano_tm_universal_box_wrap .flexslider');
	
	flexslider.flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: true,
		slideshowSpeed: 5000,
		pauseOnAction: true,
		after: function(slider){
			if(!slider.playing){
				slider.play();
			}
		}
	});
}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.albano_tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// -----------------    ACCORDION    -------------------
// -----------------------------------------------------

jQuery(".albano_tm_accordion").friendslab_accordion({
	showIcon: false, //boolean	
	animation: true, //boolean
	closeAble: true, //boolean
	slideSpeed: 500 //integer, miliseconds
});
	
// -----------------------------------------------------
// -----------------    ABOUT PAGE    ------------------
// -----------------------------------------------------

function albano_tm_about_image(){
	
	"use strict";
	
	var maxHeight = Math.max.apply(null, jQuery(".albano_tm_accordion .acc_content").map(function (){
    	return $(this).outerHeight();
	}).get());
	var boxH	= jQuery('.albano_tm_about_wrap .right_box .inner').outerHeight();
	var extraH	= jQuery('.albano_tm_accordion .accordion_in.acc_active .acc_content').outerHeight();
	var aaaaaa	= boxH-extraH+maxHeight;
	var leftBox = jQuery('.albano_tm_about_wrap .left_box, .albano_tm_about_wrap');
	leftBox.css({minHeight: aaaaaa});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function albano_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.albano_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.albano_tm_bar_wrap');
		var pBar 			= progress.find('.albano_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.albano_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function albano_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function albano_tm_owl_carousel(){
	
	"use strict";
	
	var carusel2			= jQuery('.albano_tm_testimonial_wrap .owl-carousel');
  	carusel2.owlCarousel({
		loop:true,
		margin:0,
		autoplay:5000,
		autoWidth: false,
		nav: false,
		items:1,
		animateOut: 'zoomOut',
		animateIn: 'zoomIn',
		smartSpeed:450
	});
	
	var carusel3			= jQuery('.albano_tm_team_wrap .owl-carousel');
  	carusel3.owlCarousel({
		loop:true,
		margin:30,
		autoplay:5000,
		autoWidth: false,
		nav: false,
		items:3,
		responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:2},
			1024:{items:3}
		}
	});
	var carusel4			= jQuery('.albano_tm_partners_wrap .owl-carousel');
  	carusel4.owlCarousel({
		
		loop:true,
			items: 4,
			lazyLoad: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5050,
			smartSpeed: 5000,
			dots: false,
			nav: false,
			navSpeed: true,
			responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1024:{items:4}
		}
		
	});
	
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 
function albano_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.albano_tm_portfolio_list');
		var filter		 = jQuery('.albano_tm_portfolio_filter');

		var selector = jQuery(this).attr('data-filter');
		list.isotope({
			filter				: '.project-done',
			animationOptions	: {
				duration			: 750,
				easing				: 'linear',
				queue				: false
			}
		});

		if(filter.length){
			// Isotope Filter

			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});
		}
	}
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function albano_tm_totop(){
	
	"use strict";
	
	jQuery(".albano_tm_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}
function albano_tm_totop_myhide(){
	
	"use strict";
	
	var toTop		=jQuery(".albano_tm_totop");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1000){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function albano_tm_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.albano_tm_header');
	var windowScroll	= jQuery(window).scrollTop();
	var W				= jQuery(window).width();
	
	if(W>1040){
		jQuery(window).scroll(function(){
            if(windowScroll >= '100'){
                header.addClass('scroll');
            }
            else{
                header.removeClass('scroll');  
            }
        });
	} 
}

// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function albano_tm_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 0;
	
	jQuery(".anchor > a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-150 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// ----------------     WAYPOINT     -------------------
// -----------------------------------------------------

function albano_tm_waypoint(){
	
	"use strict";
	
	//var shortB			= jQuery('.albano_tm_section');
	//var child			= shortB.find('li');
	
	var listItem 		= jQuery('.albano_tm_attachment_consult_wrap ul.total');
	
	listItem.each(function(){

		var Item		= jQuery(this);
		var ItemLi		= Item.find('li');
		
		ItemLi.each(function(index){
			var www		= jQuery(this);
			www.waypoint({
			handler: function(){
				setTimeout(function(){
					www.addClass('animated');
					www.addClass('slideInUp');
					www.removeClass('hideforanimation');
				},index*100);
			},
			offset: '80%'
		});
		});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function albano_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function albano_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom ').each(function() { // the containers for all your galleries
		console.log(this)

		jQuery('.pagoda').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		jQuery('.negambo-sico').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		jQuery('.kutila-pinto').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		jQuery('.gdkwela-youghrt').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});


		jQuery('.malabe-sanasa').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		jQuery('.yala-holiday').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		jQuery('.lavender-pussellawa').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		jQuery('.kaluthara-lolc').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		jQuery('.meegalawa-temple').magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});

	// jQuery('.gallery_zoom .renovation').each(function() { // the containers for all your galleries
	// 	jQuery(this).magnificPopup({
	// 		delegate: 'a.zoom2', // the selector for gallery item
	// 		type: 'image',
	// 		gallery: {
	// 			enabled:true
	// 		},
	// 		removalDelay: 300,
	// 		mainClass: 'mfp-fade'
	// 	});
	//
	// });
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			type: 'iframe',
		});
	});

}