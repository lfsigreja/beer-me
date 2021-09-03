import './index.scss';

export default class Header {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem) {
      this.elem.innerHTML = `
        <div class="cashback-alert">
          <p>Chegou o <strong>Cashbeer!</strong> A cada compra você pode ganhar 5% de volta em créditos!</p>
        </div>
        <div>
          <div class="header-section">
            <a href="index.html"><img src="./assets/logo.svg" alt='logo'></a>
            <div class='search-container'>
              <input />
                <button class="btn">
                  <img src='./assets/lupa-icon.svg' alt='carrinho de compra'>
                </button>
            </div>
            <button class="btn">
              <img src='./assets/cart-icon.svg' alt='carrinho de compra'>
            </button>
          </div>
        </div>
        `;
    }
  }
}
