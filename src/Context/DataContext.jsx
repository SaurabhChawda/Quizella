import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        await axios
          .get("/api/data")
          .then((response) => setdata(response.data.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log("data from network", data);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };