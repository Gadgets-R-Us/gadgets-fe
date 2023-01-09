import { useLocation } from "react-router-dom";
import { StyledItem } from "./styledItem";
const Item = () => {
  const location = useLocation();
  //destructuring location.state.item below which is coming from Link's state
  const params = location.state.item;

  const specs = params.specifications.map((spec: string) => {
    return <li>{spec}</li>;
  });

  return (
    <StyledItem>
      <img className="ItemImage" src={params.image} alt={params.name} />
      <h2>{params.name}</h2>
      <div className="ItemMain">
        <p>{params.starCount}</p>
        <h2>{params.price}</h2>
      </div>
      <p>{params.reviewCount}</p>
      <h2>About this Item</h2>
      <h3>{params.longDescription}</h3>
      <h2>Specifications</h2>
      <ul className="SpecList">{specs}</ul>
      <button>Add to Cart</button>
    </StyledItem>
  );
};
export default Item;
