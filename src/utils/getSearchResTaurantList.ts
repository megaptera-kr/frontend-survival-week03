import { RestaurantType } from '../types/restaurantTypes';

export default function getSearchResTaurantList(
  restaurantList:RestaurantType[],
  searchName: string,
) {
  const regexp = new RegExp(searchName, 'g');
  return restaurantList.filter(({ name }) => regexp.test(name.trim()));
}
