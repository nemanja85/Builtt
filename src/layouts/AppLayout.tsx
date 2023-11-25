import { Outlet, useNavigate } from 'react-router-dom';
import cart from '../../public/header/Cart.png';
import logo from '../../public/header/Logo.png';
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
          <img src={logo} alt="Logo" />
          <button onClick={goToCart} disabled={productsLength === 0} className="flex">
            <span className="relative font-medium text-black top-1.5 left-4 text-[12px]">{productsLength}</span>
            <img src={cart} alt="Cart" />
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
