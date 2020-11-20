// button

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Navbar */

// get the hamburger element
var hamburger = document.getElementById("hamburger");

// get the menu element
var menu = document.getElementById("menu");

// get the overlay element
var overlay = document.getElementById("overlay");
// define toggle function
function toggleMenu() {
  // either adds or removes active class from element
  if (window.innerWidth > 768) return false;
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}
// execute toggle function from hamburger on click
hamburger.addEventListener("click", toggleMenu);

// execute toggle function from menu on click
menu.addEventListener("click", toggleMenu);

// exuecute toggle function from overlay on click
overlay.addEventListener("click", toggleMenu);

/* Navbar */
