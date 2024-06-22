document.addEventListener('DOMContentLoaded', function () {
  new Splide('#div-slider', {
    type   : 'loop',
    perPage: 1,
    snap: true,
    pagination: false, // Enable pagination
    arrows: true, // Disable default arrows
    breakpoints: {
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
    },
  }).mount();

});


// Initial setup

