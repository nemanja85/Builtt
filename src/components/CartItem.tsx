import { useStoreActions } from '../hooks';
import { type ProductCartItem } from '../store/product';

type Props = {
  item: ProductCartItem;
};

const CartItem = ({ item }: Props) => {
  const total = useStoreActions((store) => {
    store.products.productsTotal;
  });
  const addToBasket = useStoreActions((store) => store.products.addToBasket);
  const removeFromBasket = useStoreActions((store) => store.products.removeFromBasket);
  const removeItem = useStoreActions((store) => store.products.removeItem);
  console.log('Total: ', total);

  return (
    <article className="relative flex flex-col justify-between pb-4 mt-8 border-b isolate border-b-gray-500 sm:flex-row">
      <div className="flex">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full bg-gray-50" />
          <div className="absolute inset-0 rounded-2xl" />
        </div>
        <div className="flex flex-col justify-between pl-8">
          <div className="relative max-w-xl group">
            <h3 className="text-lg font-semibold leading-6 text-black">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">{item.weight}</p>
          </div>
          <div className="relative max-w-xl group">
            <div className="inline-flex items-center justify-between h-10 px-3 mr-4 bg-white border border-black rounded-2xl">
              <button onClick={() => removeFromBasket(item.id)}>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_8_64)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.6304 8.66502H0V7.33499H14.6304V8.66502Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_64">
                      <rect width="14.6304" height="14.6304" fill="white" transform="translate(0 0.684814)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span className="px-4">{item.quantity}</span>
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
            <button onClick={() => removeItem(item.id)} className="text-base font-normal leading-7 underline">
              Ukloni
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-0">
        <p className="text-2xl leading-8 text-black">
          {item.currentPrice}
          <sup className="pl-2">RSD</sup>
        </p>
        <p className="text-base leading-[18px] text-orange-600 pt-2">
          <span className="line-through">{item.oldPrice}</span>
          <sup className="pl-2 ">RSD</sup>
        </p>
      </div>
    </article>
  );
};

export default CartItem;
