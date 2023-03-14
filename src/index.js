import {
  getISS,
} from './module/refresh.js';
import './styles/main.scss';
import logo from './assets/logo-orange.png';

const logoImg = document.getElementById('logo');
logoImg.setAttribute('src', logo);

getISS();