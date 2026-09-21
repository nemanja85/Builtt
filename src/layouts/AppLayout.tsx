import { Outlet, useNavigate } from 'react-router-dom';
import { useStoreState } from '../hooks';

const AppLayout = () => {
  const productsLength = useStoreState((store) => store.products.productsInBasket.length);

  const navigate = useNavigate();

  const goToCart = () => {
    return navigate('/cart');
  };
  return (
    <>
      <header>
        <div className="flex justify-between w-full px-8 py-4 bg-ligthGray">
          <img src="/header/Logo.png" alt="Logo" />
          <button onClick={goToCart} disabled={productsLength === 0} className="flex">
            <span className="relative font-medium text-black top-2 left-5 text-[14px]">{productsLength}</span>
            <img src="/header/Cart.png" alt="Cart" />
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
