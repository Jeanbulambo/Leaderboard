import './style.css';
import { showData } from './modules/view.js';
import displayScores from './modules/controller.js';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('#submit-btn');
const player = document.getElementById('name');
const score = document.getElementById('score');

window.addEventListener('DOMContentLoaded', () => {
  displayScores();

  refreshBtn.addEventListener('click', () => {
    displayScores();
  });

  submitBtn.addEventListener('click', () => {
    if (player.value.length === 0) {
      return;
    }

    showData(player.value, score.value);
    player.value = '';
    score.value = '';
  });
});
