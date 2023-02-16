import { Restaurant } from '../types';

function RestaurantTable({ restaurants }:{restaurants:Restaurant[]}) {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <table key={restaurant.id}>
          <thead>
            <tr>
              <th>{restaurant.name}</th>
            </tr>
          </thead>
          <tbody>
            {restaurant.menu.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default RestaurantTable;
