document.getElementById("my-dark-theme").addEventListener("click", () => {
  document.documentElement.style.setProperty("--my-bg-color", "#222");
  document.documentElement.style.setProperty("--my-btn-color", "#217dbb");
  document.getElementById("my-light-theme").style.display="block";
  document.getElementById("my-dark-theme").style.display="none";
});

document.getElementById("my-light-theme").addEventListener("click", () => {
  document.documentElement.style.setProperty("--my-bg-color", "#217dbb");
  document.documentElement.style.setProperty("--my-btn-color", "#6e5494");
  document.getElementById("my-light-theme").style.display="none";
  document.getElementById("my-dark-theme").style.display="block";
});



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
