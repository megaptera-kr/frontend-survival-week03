import { useState } from 'react';
import data from '../restaurants.json';
import CategorySelect from './components/CategorySelect';
import Header from './components/Header';
import RestaurantTable from './components/RestaurantTable';
import SearchInput from './components/SearchInput';

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [select, setSelect] = useState<string>('전체');
  const { restaurants } = data;

  const categories:string[] = restaurants.reduce((acc, restaurant) => (
    acc.includes(restaurant.category)
      ? acc
      : [...acc, restaurant.category]
  ), ['전체']);

  const result = select === '전체' ? restaurants.filter((restaurant) => restaurant.name.includes(searchTerm.trim())) : restaurants.filter((restaurant) => restaurant.category === select && restaurant.name.includes(searchTerm.trim()));

  return (
    <div>
      <Header />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategorySelect categories={categories} select={select} setSelect={setSelect} />
      <RestaurantTable restaurants={result} />
    </div>
  );
}
