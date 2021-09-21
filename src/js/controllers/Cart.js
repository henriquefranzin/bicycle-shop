import CartView from "../views/Cart.js";
import CartModel from "../models/Cart.js";

export default class CartController{
  constructor() {
    this.cartView = new CartView('#cart');
    this.cartModel = new CartModel();

    this.init();
  }

  init() {
    this.initialRender();

    this.setListeners();
  }

  initialRender() {
    this.cartView.render(this.cartModel.amount);
  }

  setListeners() {
    this.setAddProductListener();
  }

  setAddProductListener() {
    document.addEventListener('cart:add', this.handleAddProduct.bind(this));
  }

  handleAddProduct({ detail }) {
    const { productId } = detail;

    this.cartModel.add(productId);
    this.cartView.render(this.cartModel.amount);
  }

};
