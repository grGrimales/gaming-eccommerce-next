import { ENV, authFetch } from "@/utils";

export class Cart {
  add(gameId) {
    const cart = this.getAll();

    const index = cart.findIndex((item) => item.id === gameId);
    if (index < 0) {
      cart.push({ id: gameId, quantity: 1 });
    } else {
      const game = cart[index];
      cart[index].quantity = game.quantity + 1;
    }
    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  getAll() {
    const cart = localStorage.getItem(ENV.CART);
    if (!cart) {
      return [];
    } else {
      return JSON.parse(cart);
    }
  }

  count() {
    const cart = this.getAll();

    let count = 0;

    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }

  changeQuantity(gameId, quantity) {
    const cart = this.getAll();
    const index = cart.findIndex((item) => item.id === gameId);
    cart[index].quantity = quantity;
    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  deleteItem(gameId) {
    const cart = this.getAll();
    const index = cart.findIndex((item) => item.id === gameId);
    cart.splice(index, 1);
    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }
  deleteAllItems() {
    localStorage.removeItem(ENV.CART);
  }

  async paymentCart(token, products, idUser, address) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.PAYMENT_ORDER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          products,
          idUser,
          addressShipping: address,
        }),
      };

      const response = await authFetch(url, params);

      return response;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}
