import { FC } from 'react';
import cart from '../../public/header/Cart.png';
import logo from '../../public/header/Logo.png';

const AppLayout: FC = () => {
  return (
    <>
      <header>
        <div className="flex justify-between w-full">
          <img src={logo} alt="Logo" />
          <img src={cart} alt="Cart" />
        </div>
      </header>
      <main></main>
    </>
  );
};

export default AppLayout;
