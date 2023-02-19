import { RestaurantType } from '../types/restaurantTypes';
import Menu from './Menu';

type PropTypes = {
    restaurant: RestaurantType;
}

export default function Restaurant({ restaurant }: PropTypes) {
  return (
    <>
      <div>{restaurant.name}</div>
      <div>{restaurant.category}</div>
      <div>
        {
          restaurant.menu.map((menu) => <Menu key={menu.id} menu={menu} />)
        }
      </div>
    </>
  );
}
