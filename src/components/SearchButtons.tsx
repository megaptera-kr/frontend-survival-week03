type SearchButtonsProps = {
    handleClickSelectCategory: (value: string) => void
}

export default function SearchButtons({ handleClickSelectCategory }: SearchButtonsProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;

    handleClickSelectCategory(value);
  };

  return (
    <div>
      <button
        type="button"
        value=""
        onClick={handleClick}
      >
        전체
      </button>
      <button
        type="button"
        value="중식"
        onClick={handleClick}
      >
        중식
      </button>
      <button
        type="button"
        value="한식"
        onClick={handleClick}
      >
        한식
      </button>
      <button
        type="button"
        value="일식"
        onClick={handleClick}
      >
        일식
      </button>
    </div>
  );
}
