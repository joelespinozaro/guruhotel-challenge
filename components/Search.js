import Button from "./Button";
import SearchInput from "./SearchInput";

export default function Search({
  handleSubmit,
  handleInput,
  errorInput,
}) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <SearchInput
          name="term"
          placeholder="food, restaurant, delivery..."
          variant="Input-primary"
          onChange={handleInput}
          error={errorInput}
        />
        <SearchInput
          name="location"
          placeholder="address, city, state..."
          variant="Input-primary"
          onChange={handleInput}
          error={errorInput}
        />
        <Button
          variant="btn-primary"
          ariaLabel="search"
          role="search"
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
