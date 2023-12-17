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