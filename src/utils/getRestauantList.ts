import { RestaurantType } from '../types/restaurantTypes';

type PreType = {
    [key: string]: RestaurantType[];
}
export default function getRestauantListByCategory(
  categoryList: string[],
  restaurantList: RestaurantType[],
) {
  return restaurantList.reduce((pre, curr) => {
    pre[curr.category].push(curr);
    return pre;
  }, categoryList.reduce((pre, curr) => ({ ...pre, [curr]: [] }), {}) as PreType);
}
