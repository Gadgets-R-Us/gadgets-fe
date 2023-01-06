import { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import { fetchCategories } from "../../utils/apicalls";
import { StyledCategoriesWrapper } from "./styledCategoriesWrapper";

export type TCategories = {
  id?: number;
  category: string;
  profilePicture: string;
  description: string;
};

const CategoriesWrapper = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories();
      setCategories(data.data);
    };
    fetchData();
  }, []);

  const allCategories =
    categories &&
    categories.map((category: TCategories) => {
      return (
        <Categories
          key={category.id}
          category={category.category}
          profilePicture={category.profilePicture}
          description={category.description}
        />
      );
    });

  return <StyledCategoriesWrapper>{allCategories}</StyledCategoriesWrapper>;
};

export default CategoriesWrapper;
