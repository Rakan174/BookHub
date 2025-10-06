// BookHub Blog - Main JavaScript

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 20) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
});

// Lazy loading images
const images = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));

// Newsletter form submission
const newsletterForm = document.querySelector('form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      // Simulate successful submission
      alert(`Thank you for subscribing with ${email}! You'll receive our weekly newsletter.`);
      newsletterForm.reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Don't prevent default if it's just "#"
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation on scroll for elements
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(el => observer.observe(el));
};

// Call animation function when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
  animateOnScroll();
}

// Search functionality (basic implementation)
const searchButtons = document.querySelectorAll('[aria-label="Search"]');

searchButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const searchQuery = prompt('What are you looking for?');
    if (searchQuery && searchQuery.trim() !== '') {
      // In a real implementation, this would search the site
      alert(`Searching for: ${searchQuery}\n\nThis feature will be implemented in the full version.`);
    }
  });
});

// Add hover effect classes dynamically
const cards = document.querySelectorAll('.group');

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Performance optimization: Debounce scroll event
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handler
const optimizedScroll = debounce(() => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 20) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

window.addEventListener('scroll', optimizedScroll);

// Console message for developers
console.log('%cBookHub Blog', 'color: #fbbf24; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ for leaders and learners', 'color: #10b981; font-size: 14px;');
console.log('%cInterested in the code? Check out our GitHub!', 'color: #6366f1; font-size: 12px;');