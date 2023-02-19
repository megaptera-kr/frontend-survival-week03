import { MenuType } from '../types/restaurantTypes';

type PropTypes = {
    menu: MenuType;
}

export default function Menu({ menu }: PropTypes) {
  return (
    <li>
      {menu.name}
      (
      {menu.price}
      )
    </li>
  );
}
