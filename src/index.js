/**
 * The entry point
 */

import App from './components/app';
import Header from './components/header';

window.addEventListener('load', () => {
  const app = new App(document.getElementById('app'));
  const header = new Header(document.getElementById('header'));

  // A very simple component setup
  app.render();
  header.render();

  // Render the time every 1s
  setInterval(() => {
    app.render();
  }, 1000);
});
