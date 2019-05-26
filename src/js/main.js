// partners carousel control
$(document).ready(function () {
  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 4,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 3
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
