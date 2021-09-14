export default class ProductsView {
  constructor(selector) {
    this.container = document.querySelector(selector);
  }

  template(products) {
    return products.reduce((accumulator, item) => {
      return `
        ${accumulator}
        <article class="card">
            <img class="card__image"
              src="${item.image}"
              alt="${item.name}"
            />

            <div class="card__info">
              <p class="card__name">
                ${item.name}
              </p>
              <p class="card__price">
                R$ ${item.price}
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
