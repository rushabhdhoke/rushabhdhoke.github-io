// Auto-scroll to next section on scroll
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (isScrolling) return;

  const sections = document.querySelectorAll('.section');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      currentSection = section.id;
    }
  });

  const nextSection = document.querySelector(`#${currentSection}`).nextElementSibling;
  if (nextSection && nextSection.classList.contains('section')) {
    isScrolling = true;
    nextSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Adjust timeout to match scroll duration
  }
});

// Modal Functions
function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'flex';
}
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'none';
} 

// Close modal on clicking outside content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


