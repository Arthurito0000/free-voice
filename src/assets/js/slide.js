document.addEventListener('DOMContentLoaded', function () {
  new Splide('#div-slider', {
    type   : 'loop',
    perPage: 1,
    snap: true,
    pagination: false, // Enable pagination
    arrows: true, // Disable default arrows
    
  }).mount();

});


// Initial setup

