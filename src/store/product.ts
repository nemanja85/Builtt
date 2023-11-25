import { action, type Action } from 'easy-peasy';
import { type GetProductResponse } from '../api/Product';

type ProductCartItem = GetProductResponse & {
  quantity: number;
};

export type ProductState = {
  products: GetProductResponse[];
  productsInBasket: ProductCartItem[];
  addToBasket: Action<ProductState, number>;
  removeFromBasket: Action<ProductState, number>;
};

export const productStore: ProductState = {
  products: [],
  productsInBasket: [],
  addToBasket: action((state, payload) => {
    const productInBasket = state.productsInBasket.find((x) => x.id === payload);

    if (!productInBasket) {
      const product = state.products.find((x) => x.id);

      const productWithQuantity = {
        ...product,
        quantity: 1,
      } as ProductCartItem;

      state.productsInBasket.push(productWithQuantity);
    } else {
      const idx = state.productsInBasket.findIndex((x) => x.id === payload);
      state.productsInBasket[idx].quantity++;
    }
  }),
  removeFromBasket: action((state, payload) => {
    const existingProduct = state.productsInBasket.find((item) => item.id === payload);
    if (existingProduct) {
      if (existingProduct.quantity > 0) {
        existingProduct.quantity--;
      }
      if (existingProduct.quantity === 0) {
        const idx = state.productsInBasket.findIndex((x) => x.id === existingProduct.id);
        delete state.productsInBasket[idx];
      }
    }
  }),
};
