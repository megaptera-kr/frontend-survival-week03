import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
    filteredRestaurants: Restaurant[]
}

export default function RestaurantTable({ filteredRestaurants }: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={7}>오늘의 메뉴</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}
