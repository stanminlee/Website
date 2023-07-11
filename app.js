document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      const targetId = link.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Find the target section
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the target section
      }
    });
});

// bhamla lab popup
function openE1() {
    e1.classList.add("open-e1");
}

function closeE1() {
    e1.classList.remove("open-e1");
}

// social chair popup
function openE2() {
    e2.classList.add("open-e2");
}

function closeE2() {
    e2.classList.remove("open-e2");
}

// project 1 popup
function openP1() {
    p1.classList.add("open-p1");
}

function closeP1() {
    p1.classList.remove("open-p1");
}

function openP2() {
    p2.classList.add("open-p2");
}

function closeP2() {
    p2.classList.remove("open-p2");
}