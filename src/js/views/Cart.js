import View from "./View.js";

export default class CartView extends View{
  template(amount) {
    if (amount) {
      return `
      <img class="header__cart header__cart--has-product"
      data-cart-amount=${amount}
      src="./assets/images/cart.svg"
      alt="Cart icon"
      />`;
    }
    return `
    <img class="header__cart"
    src="./assets/images/cart.svg"
    alt="Cart icon"
    />`;
  }
}

