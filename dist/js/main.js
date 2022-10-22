/* -------------------------------------------

Name: 		Quarty
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

$(function() {

  // active menu in startup
  const menu = document.querySelectorAll('.menu-item');

  menu.forEach(function(item) {
    const url = window.location.href.split("/").pop().split(".")[0];
    let page = url.charAt(0).toUpperCase() + url.slice(1);
    if (page == 'Index' || window.location.href.split("/").pop() == '' || window.location.href.split("/").pop() == '<empty string>') page = 'Home';

    if (item.textContent == page) item.classList.add('current-menu-item');
  });

  // Left Bar Menu
  $('.art-info-bar-btn').on('click', function() {
    $('.art-info-bar').toggleClass('art-active');
    $('.art-menu-bar-btn').toggleClass('art-disabled');
  });

  $('.art-menu-bar-btn').on('click', function() {
    $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
    $('.art-info-bar-btn').toggleClass('art-disabled');
  });

  $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function() {
    $('.art-content').toggleClass('art-active');
  });

  $('.art-curtain , .art-mobile-top-bar').on('click', function() {
    $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
  });

  $('.menu-item').on('click', function() {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('art-active');
    } else {
      $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
    }
  });

  function lang() {
    const currentLangElement = $('.art-active-lang');

    // hides all the other languages except the current language
    $(currentLangElement).siblings().each(function(index, sibling) {
      $('[lang="' + $(sibling).text() + '"]').hide();
    })

    $('[lang="' + $(currentLangElement).text() + '"]').show();    
  }

  $('.art-lang').click(function(e) {
    const currentLang = $('.art-active-lang').text();
    const target = e.currentTarget;

    // if the clicked language is the current language, return
    if (currentLang == target.textContent) 
      return; 

    // remove the active class from previous active language
    $(target).siblings().each(function(index, sibling) {
      sibling.classList.remove("art-active-lang");
    })

    // set the clicked language as active language
    target.classList.add("art-active-lang");

    // toggle the language
    $('[lang="NP"]').toggle();
    $('[lang="EN"]').toggle();

  })

  "use strict";

  $(document).ready(function() {
    lang();

    $('html').addClass('is-animating');
    anime({
      targets: '.art-preloader .art-preloader-content',
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: 'linear',
      complete: function(anim) {

      }
    });
    anime({
      targets: '.art-preloader',
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: 'linear',
      complete: function(anim) {
        $('.art-preloader').css('display', 'none');
        $('html').removeClass('is-animating');
      }
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(1);

  const cursor = document.querySelector('#cursor');
  const cursorRadius = Math.round(cursor.getBoundingClientRect().width / 1.2);

  const mouse = {
    x: 300,
    y: 300
  };
  const pos = {
    x: 0,
    y: 0
  };
  const ratio = 0.07;

  const draw = () => {
    pos.x += (mouse.x - cursorRadius - pos.x) * ratio;
    pos.y += (mouse.y - cursorRadius - pos.y) * ratio;
    cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
  };

  const update = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  window.addEventListener('mousemove', update, {
    capture: false,
    passive: true
  });

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  const options = {
    containers: ['#art-dynamic-content', '#art-dynamic-menu'],
    animateHistoryBrowsing: true,
    linkSelector: '.main-menu a:not([data-no-swup]), .art-anima-link:not([data-no-swup])',
    animationSelector: '[class="art-dynamic-content"]'
  };

  const swup = new Swup(options);

  Scrollbar.use(OverscrollPlugin);
  var scrollbar = Scrollbar.init(document.querySelector('#art-scroll-content'), {
    damping: 0.17,
    renderByPixel: true,
    continuousScrolling: true,
    plugins: {
      overscroll: {
        effect: 'bounce',
        damping: 0.15,
        maxOverscroll: 80
      },
      mobile: {
        speed: 0.2,
        alwaysShowTracks: false
      }
    },
  });

  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#art-scroll-info'), {
    damping: 0.17,
    renderByPixel: true,
    continuousScrolling: true,
    plugins: {
      overscroll: {
        effect: 'bounce',
        damping: 0.15,
        maxOverscroll: 80
      },
      mobile: {
        speed: 0.2,
        alwaysShowTracks: false
      }
    },
  });

  var fixedElem = document.getElementById('fixed');

  if ($(window).width() > 1200) {
    scrollbar.addListener(function(status) {
      var offset = status.offset;

      fixed.style.top = offset.y + 'px';
      fixed.style.left = offset.x + 'px';
    });
  }

  $(window).resize(function() {
    if ($(window).width() > 1200) {
      scrollbar.addListener(function(status) {
        var offset = status.offset;

        fixed.style.top = offset.y + 'px';
        fixed.style.left = offset.x + 'px';
      });
      $(fixedElem).css('position', 'relative')
    }
    if ($(window).width() < 1200) {
      scrollbar.addListener(function(status) {
        var offset = status.offset;

        fixed.style.top = offset.y + 'px';
        fixed.style.left = offset.x + 'px';
      });
      $(fixedElem).css('position', 'static')
    }
  });

  var swiper = new Swiper('.art-main-slider', {
    slidesPerView: 1,
    speed: 800,
    parallax: true,
    mousewheel: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-main-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.art-main-next',
      prevEl: '.art-main-prev',
    },
  });

  var swiper = new Swiper('.art-main-slider-onepage', {
    slidesPerView: 1,
    speed: 800,
    parallax: true,
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-main-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.art-main-next',
      prevEl: '.art-main-prev',
    },
  });

  var swiper = new Swiper('.art-testimonials-slider', {
    slidesPerView: 2,
    speed: 800,
    spaceBetween: 20,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-testi-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-testi-next',
      prevEl: '.art-testi-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
    },
  });

  // brands slider
  var swiper = new Swiper('.art-brands-slider', {
    slidesPerView: 4,
    speed: 6000,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });

  // latest works slider
  var swiper = new Swiper('.art-latest-works-slider', {
    slidesPerView: 2,
    speed: 800,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-latest-works-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-latest-works-next',
      prevEl: '.art-latest-works-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper('.art-pop-post-slider', {
    slidesPerView: 2,
    speed: 800,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pp-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-pp-next',
      prevEl: '.art-pp-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="diploma"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1000,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1000,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $('[data-fancybox="works"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1000,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $.fancybox.defaults.hash = false;

  // portfolio filter
  $('.art-filter a').on('click', function() {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-masonry-grid').isotope({
      filter: selector
    });
    return false;
  });

  $('.art-masonry-grid').isotope({
    filter: '*',
    itemSelector: '.art-masonry-grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.art-grid-sizer'
    }
  });

  $('.art-counter').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'linear',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  if ($(window).width() < 768) {
    $('.art-mobile-fix').attr("href", "#.");
  }

  $(".art-lock").on('click', function() {
    $('.art-map').toggleClass('art-active');
    $('.art-lock').toggleClass('art-active');
    $('.art-lock .fas').toggleClass('fa-unlock');
  });

  $(".art-menu nav ul li a").on('click', function() {
    if ($(this).hasClass("art-mobile-fix")) {
      $('.art-menu , .art-menu-btn').addClass('art-active');
    } else {
      $('.art-menu , .art-menu-btn').removeClass('art-active');
    }
  });

  $('.art-info-btn').on('click', function() {
    $('.art-info , .art-info-btn , .art-curtain').toggleClass('art-active');
    $('.art-menu , .art-menu-btn').removeClass('art-active');
    $('.art-search , .art-search-btn').removeClass('art-active');
  });

  $('.art-info-frame a').on('click', function() {
    $('.art-info , .art-info-btn , .art-curtain').removeClass('art-active');
  });

  $(document).on('click', function(e) {
    var el = '.art-info , .art-info-btn';
    if (jQuery(e.target).closest(el).length) return;
    $('.art-info , .art-info-btn , .art-curtain').removeClass('art-active');
  });

  $('.art-menu-btn').on('click', function() {
    $('.art-menu , .art-menu-btn').toggleClass('art-active');
    $('.art-info , .art-info-btn , .art-curtain').removeClass('art-active');
    $('.art-search , .art-search-btn').removeClass('art-active');
  });

  $(document).on('click', function(e) {
    var el = '.art-menu , .art-menu-btn, .main-menu';
    if (jQuery(e.target).closest(el).length) return;
    $('.art-menu, .art-menu-bar .art-menu-btn', '.main-menu').removeClass('art-active');
  });

  $('.art-search-btn').on('click', function() {
    $('.art-search , .art-search-btn').toggleClass('art-active');
    $('.art-menu , .art-menu-btn').removeClass('art-active');
    $('.art-info , .art-info-btn , .art-curtain').removeClass('art-active');
  });

  $(document).on('click', function(e) {
    var el = '.art-search , .art-search-btn';
    if (jQuery(e.target).closest(el).length) return;
    $('.art-search , .art-search-btn').removeClass('art-active');
  });

  $('.current-menu-item a').clone().prependTo('.art-current-page');

  anime({
    targets: '.art-follower',
    scale: 0,
  });

  $(".art-menu nav ul li a").mouseover(function() {
    anime({
      targets: '.art-follower',
      scale: 1,
      background: 'rgba(222,225,230,1)',
    });
  });
  $(".art-menu nav ul li a").mouseout(function() {
    anime({
      targets: '.art-follower',
      scale: 0,
      background: '#fff',
    });
  });

  $(".art-menu nav ul li ul li a").mouseover(function() {
    anime({
      targets: '.art-follower',
      scale: 1,
      background: '#fff',
    });
  });
  $(".art-menu nav ul li ul li a").mouseout(function() {
    anime({
      targets: '.art-follower',
      scale: 0,
      background: '#fff',
    });
  });

  $(".art-cursor-scale , .art-btn").mouseover(function() {
    anime({
      targets: '.art-follower',
      scale: 1,
    });
  });
  $(".art-cursor-scale , .art-btn").mouseout(function() {
    anime({
      targets: '.art-follower',
      scale: 0,
    });
  });

  $(".art-cursor-color").mouseover(function() {
    anime({
      targets: '.art-follower',
      background: 'rgba(222,225,230,1)',
    });
  });
  $(".art-cursor-color").mouseout(function() {
    anime({
      targets: '.art-follower',
      background: '#fff',
    });
  });

  $('.art-input').keyup(function() {
    if ($(this).val()) {
      $(this).addClass('art-active');
    } else {
      $(this).removeClass('art-active');
    }
  });

  if ($("div").is("#map")) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rvc2NhciIsImEiOiJja2VpbDE4b2UwbDg3MnNwY2d3YzlvcDV5In0.e26tLedpKwxrkOmPkWhQlg';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/stoscar/ckggs77460wxw19ob8q5wldwf',
      center: [-79.394900, 43.643102],
      zoom: 14

    });

    var marker = new mapboxgl.Marker()
      .setLngLat([-79.394900, 43.643102])
      .addTo(map);
  }

  // reinit
  document.addEventListener("swup:contentReplaced", function() {
    const menu = document.querySelectorAll('.menu-item');

    menu.forEach(function(item) {
      const url = window.location.href.split("/").pop().split(".")[0];
      let page = url.charAt(0).toUpperCase() + url.slice(1);
      if (page == 'Index' || window.location.href.split("/").pop() == '' || window.location.href.split("/").pop() == '<empty string>') page = 'Home';

      if (item.textContent == page) item.classList.add('current-menu-item');
      console.log(page)
    });

    Scrollbar.use(OverscrollPlugin);
    var scrollbar = Scrollbar.init(document.querySelector('#art-scroll-content'), {
      damping: 0.17,
      renderByPixel: true,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: 'bounce',
          damping: 0.15,
          maxOverscroll: 80
        },
        mobile: {
          speed: 0.2,
          alwaysShowTracks: false
        }
      },
    });

    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#art-scroll-info'), {
      damping: 0.17,
      renderByPixel: true,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: 'bounce',
          damping: 0.15,
          maxOverscroll: 80
        },
        mobile: {
          speed: 0.2,
          alwaysShowTracks: false
        }
      },
    });

    var fixedElem = document.getElementById('fixed');

    if ($(window).width() > 1200) {
      scrollbar.addListener(function(status) {
        var offset = status.offset;

        fixed.style.top = offset.y + 'px';
        fixed.style.left = offset.x + 'px';
      });
    }

    $(window).resize(function() {
      if ($(window).width() > 1200) {
        scrollbar.addListener(function(status) {
          var offset = status.offset;

          fixed.style.top = offset.y + 'px';
          fixed.style.left = offset.x + 'px';
        });
        $(fixedElem).css('position', 'relative')
      }
      if ($(window).width() < 1200) {
        scrollbar.addListener(function(status) {
          var offset = status.offset;

          fixed.style.top = offset.y + 'px';
          fixed.style.left = offset.x + 'px';
        });
        $(fixedElem).css('position', 'static')
      }
    });

    var swiper = new Swiper('.art-main-slider', {
      slidesPerView: 1,
      speed: 800,
      parallax: true,
      mousewheel: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      keyboard: true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: '.swiper-main-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.art-main-next',
        prevEl: '.art-main-prev',
      },
    });

    var swiper = new Swiper('.art-main-slider-onepage', {
      slidesPerView: 1,
      speed: 800,
      parallax: true,
      keyboard: true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: '.swiper-main-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.art-main-next',
        prevEl: '.art-main-prev',
      },
    });

    var swiper = new Swiper('.art-testimonials-slider', {
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 20,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: '.swiper-testi-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-testi-next',
        prevEl: '.art-testi-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
        },
      },
    });

    // brands slider
    var swiper = new Swiper('.art-brands-slider', {
      slidesPerView: 4,
      speed: 6000,
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 0,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    // latest works slider
    var swiper = new Swiper('.art-latest-works-slider', {
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-latest-works-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-latest-works-next',
        prevEl: '.art-latest-works-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
        },
      },
    });

    var swiper = new Swiper('.art-pop-post-slider', {
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pp-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-pp-next',
        prevEl: '.art-pp-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="diploma"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1000,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1000,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $('[data-fancybox="works"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1000,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $.fancybox.defaults.hash = false;

    $('.current-menu-item a').clone().prependTo('.art-current-page');

    // portfolio filter
    $('.art-filter a').on('click', function() {
      $('.art-filter .art-current').removeClass('art-current');
      $(this).addClass('art-current');

      var selector = $(this).data('filter');
      $('.art-masonry-grid').isotope({
        filter: selector
      });
      return false;
    });

    $('.art-masonry-grid').isotope({
      filter: '*',
      itemSelector: '.art-masonry-grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.art-grid-sizer'
      }
    });

    $('.art-counter').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    if ($(window).width() < 768) {
      $('.art-mobile-fix').attr("href", "#.");
    }

    $(".art-lock").on('click', function() {
      $('.art-map').toggleClass('art-active');
      $('.art-lock').toggleClass('art-active');
      $('.art-lock .fas').toggleClass('fa-unlock');
    });

    if ($("div").is("#map")) {
      mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rvc2NhciIsImEiOiJja2VpbDE4b2UwbDg3MnNwY2d3YzlvcDV5In0.e26tLedpKwxrkOmPkWhQlg';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/stoscar/ckggs77460wxw19ob8q5wldwf',
        center: [-79.394900, 43.643102],
        zoom: 14

      });

      var marker = new mapboxgl.Marker()
        .setLngLat([-79.394900, 43.643102])
        .addTo(map);
    }
  });
});
