import { createStore } from 'easy-peasy';
import { appStore, type AppState } from './app';
import { productStore, type ProductState } from './product';

export type Store = {
  products: ProductState;
  app: AppState;
};

type InitialStoreState = {
  products?: Partial<Pick<ProductState,
      'products' | 'productsInBasket' | 'mockSubtotal' | 'mockDiscount' | 'mockGrandTotal'
  >>;
  app?: Partial<Pick<AppState, 'message' | 'notificationType'>>;
};

const STORAGE_KEY = 'mockStore';

const loadMockStore = (): InitialStoreState | undefined => {
  if (typeof window === 'undefined') return undefined;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;

    const parsed = JSON.parse(raw) as InitialStoreState;

    return {
      products: parsed.products
          ? {
            products: parsed.products.products,
            productsInBasket: parsed.products.productsInBasket,
            mockSubtotal: parsed.products.mockSubtotal,
            mockDiscount: parsed.products.mockDiscount,
            mockGrandTotal: parsed.products.mockGrandTotal,
          }
          : undefined,
      app: parsed.app,
    };
  } catch (e) {
    console.error(`Failed to parse "${STORAGE_KEY}" from localStorage`, e);
    return undefined;
  }
};

export const store = createStore<Store, InitialStoreState>(
    {
      products: productStore,
      app: appStore,
    },
    {
      initialState: loadMockStore(),
    }
);