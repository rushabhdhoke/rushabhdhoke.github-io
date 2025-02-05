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
