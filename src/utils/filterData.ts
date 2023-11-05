import { Restaurants } from "../types/data";

export type Condition = {
  keyword?: string;
  category?: string;
}

const filterData = (data: Restaurants, condtion: Condition = { category: '', keyword: '' }) => {
  const { keyword, category } = condtion;

  if (!keyword && !category) return data;

  let filtered: Restaurants = data;

  if (keyword) {
    filtered = filtered.filter(row => row.name.includes(keyword.trim()))
  }

  if (category) {
    filtered = filtered.filter(row => row.category === category);
  }


  return filtered;
}

export default filterData;