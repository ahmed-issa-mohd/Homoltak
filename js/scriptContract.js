import translations from './translations.js';

const tabItems = document.querySelectorAll('.tab-item');
const serviceContent = document.querySelector('.service-content');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const privacLink = document.getElementById('privacLink');
const languageSelector = document.querySelector('select');
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let faBars = document.querySelector('.fa-bars');
let header = document.querySelector('header');
let body = document.getElementsByTagName('body')[0];
let homeImg = document.getElementById('homeImg');
// homeImg.style.transform = "scaleX(-1)";



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


menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    menu.classList.toggle('showMenue');
    faBars.classList.toggle('fa-xmark');
}

document.onclick = function (e) {
    if (
        !menuBtn.contains(e.target) &&
        !menu.contains(e.target) &&
        !header.contains(e.target)
    ) {
        faBars.classList.remove('fa-xmark');
        menu.classList.remove('showMenue');
    }
};

// change header

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        header.classList.add('change');
    } else {
        header.classList.remove('change');
    }
});

// Translations
languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    localStorage.setItem('lang', event.target.value);
    location.reload();
});
document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('lang') || 'ar';




    if (language == 'ar') {

        document.dir = 'rtl';
        body.style.fontFamily = '"Cairo", sans-serif';
        privacLink.href = 'PrivacyPolicyAr.pdf';
        document
            .getElementById('siteLanguage')
            .querySelector("[value = 'ar']").selected = 'true';
        homeImg.style.transform = "scaleX(-1)";

    } else {
        document.dir = 'ltr';
        homeImg.style.transform = "scaleX(1)";

        body.style.direction = "ltr";
        document
            .getElementById('siteLanguage')
            .querySelector("[value = 'en']").selected = 'true';
        body.style.fontFamily = "'Karla', sans-serif";
        privacLink.href = 'PrivacyPolicyEn.pdf';
    }
    setLanguage(language);

});
const setLanguage = (language) => {


    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationKey];
    });
    // document.dir = language === 'ar' ? 'rtl' : 'ltr'


};



