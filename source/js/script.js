let navToggle = document.querySelector('.main-navigation__toggle');
let navMain = document.querySelector('.main-navigation__container');

navToggle.classList.remove('toggle--opened');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navToggle.classList.add('toggle--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navToggle.classList.remove('toggle--opened');
  }
});
