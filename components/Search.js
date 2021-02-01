import SearchIcon from './Icons/SearchIcon';

export default function Search({
  handleSubmit,
  handleInput,
  errorInput,
}) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <label id="lbl-term" hidden>
          Term
        </label>
        <input
          aria-labelledby="lbl-term"
          className={`search__form--input ${
            errorInput.term === true && 'error-input'
          }`}
          name="term"
          onChange={handleInput}
          placeholder={`${
            errorInput.term === true ? '⚠' : ''
          } Write a term`}
          type="text"
        ></input>
        <label id="lbl-location" hidden>
          Location
        </label>
        <input
          aria-labelledby="lbl-location"
          className={`search__form--input ${
            errorInput.location === true && 'error-input'
          }`}
          name="location"
          onChange={handleInput}
          placeholder={`${
            errorInput.location === true ? '⚠' : ''
          } Write a location`}
          type="text"
        ></input>
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
