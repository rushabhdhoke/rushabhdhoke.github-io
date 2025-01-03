// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animation with Fade
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  observer.observe(section);
});

// Modal Functions
function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'flex';

// Close modal on clicking outside content
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal(id);
    }
  });

  function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'none';
}

}

