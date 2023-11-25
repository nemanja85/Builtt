import { useLoaderData } from 'react-router-dom';
import { type GetProductResponse } from '../api/Product';
import ProductItem from '../components/ProductItem';
import { useStoreActions } from '../hooks';

export default function Shop() {
  const products = useLoaderData() as GetProductResponse[];
  const setProducts = useStoreActions((store) => store.products.setProducts);
  setProducts(products);

  return (
    <div className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl">
          <span className="font-bold leading-6 tracking-tight text-black">Svi proizvodi:</span>
          <span className="pl-2 text-lightGray">{products.length} proizvoda</span>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-8 gap-x-8 gap-y-2 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
