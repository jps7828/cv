// Display on scroll
whatsApp = document.querySelector("#whatsApp");
goToTop = document.querySelector("#goToTop");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        whatsApp.style.display = "block";
        goToTop.style.display = "block";
    } else {
        whatsApp.style.display = "none";
        goToTop.style.display = "none";
    }
};
window.addEventListener("scroll", myScrollFunc);
// Display on scroll



$(document).ready(function() {
	// Dark - Light mode code
	initTheme();

	function initTheme() {
		var darkThemeSelected =
			localStorage.getItem("darkSwitch") !== null &&
			localStorage.getItem("darkSwitch") === "dark";
		darkThemeSelected
			? document.body.setAttribute("data-theme", "dark")
			: document.body.setAttribute("data-theme", "light");
		darkThemeSelected
			? (document.getElementById("my-dark-theme").style.display = "none")
			: (document.getElementById("my-light-theme").style.display = "none");
	}

	document.getElementById("my-dark-theme").addEventListener("click", () => {
		document.body.setAttribute("data-theme", "dark");
		localStorage.setItem("darkSwitch", "dark");
		document.getElementById("my-light-theme").style.display = "block";
		document.getElementById("my-dark-theme").style.display = "none";
	});

	document.getElementById("my-light-theme").addEventListener("click", () => {
		document.body.setAttribute("data-theme", "light");
		localStorage.removeItem("darkSwitch");
		document.getElementById("my-light-theme").style.display = "none";
		document.getElementById("my-dark-theme").style.display = "block";
	});
});
// Dark - Light mode code

// OWL Carousel

$(document).ready(function(){
  $("#slider-carousel").owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false
        }
    }
   
  });


});


$(document).ready(function(){
  $("#three-carousel").owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:10
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            dots: true
        }
    }
   
  });


});



 $(document).ready(function(){
  $("#owl-one").owlCarousel({
    loop:true,
    margin:100,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
        }
    }
   
  });
});
