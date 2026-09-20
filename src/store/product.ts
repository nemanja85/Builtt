import { action, computed, type Action, type Computed } from 'easy-peasy';
import { type GetProductResponse } from '../api/products';

export type ProductCartItem = Partial<GetProductResponse> & {
  id: number;
  quantity?: number;
  name?: string;
  price?: number;
};

export type ProductState = {
  products: GetProductResponse[];
  productsInBasket: ProductCartItem[];
  mockSubtotal?: number;
  mockDiscount?: number;
  mockGrandTotal?: number;
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
      if (idx !== -1) {
        state.productsInBasket[idx].quantity = (state.productsInBasket[idx].quantity ?? 0) + 1;
      }
    }
  }),
  removeFromBasket: action((state, payload) => {
    const existingProduct = state.productsInBasket.find((item) => item.id === payload);
    if (existingProduct) {
      const currentQty = existingProduct.quantity ?? 1;
      if (currentQty > 1) {
        existingProduct.quantity = currentQty - 1;
      } else {
        const idx = state.productsInBasket.findIndex((x) => x.id === existingProduct.id);
        if (idx !== -1) {
          state.productsInBasket.splice(idx, 1);
        }
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
  subtotal: computed((state) =>
    state.mockSubtotal !== undefined
      ? state.mockSubtotal
      : state.productsInBasket.reduce((acc, cur) => {
          const qty = cur.quantity ?? 1;
          const price = cur.oldPrice ?? cur.currentPrice ?? cur.price ?? 0;
          return acc + qty * price;
        }, 0)
  ),
  discount: computed((state) =>
    state.mockDiscount !== undefined
      ? state.mockDiscount
      : state.productsInBasket.reduce((acc, cur) => {
          const qty = cur.quantity ?? 1;
          const oldPrice = cur.oldPrice ?? cur.currentPrice ?? cur.price ?? 0;
          const currentPrice = cur.currentPrice ?? cur.price ?? 0;
          return acc + qty * (oldPrice - currentPrice);
        }, 0)
  ),
  grandTotal: computed((state) =>
    state.mockGrandTotal !== undefined ? state.mockGrandTotal : state.subtotal - state.discount
  ),
};
