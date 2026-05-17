// ==============================
// BUSGO SCRIPT.JS
// ==============================



// ==============================
// SMOOTH SCROLL NAVIGATION
// ==============================

document.querySelectorAll('.nav-link').forEach(link => {

    link.addEventListener('click', function (e) {
  
      const targetId = this.getAttribute('href');
  
      if (targetId.startsWith('#')) {
  
        e.preventDefault();
  
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
  
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
  
        }
  
      }
  
    });
  
  });
  
  
  
  // ==============================
  // ACTIVE NAVBAR LINK ON SCROLL
  // ==============================
  
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
  
    let current = '';
  
    sections.forEach(section => {
  
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
  
      if (pageYOffset >= sectionTop) {
  
        current = section.getAttribute('id');
  
      }
  
    });
  
    navLinks.forEach(link => {
  
      link.classList.remove('active');
  
      if (link.getAttribute('href') === `#${current}`) {
  
        link.classList.add('active');
  
      }
  
    });
  
  });
  
  
  
  // ==============================
  // NAVBAR BACKGROUND ON SCROLL
  // ==============================
  
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
  
    if (window.scrollY > 50) {
  
      navbar.classList.add('navbar-scrolled');
  
    } else {
  
      navbar.classList.remove('navbar-scrolled');
  
    }
  
  });
  
  
  
  // ==============================
  // SEARCH BUTTON INTERACTION
  // ==============================
  
  const searchButton = document.querySelector('.search-box .custom-btn');
  
  if (searchButton) {
  
    searchButton.addEventListener('click', () => {
  
      alert('Bus search functionality can be connected to backend later.');
  
    });
  
  }
  
  
  
  // ==============================
  // CONTACT FORM SUBMIT
  // ==============================
  
  const contactForm = document.querySelector('#contact form');
  
  if (contactForm) {
  
    contactForm.addEventListener('submit', function (e) {
  
      e.preventDefault();
  
      alert('Message sent successfully!');
  
      contactForm.reset();
  
    });
  
  }
  
  
  
  // ==============================
  // AUTO CLOSE MOBILE NAVBAR
  // ==============================
  
  const navItems = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navItems.forEach(item => {
  
    item.addEventListener('click', () => {
  
      if (navbarCollapse.classList.contains('show')) {
  
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
  
      }
  
    });
  
  });
  
  
  
  // ==============================
  // OFFER CAROUSEL AUTO SLIDE
  // ==============================
  
  const offerCarousel = document.querySelector('#offerCarousel');
  
  if (offerCarousel) {
  
    const carousel = new bootstrap.Carousel(offerCarousel, {
  
      interval: 4000,
      ride: 'carousel',
      pause: false,
      wrap: true
  
    });

    offerCarousel.addEventListener('mouseenter', () => {

        carousel.pause();
    
    });
    
    offerCarousel.addEventListener('mouseleave', () => {
    
        carousel.cycle();
    
    });
  
  }
  
  
  
  // ==============================
  // BUTTON HOVER MICRO INTERACTION
  // ==============================
  
  const buttons = document.querySelectorAll('.custom-btn');
  
  buttons.forEach(button => {
  
    button.addEventListener('mouseenter', () => {
  
      button.style.transform = 'translateY(-3px)';
  
    });
  
    button.addEventListener('mouseleave', () => {
  
      button.style.transform = 'translateY(0px)';
  
    });
  
  });
  
  
  
  // ==============================
  // SIMPLE FADE-IN ANIMATION
  // ==============================
  
  const fadeElements = document.querySelectorAll(
    '.offer-card, .route-card, .contact-card'
  );
  
  const observer = new IntersectionObserver(entries => {
  
    entries.forEach(entry => {
  
      if (entry.isIntersecting) {
  
        entry.target.classList.add('show');
  
      }
  
    });
  
  }, {
    threshold: 0.2
  });
  
  fadeElements.forEach(element => {
  
    observer.observe(element);
  
  });
  
  
  
  // ==============================
  // BACK TO TOP BUTTON
  // ==============================
  
  const backToTop = document.createElement('button');
  
  backToTop.innerHTML = '↑';
  
  backToTop.classList.add('back-to-top');
  
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', () => {
  
    if (window.scrollY > 500) {
  
      backToTop.classList.add('show-btn');
  
    } else {
  
      backToTop.classList.remove('show-btn');
  
    }
  
  });
  
  backToTop.addEventListener('click', () => {
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
  });
  
  
  
  // ==============================
  // PAGE LOADED ANIMATION
  // ==============================
  
  window.addEventListener('load', () => {
  
    document.body.classList.add('loaded');
  
  });