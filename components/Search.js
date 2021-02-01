import SearchIcon from './Icons/SearchIcon';
import Input from './Input';

export default function Search({
  handleSubmit,
  handleInput,
  errorInput,
}) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <Input
          name="term"
          errorInput={errorInput}
          handleInput={handleInput}
        />
        <Input
          name="location"
          errorInput={errorInput}
          handleInput={handleInput}
        />
        <button
          className="search__form--button"
          aria-label="search"
          type="submit"
        >
          <SearchIcon stroke={'#fff'} width={26} height={26} />
        </button>
      </form>
    </div>
  );
}
