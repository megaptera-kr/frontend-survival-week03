export interface Menu{
  id:string;
  name:string;
  price:number;
}

export interface Restaurant{
  id:string;
  category:string;
  name:string;
  menu:Menu[]
}

export type SearchTermProps = {
  searchTerm:string;
  setSearchTerm:(value:string) => void;
}

export type SelectCategoryProps = {
  categories:string[]
  select:string
  setSelect:(value:string)=>void
}
