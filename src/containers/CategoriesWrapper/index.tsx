import { useEffect, useState } from "react";
import { fetchCategories } from "../../utils/apicalls";

const CategoriesWrapper = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories();
      setCategories(data.data);
    };
    fetchData();
  }, []);
  console.log(categories, "test");
  return (
    <>
      <h1>Categories Wrapper</h1>
    </>
  );
};

export default CategoriesWrapper;
