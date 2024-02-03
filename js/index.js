"use strict";

var burger = document.querySelector(".burger"),
  menu = document.querySelector(".menu"),
  body = document.querySelector(".body"),
  overlay = document.querySelector(".overlay");
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--open');
  body.classList.toggle('lock');
  overlay.classList.toggle('overlay--active');
});
overlay.addEventListener('click', function () {
  burger.classList.remove('burger--active');
  menu.classList.remove('menu--open');
  body.classList.remove('lock');
  overlay.classList.remove('overlay--active');
});

/*============================================================*/
// хедер скрывается при скролле вниз, и появляется при скролле вверх.

var header = document.querySelector(".header");
if (body.clientWidth < 769) {
  var lastScroll = 0;
  var scrollPosition = function scrollPosition() {
    return document.documentElement.scrollTop;
  }; // текущая позиция скролла
  var containHide = function containHide() {
    return header.classList.contains('header--hide');
  }; // наличие класса header--hide у header (true/false)

  window.addEventListener('scroll', function () {
    if (scrollPosition() > lastScroll && !containHide()) {
      // scroll down
      header.classList.add('header--hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      // scroll up
      header.classList.remove('header--hide');
    }
    lastScroll = scrollPosition();
  });
}