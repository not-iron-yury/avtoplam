"use strict";

/*----------------------menu----------------------*/
var burger = document.querySelector('.burger');
var overlay = document.querySelector('.overlay');
var navItems = document.querySelector('.nav__items');
var navLinkDrop = document.querySelector('.nav__link--drop');
var mobileBack = document.querySelector('.mobile-back');
var navDropdown = document.querySelector('.nav__dropdown');

/*-------------lockScroll-------------*/

var lockScroll = function lockScroll() {
  document.body.classList.add('lock');
};
var unlockScroll = function unlockScroll() {
  document.body.classList.remove('lock');
};

/*------------/lockScroll-------------*/

var removeAll = function removeAll() {
  burger.classList.remove('burger--active');
  navItems.classList.remove('nav__items--open');
  overlay.classList.remove('overlay--open');
  unlockScroll();
  navDropdown.classList.remove('nav__dropdown--open');
};
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  navItems.classList.toggle('nav__items--open');
  overlay.classList.toggle('overlay--open');
  document.body.classList.toggle('lock');
  navDropdown.classList.remove('nav__dropdown--open');
});
navLinkDrop.addEventListener('click', function () {
  navDropdown.classList.toggle('nav__dropdown--open');
});
mobileBack.addEventListener('click', function () {
  navDropdown.classList.remove('nav__dropdown--open');
});
overlay.addEventListener('click', function () {
  removeAll();
});
document.addEventListener('keydown', function (event) {
  var key = event.key; // const {key} = event; in ES6+
  if (key === "Escape") {
    removeAll();
  }
});

/*----------------------video----------------------*/
var videos = document.querySelectorAll('.video');

// generate video url
var generateUrl = function generateUrl(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
var createIframe = function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('width', '350px');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', generateUrl(id));
  return iframe;
};

// main code
videos.forEach(function (el) {
  var videoId = el.getAttribute('data-video');
  var youtubeImgSrc = 'https://i.ytimg.com/vi_webp/' + videoId + '/hqdefault.webp';
  var img = el.querySelector('img');
  img.setAttribute('src', youtubeImgSrc);
  el.addEventListener('click', function (e) {
    e.preventDefault();
    var iframe = createIframe(videoId);
    el.querySelector('img').remove();
    el.appendChild(iframe);
    el.querySelector('button').remove();
  });
});