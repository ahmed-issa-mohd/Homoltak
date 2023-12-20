import translations from "./translations.js";

const tabItems = document.querySelectorAll('.tab-item');
const serviceContent = document.querySelector('.service-content');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removetabColor();
  removeShow();

  // Add tabColor to current tab item
  this.classList.add('tabColor');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
  serviceContent.classList.add('show');
}
// Remove bottom tabColor from all tab items
function removetabColor() {
  tabItems.forEach((item) => {
    item.classList.remove('tabColor');
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove('show');
  });
}

// Listen for tab item click
tabItems.forEach((item) => {
  item.addEventListener('click', selectItem);
});

// back To Top
//Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Toggle Menu

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let faBars = document.querySelector('.fa-bars');
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  menu.classList.toggle('showMenue');
  faBars.classList.toggle('fa-xmark')
}

document.onclick = function (e) {
  if (!menuBtn.contains(e.target) && !menu.contains(e.target) && !header.contains(e.target)) {
    faBars.classList.remove("fa-xmark");
    menu.classList.remove("showMenue");
  }
}


// change header 
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('change')
  } else {
    header.classList.remove('change')

  }
})

// Translations

const languageSelector = document.querySelector('select');

languageSelector.addEventListener('change', (event) => {
  setLanguage(event.target.value);
  localStorage.setItem('lang', event.target.value);
  location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
  const language = localStorage.getItem('lang') || 'en';
  setLanguage(language);
  $(document).ready(function () {
    if (language == 'ar') {
      $('.showcase-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
      });
      $('.app-text-slider').slick({
        arrows: false,
        speed: 400,
        dots: true,
        autoplay: 'true ',
        autoplaySpeed: 6000,
        rtl: true,
      });
    } else {
      $('.showcase-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        ltr: true,
      });
      $('.app-text-slider').slick({
        arrows: false,
        speed: 400,
        dots: true,
        autoplay: 'true ',
        autoplaySpeed: 6000,
        ltr: true,
      });
    }
  });
})

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute('data-i18n');
    element.textContent = translations[language][translationKey]
  });
  // document.dir = language === 'ar' ? 'rtl' : 'ltr'

  let body = document.getElementsByTagName('body')[0]
  if (language == 'ar') {
    document.dir = 'rtl';
    body.style.fontFamily = '"Cairo", sans-serif';
    document.getElementById('siteLanguage').querySelector("[value = 'ar']").selected = 'true';
  } else {
    document.dir = 'ltr';
    document.getElementById('siteLanguage').querySelector("[value = 'en']").selected = 'true';
    body.style.fontFamily = "'Karla', sans-serif";
  }
}

