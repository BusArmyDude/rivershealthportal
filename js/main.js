document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('main-nav'); // Target the whole nav container

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      // Toggle a class on the <nav> element
      mainNav.classList.toggle('nav-open');

      // Update ARIA attribute for accessibility
      const isExpanded = mainNav.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Optional: Close menu if a link inside is clicked
  const navLinksList = document.getElementById('nav-links-list');
  if (navLinksList && mainNav && navToggle) {
    navLinksList.addEventListener('click', (event) => {
       // Check if the clicked element is a link within the list
      if (event.target.tagName === 'A') {
          mainNav.classList.remove('nav-open');
          navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

});
