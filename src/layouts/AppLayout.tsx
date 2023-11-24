import { Outlet } from 'react-router-dom';
import cart from '../../public/header/Cart.png';
import logo from '../../public/header/Logo.png';
import { useStoreActions } from '../hooks';

const AppLayout = () => {
  const count = useStoreActions((store) => store.products.count);
  return (
    <>
      <header>
        <div className="flex justify-between w-full px-8 py-4 bg-ligthGray">
          <img src={logo} alt="Logo" />
          <div>
            <span className="font-medium text-white font-base">{count}</span>
            <img src={cart} alt="Cart" />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
