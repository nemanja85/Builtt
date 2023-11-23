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
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10"></div>
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
