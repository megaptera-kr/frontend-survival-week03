import { RestaurantType } from '../types/restaurantTypes';
import Restaurant from './Restaurant';
import getSearchResTaurantList from '../utils/getSearchResTaurantList';

type PropRestaurantListType = {
    [category: string]: RestaurantType[];
}

type PropTypes = {
    restaurantList:PropRestaurantListType;
    filter: string;
    search: string;
}

export default function RestaurantList({ restaurantList = {}, filter = 'all', search = '' }:PropTypes) {
  let displayRestaurantList = filter === 'all' ? Object.values(restaurantList).flat() : restaurantList[filter];
  if (search.trim()) {
    displayRestaurantList = getSearchResTaurantList(displayRestaurantList, search);
  }
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '150px 100px 200px', marginTop: 50, rowGap: 20,
    }}
    >
      <h3 style={{ textAlign: 'center' }}>식당이름</h3>
      <h3 style={{ textAlign: 'center' }}>종류</h3>
      <h3 style={{ textAlign: 'center' }}>메뉴</h3>
      {
        displayRestaurantList.map(
          (restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />,
        )
      }
    </div>
  );
}
