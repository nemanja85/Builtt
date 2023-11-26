import CartItem from '../components/CartItem';
import { useStoreState } from '../hooks';

export default function Cart() {
  const productsItems = useStoreState((store) => store.products.productsInBasket);

  return (
    <div className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl md:max-w-7xl">
          <h2 className="font-bold leading-6 tracking-tight text-black">Tvoja korpa</h2>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col justify-between w-full md:w-2/3 lg:max-w-3xl">
              {productsItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>
            <div className="w-full p-4 mt-5 space-y-3 max-h-96 bg-ligthGray md:w-1/ md:mt-0 md:ml-8 md:max-w-[300px] lg:max-w-[400px]">
              <h3 className="text-base font-bold">Tvoja narudžbina</h3>
              <div className="flex flex-col w-full space-y-3">
                {productsItems.map((item) => (
                  <div>
                    <div className="flex flex-row justify-between">
                      <p className="text-base font-normal leading-7">Ukupno</p>
                      <p className="text-lg leading-[25px] font-normal">
                        {item.currentPrice * item.quantity}
                        <sup className="pl-1 text-xs">RSD</sup>
                      </p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="text-base font-normal leading-7">Ušteda</p>
                      <p className="text-lg leading-[25px] font-normal">
                        -{(item.oldPrice! - item.currentPrice) * item.quantity} <sup className="pl-1 text-xs">RSD</sup>
                      </p>
                    </div>
                    <div className="flex flex-row justify-between pb-4 border-b border-b-black">
                      <p className="text-base font-normal leading-7">Isporuka Daily Express</p>
                      <p className="mt-2.5 text-xs font-normal">Besplatna</p>
                    </div>
                    <div className="flex flex-row justify-between py-3">
                      <div className="space-y-1">
                        <p className="text-base font-normal leading-7">Ukupno za uplatu</p>
                        <p className="text-xs font-normal">Cena je sa uključenim PDV-om</p>
                      </div>
                      <p className="text-lg leading-[25px] font-normal">
                        {item.currentPrice * item.quantity - (item.oldPrice! - item.currentPrice) * item.quantity}{' '}
                        <sup className="pl-1 text-xs">RSD</sup>
                      </p>
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="flex w-full justify-center items-center h-11 rounded-2xl  text-white bg-black py-1.5 text-lg leading-4 !mt-3 !mb-6 hover:text-black hover:bg-white hover:border hover:border-black"
                >
                  Prijavi se za brže plaćanje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
