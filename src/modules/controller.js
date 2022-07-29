import { arrangeData } from './view.js';

const displayList = document.querySelector('.scores');

const displayScores = () => {
  displayList.innerHTML = '';
  arrangeData().then((result) => {
    const orderScores = result.result.sort((a, b) => b.score - a.score);
    orderScores.forEach((score) => {
      const li = document.createElement('li');
      li.innerHTML = `<li class = "score-item"> ${score.user}: ${score.score}</li>`;
      li.style.listStyle = 'none';
      displayList.appendChild(li);
    });
  });
};

export default displayScores;