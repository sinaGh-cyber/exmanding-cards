const panels = document.querySelectorAll('.panel');
// panels.forEach(panel => {

// });
const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
  if ((event.target.classList.contains = 'panel')) {
    removeActiveClasses();
    event.target.classList.add(`active`);
  }
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
