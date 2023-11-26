import { action, computed, type Action, type Computed } from 'easy-peasy';
import { type GetProductResponse } from '../api/products';

export type ProductCartItem = GetProductResponse & {
  quantity: number;
};

export type ProductState = {
  products: GetProductResponse[];
  productsInBasket: ProductCartItem[];
  addToBasket: Action<ProductState, number>;
  removeFromBasket: Action<ProductState, number>;
  removeItem: Action<ProductState, number>;
  setProducts: Action<ProductState, GetProductResponse[]>;
  subtotal: Computed<ProductState, number>;
  discount: Computed<ProductState, number>;
  grandTotal: Computed<ProductState, number>;
};

export const productStore: ProductState = {
  products: [],
  productsInBasket: [],
  addToBasket: action((state, payload) => {
    const productInBasket = state.productsInBasket.find((x) => x.id === payload);

    if (!productInBasket) {
      const product = state.products.find((x) => x.id === payload);

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
        state.productsInBasket.splice(idx, 1);
      }
    }
  }),
  setProducts: action((state, payload) => {
    state.products = payload;
  }),

  removeItem: action((state, payload) => {
    const existingProduct = state.productsInBasket.find((item) => item.id === payload);
    if (existingProduct) {
      const idx = state.productsInBasket.findIndex((x) => x.id === existingProduct.id);
      state.productsInBasket.splice(idx, 1);
    }
  }),
  subtotal: computed((state) => state.productsInBasket.reduce((acc, cur) => acc + cur.quantity * cur.oldPrice, 0)),
  discount: computed((state) =>
    state.productsInBasket.reduce((acc, cur) => acc + cur.quantity * (cur.oldPrice - cur.currentPrice), 0)
  ),
  grandTotal: computed((state) => state.subtotal - state.discount),
};
