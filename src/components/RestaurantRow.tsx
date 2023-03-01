import Restaurant from '../types/Restaurant';
import MenuInfo from './MenuInfo';

type RestaurantRowProps = {
    restaurant: Restaurant
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr>
      <td>
        {restaurant.name}
      </td>
      <td>
        {restaurant.category}
      </td>
      <td>
        <ul>
          {restaurant.menus.map((menu) => (
            <MenuInfo
              key={menu.id}
              menu={menu}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}
