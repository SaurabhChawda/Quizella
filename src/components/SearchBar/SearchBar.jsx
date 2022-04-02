import { useEffect, useState } from "react";
import { useSearch } from "../../Context/SearchContext";
import "./searchbar.css";
export const SearchBar = () => {
  const { setUpdatedData, data } = useSearch();
  const [filteredtext, setFilterredtext] = useState("");
  const newdata = [...data];

  useEffect(() => {
    if (filteredtext === "") {
      return setUpdatedData(newdata);
    } else {
      return setUpdatedData(
        newdata.filter((item) =>
          item.category.toLowerCase().match(filteredtext.toLowerCase())
        )
      );
    }
  }, [filteredtext]);

  return (
    <div className="searchbar">
      <input
        className="nav__input--search"
        type="search"
        placeholder="Search Category"
        onChange={(e) => setFilterredtext(e.target.value)}
      />
    </div>
  );
};
