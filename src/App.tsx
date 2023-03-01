import { useState } from 'react';
import RestaurantTable from './components/RestaurantTable';
import SearchBar from './components/SearchBar';
import SearchButtons from './components/SearchButtons';
import Restaurant from './types/Restaurant';
import filterRestaurants from './utils/filterRestaurants';

export default function App() {
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: '메가반점',
      category: '중식',
      menus: [
        { id: 1, name: '짜장면', price: 8000 },
        { id: 2, name: '짬뽕', price: 8000 },
        { id: 3, name: '차돌짬뽕', price: 9000 },
        { id: 4, name: '탕수육', price: 14000 },
      ],
    },
    {
      id: 2,
      name: '메리김밥',
      category: '한식',
      menus: [
        { id: 1, name: '김밥', price: 3500 },
        { id: 2, name: '참치김밥', price: 4500 },
        { id: 3, name: '제육김밥', price: 5000 },
        { id: 4, name: '훈제오리김밥', price: 5500 },
        { id: 5, name: '컵라면', price: 2000 },
      ],
    },
    {
      id: 3,
      name: '데브부엌',
      category: '한식',
      menus: [
        { id: 1, name: '제육덮밥', price: 10000 },
        { id: 2, name: '닭떡국', price: 9000 },
        { id: 3, name: '닭계장', price: 11000 },
        { id: 4, name: '돈까스', price: 1000 },
      ],
    },
    {
      id: 4,
      name: '로드스시',
      category: '일식',
      menus: [
        { id: 1, name: '모듬초밥', price: 14000 },
        { id: 2, name: '특선초밥', price: 17900 },
        { id: 3, name: '스페셜초밥', price: 21000 },
      ],
    },
    {
      id: 5,
      name: '혹등고래카레',
      category: '일식',
      menus: [
        { id: 1, name: '기본카레', price: 9000 },
        { id: 2, name: '가라아케카레', price: 14000 },
        { id: 3, name: '소시지카레', price: 13000 },
        { id: 4, name: '돈까스카레', price: 14000 },
        { id: 5, name: '닭가슴살카레', price: 13000 },
      ],
    },
    {
      id: 6,
      name: '메가김치찌개',
      category: '한식',
      menus: [
        { id: 1, name: '김치찌개1인', price: 8000 },
        { id: 2, name: '된장찌개', price: 8000 },
        { id: 3, name: '계란말이', price: 6000 },
      ],
    },
  ];

  const [filterText, setFilterText] = useState<string>('');
  const [searchedCategory, setSearchedCategory] = useState<string>('');

  const filteredRestaurants = searchedCategory
    ? filterRestaurants(restaurants, filterText)
      .filter((restaurant) => restaurant.category === (searchedCategory))
    : filterRestaurants(restaurants, filterText);

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <SearchButtons handleClickSelectCategory={setSearchedCategory} />
      <RestaurantTable filteredRestaurants={filteredRestaurants} />
    </>
  );
}
