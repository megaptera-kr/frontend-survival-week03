export type MenuType = {
    id: string;
    name: string;
    price: number;
}

export type RestaurantType = {
    id: string;
    category: string;
    name: string;
    menu: MenuType[];
}
