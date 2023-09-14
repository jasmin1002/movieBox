// import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function SearchBox({ query, onChange }) {
  return (
    <div className="flex items-center border border-1 border-white rounded-xl overflow-hidden w-2/4">
      <input
        type="text"
        id="search"
        value={query}
        onChange={onChange}
        placeholder="What do you want to watch?"
        className="search-box w-full bg-transparent p-2 pl-3 text-white focus:outline-none"
      />
      <label htmlFor="search" className="pr-3">
        <img src="./search-icon.png" alt="search icon" />
      </label>
    </div>
  );
}

export default SearchBox;
