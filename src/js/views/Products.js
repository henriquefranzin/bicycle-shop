import View from "./View.js";
import { formatToBRL } from "../utils/currency.js";

export default class ProductsView extends View {

  template(products) {

    if(!products.length) {
      return '<p>Nenhum produto encontrado com o filtro selecionado</p>';
    }

    return products.reduce((accumulator, {id, name, image, price}) => {
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

              <button class="button" data-product-id="${id}">
                Adicionar ao carrinho
              </button>
            </div>
          </article>
      `;
    }, '');
  }
}
