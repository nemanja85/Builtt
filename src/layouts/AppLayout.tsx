import { memo, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useStoreState } from '../hooks';

const AppLayout = memo(() => {

  const navigate = useNavigate();

  const productsLength = useStoreState((store) => store.products.productsInBasket.length);

  const handleGoToCart = useCallback(() => {
        navigate('/cart');
    }, [navigate]);

  const hasItemsInBasket = productsLength > 0;

  return (
    <>
      <header>
          <div className="flex items-center justify-between w-full px-8 py-4 bg-ligth-gray">
              <img src="/header/Logo.png" alt="Logo" className="h-auto w-auto" />

              <button
                  type="button"
                  onClick={handleGoToCart}
                  disabled={!hasItemsInBasket}
                  aria-label={`Korpa sa ${productsLength} artikala`}
                  className="relative flex items-center p-2 rounded-lg transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  <img src="/header/Cart.png" alt="" aria-hidden="true" className="w-6 h-6" />

                  {hasItemsInBasket && (
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white">
                {productsLength}
              </span>
                  )}
              </button>
          </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
});

export default AppLayout;
