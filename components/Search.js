import SearchIcon from './Icons/SearchIcon';

export default function Search() {
  return (
    <>
      <div className="search">
        <form className="search__form">
          <label id="lbl-words" hidden>
            Words
          </label>
          <input
            className="search__form--input"
            type="text"
            aria-labelledby="lbl-words"
            placeholder="Search words"
          ></input>
          <label id="lbl-location" hidden>
            Location
          </label>
          <input
            className="search__form--input"
            type="text"
            aria-labelledby="lbl-location"
            placeholder="Search locations"
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
    </>
  );
}
