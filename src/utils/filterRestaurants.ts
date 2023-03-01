import Restaurant from '../types/Restaurant';

export default function filterRestaurants(
  restaurants: Restaurant[],
  filterText: string,
) {
  const query = filterText.trim();

  if (!query) {
    return restaurants;
  }

  return restaurants
    .filter((restaurant) => restaurant.name.includes(query));
}
