"use strict"

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  const time = document.querySelector('.time')
  const social = document.querySelector('.social')
  const connection = document.querySelector('.connection')
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    time.classList.toggle('_active')
    social.classList.toggle('_active')
    connection.classList.toggle('_active')
  });
}