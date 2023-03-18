import './styles/main.scss';
import logo from './assets/logo-orange.png';
import postScore from './module/submit.js';
import getScore from './module/refresh.js';

const refreshBtn = document.querySelector('#refresh');
const logoImg = document.getElementById('logo');
logoImg.setAttribute('src', logo);

postScore();

refreshBtn.addEventListener('click', () => {
  document.querySelector('#leaderboard').innerHTML = '';
  getScore();
});