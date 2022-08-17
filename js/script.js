

// init Isotope
var $grid = $('.gellary-protfolio').isotope({
  // options
});
// filter items on button click
$('.btn-gellary').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.btn-gellary li').click(function(){
  $(this).addClass('activeBtn').siblings().removeClass('activeBtn');

});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:6666,
  navText: ["PREV" , "NEXT"],
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

 new WOW().init();
          






