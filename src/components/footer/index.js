import './index.scss';

export default class Footer {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem) {
      this.elem.innerHTML = `
        <div class="newsletter-section"> 
          <label for="newsletter-input">Cadastre-se para receber nossas ofertas e novidades por e-mail</label>
          <div class="newsletter-section__register">
            <input id="newsletter-input" placeholder="Digite o seu e-mail aqui" />
            <button>Ok</button>
          </div>
          
          <div class="newsletter-section__social">
            <p>Acompanhe o Empório da Cerveja</p>
            <a target="_blank"  href="https://www.facebook.com/EmporioDaCerveja"><i class="fab fa-facebook-square"></i></a>
            <a target="_blank" href="https://www.instagram.com/empdacerveja/"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      `;
    }
  }
}
