import { useSearch } from "../../Context/SearchContext";
import "./searchbar.css";
export const SearchBar = () => {
  const { setUpdatedData, data } = useSearch();
  const newdata = [...data];

  const searchHandler = (value) => {
    return setUpdatedData(
      newdata.filter((item) =>
        item.category.toLowerCase().match(value.toLowerCase())
      )
    );
  };

  return (
    <div className="searchbar">
      <input
        className="nav__input--search"
        type="search"
        placeholder="Search Category"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};
