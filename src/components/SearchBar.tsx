type SearchBarProps = {
    filterText: string;
    setFilterText: (value: string) => void;
}

export default function SearchBar({ filterText, setFilterText } :SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div>
      <label htmlFor="input-search">검색</label>
      <input
        id="input-search"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
