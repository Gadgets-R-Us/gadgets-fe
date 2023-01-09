import { useLocation } from "react-router-dom";
const Item = () => {
  const location = useLocation();
  return (
    <>
      <h2>{location.state.item.name}</h2>
      <div className="ItemMain">
        <p>{location.state.item.starCount}</p>
        <h2>{location.state.item.price}</h2>
      </div>
      <p>{location.state.item.reviewCount}</p>
      <h2>About this Item</h2>
      <h3>{location.state.item.longDescription}</h3>
      <h2>Specifications</h2>
      <ul>{location.state.item.specifications}</ul>
      <button>Add to Cart</button>
    </>
  );
};
export default Item;
