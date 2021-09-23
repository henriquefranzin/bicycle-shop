import View from "./View.js";
import { formatToBRL } from '../utils/currency.js'

export default class CartDetailsView extends View{
  template(products) {
    return `
    <table class="table text">
        <thead>
          <tr>
            <th class="ta-left">Item</th>
            <th>Qtd</th>
            <th class="ta-right">Preço</th>
          </tr>
        </thead>
        <tbody>
          ${products.reduce((accumulator, { id, name, price, amount }) => {
            return `
              ${accumulator}
              <tr>
                <td class="ta-left">${name}</td>
                <td class="ta-center">
                  <div class="flex-middle">
                    <button
                      class="button button--transparent mh-1"
                      aria-label="Remove 1"
                    >
                      <img
                        class="icon"
                        src="./assets/images/remove.svg"
                        alt="-"
                      />
                    </button>
                    <span aria-label="Quantidade do produto">${amount}</span>
                    <button
                      class="button button--transparent mh-1"
                      aria-label="Add 1"
                    >
                      <img class="icon" src="./assets/images/add.svg" alt="+" />
                    </button>
                  </div>
                </td>
                <td class="ta-right">${formatToBRL(price)}</td>
                <td class="ta-right">
                  <button
                    class="button button--transparent"
                    aria-label="Remover do carrinho"
                  >
                    <img src="./assets/images/trash.svg" alt="Remove icon" />
                  </button>
                </td>
              </tr>
            `;
          }, '')}

        </tbody>
        <tfoot>
          <tr>
            <td class="ta-right fw-bold" colspan="3">
              Total ${formatToBRL(
                products.reduce((accumulator, { price, amount }) => {
                  return accumulator + price * amount;
                }, 0)
              )}
            </td>
          </tr>
        </tfoot>
      </table>`
  }
}
