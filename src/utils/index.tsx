export const handleAddToCart = (item: any, action: any, params: any) => {
  action([
    ...item,
    {
      id: item.length + 1,
      item: params.name,
      image: params.image,
      color: params.color,
      price: params.price,
    },
  ]);
};
