export type GetProductResponse = {
  id: number;
  imageUrl: string;
  title: string;
  currentPrice: number;
  oldPrice: number;
  weight?: number;
};

export const getProducts = () => {
  return [
    {
      id: 1,
      imageUrl: '/products/Proizvod.png',
      title: 'Kikiriki puter',
      currentPrice: 870,
      oldPrice: 990,
    },
    {
      id: 2,
      imageUrl: '/products/Proizvod-5.jpg',
      title: 'Zejtin',
      currentPrice: 150,
      oldPrice: 175,
    },
    {
      id: 3,
      imageUrl: '/products/Proizvod-1.png',
      title: 'Suncokretov puter',
      currentPrice: 520,
      oldPrice: 860,
    },
    {
      id: 4,
      imageUrl: '/products/Proizvod-3.png',
      title: 'Laneno ulje',
      currentPrice: 1100,
      oldPrice: 1310,
    },
    {
      id: 5,
      imageUrl: '/products/Proizvod-5.jpg',
      title: 'Zejtin',
      currentPrice: 150,
      oldPrice: 175,
    },
    {
      id: 6,
      imageUrl: '/products/Proizvod-4.png',
      title: 'Kokosov protein',
      currentPrice: 1600,
      oldPrice: 2100,
    },
    {
      id: 7,
      imageUrl: '/products/Proizvod-8.png',
      title: 'Naturela sa Rogačem i Agava Šećerom',
      currentPrice: 546,
      oldPrice: 650,
    },
    {
      id: 8,
      imageUrl: '/products/Proizvod-1.png',
      title: 'Suncokretov puter',
      currentPrice: 520,
      oldPrice: 860,
    },
    {
      id: 9,
      imageUrl: '/products/Proizvod-8.png',
      title: 'Naturela sa Rogačem i Agava Šećerom',
      currentPrice: 546,
      oldPrice: 700,
    },
    {
      id: 10,
      imageUrl: '/products/Proizvod-9.png',
      title: ' Proteinske čokoladica sa šumskim voćem',
      currentPrice: 630,
      oldPrice: 790,
    },
    {
      id: 11,
      imageUrl: '/products/Proizvod-3.png',
      title: 'Laneno ulje',
      currentPrice: 1100,
      oldPrice: 1310,
    },
    {
      id: 12,
      imageUrl: '/products/Proizvod.png',
      title: 'Kikiriki puter',
      currentPrice: 870,
      oldPrice: 990,
    },
  ] as GetProductResponse[];
};
