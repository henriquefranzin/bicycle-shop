export default class CartModel{
  products = localStorage.getItem('cart') || [];

  add(productId) {
    const productIndex = this.products.findIndex((item) => item.id === productId);

    if(productIndex === -1) {
      this.products.push({
        id: productId,
        amount: 1,
      });
    }else {
      this.products[productIndex].amount += 1;
    }

    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  get amount() {
    return this.products.reduce(() => {

    }, 0);
  }

};

