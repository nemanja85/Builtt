import { Outlet } from 'react-router-dom';
import cart from '../../public/header/Cart.png';
import logo from '../../public/header/Logo.png';

const AppLayout = () => {
  return (
    <>
      <header>
        <div className="flex justify-between w-full px-8 py-4 bg-ligthGray">
          <img src={logo} alt="Logo" />
          <img src={cart} alt="Cart" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
