import "./searchbar.css";
export const SearchBar = () => {
  return (
    <div className="searchbar">
      <input
        className="nav__input--search"
        type="search"
        placeholder="Search Category"
      />
    </div>
  );
};
