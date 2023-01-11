$(function(){
  //banner part slider
  $('.banner-slide').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    autoplay: true,
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false,
    
  });
  $('.review-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    pauseOnFocus:false,
    arrows:true,
    prevArrow:".left",
    nextArrow:".right", 
    centerMode:true,
    centerPadding: "0px", 
    responsive: [
      {
          breakpoint: 999,
          settings: "slick"
      },
      {
          breakpoint: 576,
           settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  autoplay:false,
                  dots: true,
                  rows:0,
                  vertical:true,
                  centerPadding: "0px",
              }
      }
  ]
  });
  $('.counter').counterUp(
    {
        delay: 10,
        time: 3000
    }
  ); 
})
 