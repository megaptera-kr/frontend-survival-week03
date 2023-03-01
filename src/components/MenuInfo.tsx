import Menu from '../types/Menu';

type MenuInfoProps = {
    menu: Menu
}
export default function MenuInfo({ menu }: MenuInfoProps) {
  return (
    <li>
      {`${menu.name}(${menu.price}원)`}
    </li>
  );
}
