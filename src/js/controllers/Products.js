import ProductsView from '../views/Products.js';
import { getProducts } from '../services/products.js';

export default class ProductsController {
  constructor() {
    this.productsView = new ProductsView('#product-list');

    this.init();
  }

  async init() {
    try {
      const products = await getProducts();

      this.productsView.render(products);
    } catch (error) {
      console.error('Deu ruim', error);
    }
  }
}
