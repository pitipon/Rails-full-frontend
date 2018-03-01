function initUpdateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar-wagon');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-white');
        document.querySelectorAll("a").forEach((a) => {
          a.classList.remove('navbar-wagon-link')
          a.classList.add('navbar-wagon-link2')
        });
      } else {
        navbar.classList.remove('navbar-wagon-white');
        document.querySelectorAll("a").forEach((a) => {
          a.classList.add('navbar-wagon-link')
          a.classList.remove('navbar-wagon-link2')
        });
      }
    });
  }

  
  export { initUpdateNavbarOnScroll };