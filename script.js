const panels = document.querySelectorAll('.panel');

// Function to toggle the 'open' class on the panel when clicked (opens or closes it)
function toggleOpen() {
  this.classList.toggle('open');
}

// Function to toggle the 'open-active' class when the font-size transition ends
function toggleActive(event) {
  // Only trigger when the 'font-size' transition ends
  if (event.propertyName === 'font-size') {
    this.classList.toggle('open-active');
  }
}

// Add both event listeners in a single loop for optimization
panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);         // Click to open/close
  panel.addEventListener('transitionend', toggleActive); // Transition end to handle active state
});