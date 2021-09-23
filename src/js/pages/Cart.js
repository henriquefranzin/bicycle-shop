import CartController from '../controllers/Cart.js';
import CartDetailsController from '../controllers/CartDetails.js';

class Cart {
  constructor() {
    this.cartController = new CartController();
    this.cartDetailsController = new CartDetailsController();
  }
}

new Cart();
