import Light_Cart from '../../public/products/Light_Cart.png';

type ProductItemProps = {
  id: number;
  imageUrl: string;
  title: string;
  currentPrice: number;
};

const productItems = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    title: 'Naturela sa Rogačem i Agava Šećerom',
    currentPrice: 546,
  } as ProductItemProps,
];

const ProductItem = () => {
  return (
    <div className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-bold leading-6 tracking-tight text-black">Svi proizvodi:</h2>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-8 gap-x-8 gap-y-2 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {productItems.map((item) => (
            <article className="flex flex-col items-start justify-between mb-5 lg:mb-0">
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
                      <g clip-path="url(#clip0_8_64)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                      <g clip-path="url(#clip0_8_67)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.2607 8.66502H0.630371V7.33499H15.2607V8.66502Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.28056 15.3152L7.28056 0.684814L8.6106 0.684814L8.6106 15.3152L7.28056 15.3152Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8_67">
                          <rect
                            width="14.6304"
                            height="14.6304"
                            fill="white"
                            transform="translate(0.630371 0.684814)"
                          />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
