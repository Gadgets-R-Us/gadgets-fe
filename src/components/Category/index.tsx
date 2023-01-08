import { TITem } from "../../containers/CategoryWrapper";
import { StyledCategory } from "./styledCategory";

const Category = ({
  image,
  name,
  starCount,
  reviewCount,
  color,
  price,
}: TITem) => {
  return (
    <StyledCategory>
      <img className="ItemImage" src={image} alt={name} />
      <h2>{name}</h2>
      <div className="ItemReputation">
        <p>{starCount}</p>
        <p>({reviewCount})</p>
      </div>
      <p>Color: {color}</p>
      <p>${price}</p>
    </StyledCategory>
  );
};
export default Category;
