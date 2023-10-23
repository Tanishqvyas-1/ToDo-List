document.body.style.background = "#dafaf7";

const tasks = document.querySelectorAll('.task');
const details = document.querySelectorAll('.details');

tasks.forEach((task, index) => {
  task.addEventListener('click', () => {
    // Toggle the display of the details associated with the clicked task
    if (details[index].style.display === 'block') {
      details[index].style.display = 'none';
    } else {
      details[index].style.display = 'block';
      details[index].classList.add('animated');
    }
  });
});
