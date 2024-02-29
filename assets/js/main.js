// headline newsのSwiperの設定
const swiper = new Swiper("#headline-news .swiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  navigation: {
    nextEl: "#headline-news .swiper-button-next",
    prevEl: "#headline-news .swiper-button-prev",
  },
});

// cover imageのSwiperの設定
const coverSwiper = new Swiper("#cover .swiper", {
  loop: true,
  effect: "slide",
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  navigation: {
    nextEl: "#cover .swiper-button-next",
    prevEl: "#cover .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", //必須
  },
});

// hamburger-menuの動作
// ハンバーガーメニューのインスタンスを取得
let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0]
let spNav = document.getElementById("sp-nav")
// ハンバーガーメニューがクリックされたら
hamburgerMenu.addEventListener("click", (event) => {
  // ハンバーガーメニュー対してクラス【active】をON/OFFする
  hamburgerMenu.classList.toggle("active")
  // 現状がactiveなら
  if (spNav.classList.contains("active")) {
    spNav.classList.add("deactive");
    spNav.classList.remove("active");
  } else {
    spNav.classList.add("active");
    spNav.classList.remove("deactive");
  }
})

// hamburger-menuのうち、サブメニューの動作
let hamburgerSubMenus = document.querySelectorAll(".sp-menu01 .sub-menu")
hamburgerSubMenus.forEach((hamburgerSubMenu) => {
  hamburgerSubMenu.addEventListener("click", (event) => {
    hamburgerSubMenu.classList.toggle("active")
  })
})
