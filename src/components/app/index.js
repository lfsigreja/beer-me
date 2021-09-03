import './index.scss';

export default class App {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem) {
      this.elem.innerHTML = `
        <section class="app">
        <h1>hehehehe</h1>  
        <p>The time is: ${new Date().toLocaleString()}</p>
        </section>
        `;
    }
  }
}
