type CartItemProps = {
  id: number;
  image: HTMLImageElement;
  title: string;
  quantity?: string;
  currentPrice: number | undefined;
  oldPrice?: number | undefined;
};

const CartItem = () => {
  return <h1>Cart item</h1>;
};

export default CartItem;
