// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@             PRELOADER             @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const preloader = document.querySelector('.preloader');
setTimeout(() => {
  preloader.classList.add('preloader-opacity');
}, 3000);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW & REMOVE MENU      @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navToggle = document.querySelector('.nav__toggle'),
  navClose = document.querySelector('.nav__close'),
  navMenu = document.querySelector('.nav__menu'),
  navLogo = document.querySelector('.nav__menu-logo'),
  overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
  overlay.classList.add('show-overlay');
  document.body.classList.add('remove-body-scroll');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

navLogo.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

overlay.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
  document.body.classList.remove('remove-body-scroll');
});

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
    document.body.classList.remove('remove-body-scroll');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@            SCROLL UP              @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const scrollUp = document.querySelector('.scrollup');

window.addEventListener('scroll', function () {
  if (this.scrollY > 100) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@      kunkalabs.com/mixitup/       @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let mixerProducts = mixitup('.products__container', {
  selectors: {
    target: '.products__card',
  },
  animation: {
    duration: 0,
  },
});

const productsFilters = document.querySelectorAll('.products__filter');

productsFilters.forEach((p) => {
  p.addEventListener('click', activeProducts);
});

function activeProducts() {
  productsFilters.forEach((p) => {
    p.classList.remove('active-products'),
      this.classList.add('active-products');
  });
}
