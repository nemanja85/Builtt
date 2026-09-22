import { memo } from 'react';
import { useStoreActions } from '../hooks';
import { type ProductCartItem } from '../store/product';

type Props = {
  item: ProductCartItem;
};

const formatPrice = (amount: number) =>
    new Intl.NumberFormat('sr-RS').format(amount);

const CartItem = memo(({ item }: Props) => {
  const { addToBasket, removeFromBasket, removeItem } = useStoreActions((store) => store.products);

  const title = item.title ?? item.name ?? '';
  const quantity = item.quantity ?? 1;
  const currentPrice = item.currentPrice ?? item.price ?? 0;
  const oldPrice = item.oldPrice ?? currentPrice;

  return (
    <article className="cart-item-selector relative flex flex-col justify-between pb-4 mt-8 border-b isolate border-b-gray-500 sm:flex-row">
      <div className="flex">
        {item.imageUrl && (
            <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square w-full sm:w-32 lg:w-40 shrink-0">
              <img
                  src={item.imageUrl}
                  alt={title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  loading="lazy"
              />
            </div>
        )}
        <div className={`flex flex-col justify-between ${item.imageUrl ? 'pl-8' : ''}`}>
          <div className="relative max-w-xl group">
            <h3 className="text-lg font-semibold leading-6 text-black">{title}</h3>
            {item.weight && <p className="mt-1 text-sm leading-6 text-gray-600">{item.weight}</p>}
          </div>
          <div className="relative max-w-xl group">
            <div className="inline-flex items-center justify-between h-10 px-3 mr-4 bg-white border border-black rounded-2xl">
              <button
                  type="button"
                  onClick={() => removeFromBasket(item.id)}
                  aria-label="Smanji količinu"
                  className="flex items-center justify-center w-8 h-8 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
              >
                <svg width="14" height="2" viewBox="0 0 14 2" fill="currentColor" aria-hidden="true">
                  <rect width="14" height="2" rx="1" />
                </svg>
              </button>
              <span className="px-4">{quantity}</span>
              <button onClick={() => addToBasket(item.id)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_8_67)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2607 8.66502H0.630371V7.33499H15.2607V8.66502Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.28056 15.3152L7.28056 0.684814L8.6106 0.684814L8.6106 15.3152L7.28056 15.3152Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_67">
                      <rect width="14.6304" height="14.6304" fill="white" transform="translate(0.630371 0.684814)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="text-sm font-medium text-gray-500 underline underline-offset-4 hover:text-red-600 transition-colors focus:outline-none"
            >
              Ukloni
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 text-left sm:text-right">
        <p className="text-2xl font-bold tracking-tight text-gray-900">
          {formatPrice(currentPrice * quantity)}
          <span className="ml-1.5 text-sm font-normal text-gray-500">RSD</span>
        </p>
        {oldPrice !== currentPrice && (
            <p className="mt-1 text-sm font-medium text-orange-600">
              <span className="line-through">{formatPrice(oldPrice * quantity)}</span>
              <span className="ml-1 text-xs">RSD</span>
            </p>
        )}
      </div>
    </article>
  );
});

export default CartItem;
