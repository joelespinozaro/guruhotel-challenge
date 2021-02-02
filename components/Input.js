const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function Input({ name, handleInput, errorInput }) {
  return (
    <>
      <label id={`lbl-${name}`} hidden={true}>
        {capitalize(name)}
      </label>
      <input
        aria-labelledby={`lbl-${name}`}
        className={`search__form--input ${
          errorInput[name] === true && 'error-input'
        }`}
        name={name}
        onChange={handleInput}
        placeholder={`${
          errorInput[name] === true ? '⚠' : ''
        } Write a ${name}`}
        type="text"
      ></input>
    </>
  );
}

export default Input;
