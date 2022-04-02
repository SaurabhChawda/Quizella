import { createContext, useEffect, useState, useContext } from "react";
import { useData } from "./DataContext";
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const { data } = useData();
  const newdata = [...data];
  const [updatedData, setUpdatedData] = useState();

  useEffect(() => {
    setUpdatedData(newdata);
  }, [data]);

  return (
    <SearchContext.Provider value={{ updatedData, setUpdatedData, newdata }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);
export { useSearch, SearchProvider };
