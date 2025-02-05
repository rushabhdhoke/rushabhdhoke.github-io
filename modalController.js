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
