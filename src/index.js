/**
 * The entry point
 */

import App from './components/app';
import Footer from './components/footer';
import Header from './components/header';

window.addEventListener('load', () => {
  const app = new App(document.getElementById('app'));
  const header = new Header(document.getElementById('header'));
  const footer = new Footer(document.getElementById('footer'));

  // A very simple component setup
  app.render();
  header.render();
  footer.render();

  // Render the time every 1s
  setInterval(() => {
    app.render();
  }, 1000);
});
