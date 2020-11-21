// Get reference
var modals = document.querySelectorAll(".modal");
var triggers = document.querySelectorAll(".trigger");

// Open modal when trigger is clicked
function openModal(e) {
  var index = Array.from(triggers).indexOf(e.target);
  var modal = Array.from(modals)[index];
  modal.classList.add("active");
}

// Close modal when black overlay is clicked
function closeModal(e) {
  e.target.classList.remove("active");
}

// Wiring up
triggers.forEach((trigger) => {
  // You can iterate over a list of elements like this
  trigger.addEventListener("click", openModal);
});

modals.forEach((modal) => {
  modal.addEventListener("click", closeModal);
});

//* Fade in while Scrolling *//

// Configure the intersection observer
let options = {
  threshold: 0.5,
};

// Define function that runs whenever the user scrolls
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

// Make the intersection observer
let observer = new IntersectionObserver(callback, options);

// Grab the entries we want to observe
let targets = document.querySelectorAll("body > *");

// Tell the intersection observer to observe these entries
targets.forEach((target) => {
  observer.observe(target);
});
