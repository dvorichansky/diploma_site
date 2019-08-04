// menu fixed
function menuFixedAnimate() {
  window.onscroll = function () { myFunction() };

  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  }
}

menuFixedAnimate();

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


// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20;

anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

    // запускаем интервал, в котором
    let scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});



(function () {
  const menuTrigger = document.querySelector('.menu-trigger');
  menuTrigger.addEventListener('click', function(){
    menuTrigger.classList.toggle('menu-trigger-open');
    document.querySelector('.menu-box').classList.toggle('menu-box-open');
  });
})();

(function () {
  const search = document.getElementById('search');
  search.addEventListener('click', function(){
    search.classList.toggle('ico-close');
    document.querySelector('.search-wrapper').classList.toggle('search-wrapper-open');
  });
})();



