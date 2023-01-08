export const fetchCategories = async () => {
  const response = await fetch("http://localhost:3001/");
  return response.json();
};

export const fetchCategory = async (category: string) => {
  const response = await fetch(`http://localhost:3001/${category}`);
  return response.json();
};
