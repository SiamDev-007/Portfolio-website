
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  
  menuToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", function() {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 10) {
      navbar.classList.add("bg-white/90", "shadow-md", "backdrop-blur-sm");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-white/90", "shadow-md", "backdrop-blur-sm");
      navbar.classList.add("bg-transparent");
    }
  });
  
  // Scroll to top button
  const scrollTopButton = document.getElementById("scroll-top");
  scrollTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for your message! I'll get back to you soon.");
      contactForm.reset();
    });
  }
  
  // Animation on scroll
  function animateOnScroll() {
    // Hero section animation (immediate)
    setTimeout(() => {
      document.querySelector('.hero-content').classList.remove('opacity-0', 'translate-y-10');
      document.querySelector('.hero-image').classList.remove('opacity-0', 'translate-y-10');
    }, 100);
    
    // About section animation (on scroll)
    const aboutSection = document.getElementById('about');
    const aboutContent = document.querySelector('.about-content');
    const aboutSkills = document.querySelector('.about-skills');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
        rect.bottom >= 0
      );
    }
    
    // Function to animate skill bars
    function animateSkillBars() {
      if (isInViewport(aboutSection)) {
        const skillBars = document.querySelectorAll('.bg-gradient-to-r');
        skillBars.forEach(bar => {
          const width = bar.dataset.width + '%';
          bar.style.width = width;
        });
        
        // Remove about section animations once they've played
        aboutContent.classList.remove('opacity-0', 'translate-y-10');
        aboutSkills.classList.remove('opacity-0', 'translate-y-10');
        
        // Remove this scroll listener once animation has played
        window.removeEventListener('scroll', animateSkillBars);
      }
    }
    
    // Project cards animation
    function animateProjectCards() {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        if (isInViewport(card)) {
          setTimeout(() => {
            card.classList.remove('opacity-0', 'translate-y-10');
          }, parseInt(card.dataset.delay));
        }
      });
    }
    
    // Add scroll event listeners
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('scroll', animateProjectCards);
    
    // Trigger initial check in case elements are already in viewport on load
    animateSkillBars();
    animateProjectCards();
  }
  
  // Initialize animations
  animateOnScroll();
});
