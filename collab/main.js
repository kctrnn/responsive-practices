window.addEventListener('load', () => {
  const navToggle = document.querySelector('.navbar__toggle');
  const mobileNavBarToggle = document.querySelector('.mobile-navbar__toggle');

  navToggle?.addEventListener('click', () => {
    const mobileNavbar = document.querySelector('.mobile-navbar');

    mobileNavbar.classList.add('show');
  });

  mobileNavBarToggle?.addEventListener('click', () => {
    const mobileNavbar = document.querySelector('.mobile-navbar');

    mobileNavbar.classList.remove('show');
  });
});
