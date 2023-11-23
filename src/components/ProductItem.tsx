import Light_Cart from '../../public/products/Light_Cart.png';
import { type GetProductResponse } from '../api/Product';

type Props = {
  item: GetProductResponse;
};

const ProductItem = ({ item }: Props) => {
  return (
    <article className="flex flex-col items-start justify-start mb-5 lg:mb-8">
      <div className="relative w-full">
        <img
          src={item.imageUrl}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute bottom-2 left-2">
          <button className="inline-flex items-center justify-between h-10 px-3 mr-1 bg-white border border-black rounded-2xl">
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
            <span className="px-4">0</span>
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
          <button className="p-2 bg-black rounded-full">
            <img src={Light_Cart} alt="cart icon" />
          </button>
        </div>
      </div>
      <div className="max-w-xl">
        <div className="relative group">
          <h3 className="mt-3 text-xl font-semibold leading-6 tracking-tight text-black">
            <span className="absolute inset-0"></span>
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
