import CartDetailsView from "../views/CartDetails.js";
import CartModel from "../models/Cart.js";
import { getProduct } from "../services/products.js";

export default class CartDetailsController{
  constructor() {
    this.cartDetailsView = new CartDetailsView('#cart-details');
    this.cartModel = new CartModel();

    this.init();
  }

  init() {
    this.initialRender();
  }

  async initialRender() {
    const productsPromises = this.cartModel.products.map(async (item) => {
      const product = await getProduct(item.id);

      return {
        ...product,
        amount: item.amount,
      }
    });

    this.cartModel.products = await Promise.all(productsPromises);
    this.cartDetailsView.render(this.cartModel.products);
  }
}
