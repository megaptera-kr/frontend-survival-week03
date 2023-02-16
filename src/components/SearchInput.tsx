import { SearchTermProps } from '../types';

function SearchInput({ searchTerm, setSearchTerm }:SearchTermProps) {
  return (
    <div>
      <input
        type="text"
        name="검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
