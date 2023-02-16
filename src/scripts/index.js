import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/component/app-bar.js';
import '../scripts/component/hero-header.js';
import '../scripts/component/footer-component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

AOS.init();

const app = new App({
  menu: document.querySelector('#menu'),
  hamMenuIcon: document.querySelector('#ham-menu'),
  navBar: document.querySelector('#nav-bar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
