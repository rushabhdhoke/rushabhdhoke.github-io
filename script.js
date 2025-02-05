// ------------------
// Scroll Controller
// ------------------
let isScrolling = false;
let lastScrollY = window.scrollY;

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function handleScroll() {
  if (isScrolling) return;

  const sections = Array.from(document.querySelectorAll('.section'));
  const scrollDirection = window.scrollY > lastScrollY ? 'down' : 'up';
  lastScrollY = window.scrollY;

  const currentSection = sections.find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  });

  if (!currentSection) return;

  const targetSection = scrollDirection === 'down' 
    ? currentSection.nextElementSibling 
    : currentSection.previousElementSibling;

  if (targetSection && targetSection.classList.contains('section')) {
    isScrolling = true;
    targetSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => (isScrolling = false), 1000);
  }
}

window.addEventListener('scroll', throttle(handleScroll, 100));

// ------------------
// Modal Controller
// ------------------
const modalController = {
  open: (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex';
  },
  close: (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
  }
};

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modalController.close(modal.id);
  });
});

// ------------------
// Text Animation
// ------------------
const textAnimator = {
  init: () => {
    this.dynamicText = document.getElementById('dynamic-text');
    this.expertise = [
      "Mechatronics Engineer",
      "Robotics Engineer",
      "AI/ML Enthusiast",
      "Innovator"
    ];
    this.index = 0;
    setTimeout(textAnimator.startAnimation, 2000);
  },
  startAnimation: () => {
    textAnimator.dynamicText.textContent = textAnimator.expertise[0];
    setInterval(textAnimator.updateText, 3000);
  },
  updateText: () => {
    textAnimator.index = (textAnimator.index + 1) % textAnimator.expertise.length;
    textAnimator.dynamicText.textContent = textAnimator.expertise[textAnimator.index];
  }
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  textAnimator.init();
});
