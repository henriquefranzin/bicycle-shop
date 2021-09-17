import { formatToBRL } from "../utils/currency.js";

export default class ProductsView {
  constructor(selector) {
    this.container = document.querySelector(selector);
  }

  template(products) {

    if(!products.length) {
      return '<p>Nenhum produto encontrado com o filtro selecionado</p>';
    }

    return products.reduce((accumulator, {name, image, price}) => {
      return `
        ${accumulator}
        <article class="card">
            <img
              class="card__image"
              src="${image}"
              alt="${name}"
            />

            <div class="card__info">
              <p class="card__name">
                ${name}
              </p>
              <p class="card__price">
                ${formatToBRL(price)}
              </p>

              <button class="button">
                Adicionar ao carrinho
              </button>
            </div>
          </article>
      `;
    }, '');
  }

  render(data) {
    this.container.innerHTML = this.template(data);
  }
}
