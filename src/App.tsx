import { useState } from 'react';
import FilterCategory from './components/FilterCategory';
import RestaurantList from './components/RestaurantList';
import SearchBar from './components/SearchBar';
import { RestaurantType } from './types/restaurantTypes';
import getFilterValues from './utils/getFilterValues';
import getRestauantListByCategory from './utils/getRestauantList';
import restaurantList from '../restaurants.json';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const categories = getFilterValues<RestaurantType, string>('category', restaurantList.restaurants);
  const restaurantListByCategory = getRestauantListByCategory(
    categories,
    restaurantList.restaurants,
  );
  const handleSearchChange = (value:string) => {
    setSearch(value);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <SearchBar onChange={handleSearchChange} value={search} />
      <FilterCategory filterList={categories || []} onFilterClick={handleFilterChange} />
      <RestaurantList restaurantList={restaurantListByCategory} filter={filter} search={search} />
    </div>
  );
}
