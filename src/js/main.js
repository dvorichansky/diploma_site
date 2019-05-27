// carousel control
$(document).ready(function () {

  $('.sentence-slider').slick({
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.partners-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.top-slider').slick({
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000
  });

});


// this Year
(function () {
  const thisYear = new Date().getFullYear();

  const domThisYear = document.getElementById('thisYear');

  if (domThisYear) {
    domThisYear.innerHTML = `${thisYear}`;
  }
})();


// preloader
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader-wrapper');
    preloaderEl.classList.add('pre-hidden');
    preloaderEl.classList.remove('pre-visible');
  });

