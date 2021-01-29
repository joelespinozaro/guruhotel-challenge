import SearchIcon from './Icons/SearchIcon';

export default function Search() {
  return (
    <>
      <div className="search">
        <form className="search__form">
          <input
            className="search__form--input"
            type="text"
            placeholder="What place to visit today?"
          ></input>
          <button className="search__form--button" type="submit">
            <SearchIcon stroke={'#fff'} width={26} height={26} />
          </button>
        </form>
      </div>
    </>
  );
}
