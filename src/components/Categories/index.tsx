import { TCategories } from "../../containers/CategoriesWrapper";
import { StyledCategories } from "./styledCategories";

const Categories = ({ category, profilePicture, description }: TCategories) => {
  return (
    <StyledCategories>
      <img
        className="CategoriesImage"
        src={profilePicture}
        alt={`Main graphic for ${category}`}
      />
      <h2 className="CategoriesDescription">{description}</h2>
      <button className="ShopAll Button">{`Shop All ${category}`}</button>
    </StyledCategories>
  );
};

export default Categories;
