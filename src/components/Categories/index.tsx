import { TCategories } from "../../containers/CategoriesWrapper";

const Categories = ({ category, profilePicture, description }: TCategories) => {
  return (
    <>
      <img src={profilePicture} alt={`Main graphic for ${category}`} />
      <h2>{description}</h2>
      <button className="ShopAll Button">{`Shop All ${category}`}</button>
    </>
  );
};

export default Categories;
