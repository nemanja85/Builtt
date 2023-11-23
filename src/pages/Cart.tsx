const items = [
  {
    id: 1,
    title: 'Naturela sa Rogačem i Agava Šećerom',
    quantity: '750 g',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    currentPrice: '546',
    oldPrice: '746',
  },
];

export default function Cart() {
  return (
    <div className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl lg:max-w-7xl">
          <h2 className="font-bold leading-6 tracking-tight text-black">Tvoja korpa</h2>
          <div className="flex flex-col justify-between w-full mt-8 space-y-20 md:flex-row">
            {items.map((item) => (
              <article
                key={item.id}
                className="relative flex flex-col justify-between w-full pb-4 border-b md:w-3/4 lg:max-w-3xl isolate border-b-gray-500 lg:flex-row"
              >
                <div className="flex">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={item.imageUrl}
                      alt="Products"
                      className="absolute inset-0 object-cover w-full h-full bg-gray-50"
                    />
                    <div className="absolute inset-0 rounded-2xl" />
                  </div>
                  <div className="flex flex-col justify-between pl-8">
                    <div className="relative max-w-xl group">
                      <h3 className="text-lg font-semibold leading-6 text-black">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{item.quantity}</p>
                    </div>
                    <div className="relative max-w-xl group">
                      <button className="text-base font-normal leading-7 underline">Ukloni</button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-2xl leading-8 text-black">
                    {item.currentPrice}
                    <sup className="pl-2">RSD</sup>
                  </p>
                  <p className="text-base leading-[18px] text-orange-600 line-through pt-2">
                    {item.oldPrice}
                    <sup className="pl-2">RSD</sup>
                  </p>
                </div>
              </article>
            ))}
            <div className="w-full p-4 !m-0 space-y-3 bg-ligthGray md:w-1/4">
              <h3 className="text-base font-bold">Tvoja narudžbina</h3>
              <div className="flex flex-col w-full space-y-3">
                <div className="flex flex-row justify-between">
                  <p className="text-base font-normal leading-7">Ukupno</p>
                  <p className="text-lg leading-[25px] font-normal">
                    19940 <sup className="pl-1 text-xs">RSD</sup>
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-base font-normal leading-7">Ušteda</p>
                  <p className="text-lg leading-[25px] font-normal">
                    -1200 <sup className="pl-1 text-xs">RSD</sup>
                  </p>
                </div>
                <div className="flex flex-row justify-between pb-4 border-b border-b-black">
                  <p className="text-base font-normal leading-7">Isporuka Daily Express</p>
                  <p className="text-xs font-normal">Besplatna</p>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="space-y-1">
                    <p className="text-base font-normal leading-7">Ukupno za uplatu</p>
                    <p className="text-xs font-normal">Cena je sa uključenim PDV-om</p>
                  </div>
                  <p className="text-lg leading-[25px] font-normal">
                    19940 <sup className="pl-1 text-xs">RSD</sup>
                  </p>
                </div>
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
