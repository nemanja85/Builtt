import { useCallback, useEffect, useRef } from 'react';
import { type GetProductResponse } from '../api/products';
import { useStoreActions, useStoreState } from '../hooks';

export type Props = {
  item: GetProductResponse;
};

const NOTIFICATION_DURATION_MS = 2000;

const ProductItem = ({ item }: Props) => {
  const { addToBasket, removeFromBasket } = useStoreActions((store) => store.products);
  const { setNotification, dismissNotification } = useStoreActions((store) => store.app);

  const quantity = useStoreState(
      (store) => store.products.productsInBasket.find((x) => x.id === item.id)?.quantity ?? 0
  );

  const timeoutRef = useRef<number | null>(null);

  const handleAddToBasket = useCallback(() => {
    addToBasket(item.id);
    setNotification({
      message: 'Uspešno ste dodali proizvod u korpu',
      notificationType: 'success',
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      dismissNotification();
      timeoutRef.current = null;
    }, NOTIFICATION_DURATION_MS);
  }, [addToBasket, setNotification, dismissNotification, item.id]);

  const handleRemoveFromBasket = useCallback(() => {
    removeFromBasket(item.id);
  }, [removeFromBasket, item.id]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
      <article className="flex flex-col items-start justify-start mb-5 lg:mb-8">
        <div className="relative w-full">
          <img
              src={item.imageUrl}
              alt={`Slika proizvoda: ${item.title}`}
              loading="lazy"
              className="aspect-video w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />

          <div className="absolute hidden cartInfo bottom-2 left-2">
            <div className="inline-flex items-center justify-between h-10 px-3 mr-1 bg-white border border-black rounded-2xl">
              <button
                  type="button"
                  className="text-black"
                  onClick={handleRemoveFromBasket}
                  aria-label="Ukloni iz korpe"
              >
                <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.6304 8.66502H0V7.33499H14.6304V8.66502Z"
                      fill="currentColor"
                  />
                </svg>
              </button>

              <span className="px-4">{quantity}</span>

              <button
                  type="button"
                  className="text-black"
                  onClick={handleAddToBasket}
                  aria-label="Dodaj u korpu"
              >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2607 8.66502H0.630371V7.33499H15.2607V8.66502Z"
                      fill="currentColor"
                  />
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.28056 15.3152L7.28056 0.684814L8.6106 0.684814L8.6106 15.3152L7.28056 15.3152Z"
                      fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <button type="button" className="p-2 bg-dark-blue rounded-full" aria-label="Prikaži korpu">
              <img src="/products/Light_Cart.png" alt="" />
            </button>
          </div>
        </div>

        <div className="w-full text-center">
          <div className="relative group">
            <h3 className="mt-3 text-xl font-semibold leading-6 tracking-tight text-black">
              <span className="absolute inset-0" aria-hidden="true"></span>
              {item.title}
            </h3>
            <p className="text-2xl leading-[34px] tracking-tight font-normal text-black mt-2">
              {item.currentPrice}
              <sup className="text-[13px] leading-4 font-normal pl-2">RSD</sup>
            </p>
          </div>
        </div>
      </article>
  );
};

export default ProductItem;