import './index.scss';

export default class Footer {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem) {
      this.elem.innerHTML = `
        <div class=""> 
          <label>Cadastre-se para receber nossas ofertas e novidades por e-mail</label>
          <div>
            <input placeholder="Digite o seu e-mail aqui" />
            <button>Ok</button>
          </div>
        </div>
      `;
    }
  }
}
