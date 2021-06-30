const panels = document.querySelectorAll('.panel');
// panels.forEach(panel => {

// });
const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
  if (event.target.className === 'panel') {
    removeActiveClasses();
    event.target.classList.add(`active`);
  } else {
    removeActiveClasses();
  }
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
