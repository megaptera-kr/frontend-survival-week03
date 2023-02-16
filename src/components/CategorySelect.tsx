import { SelectCategoryProps } from '../types';

function CategorySelect({ categories, select, setSelect }:SelectCategoryProps) {
  return (
    <div>
      {categories.map((category) => (
        <label htmlFor={category} key={category}>
          <input type="radio" name="category" id={category} value={category} checked={category === select} onChange={(e) => setSelect(e.target.value)} />
          {category}
        </label>
      ))}
    </div>
  );
}

export default CategorySelect;
