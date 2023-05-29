import "./App.css";
import Navbar from "./components/navbar";
import React, { useState, useEffect, useContext } from "react";
import { ListCard } from "./components/listcard";
import { Context } from "./context";


const App = () => {
  const { isDark } = useContext(Context);
  const [countries, setCountries] = useState([]);
  const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };
  useEffect(() => {
    getData("https://restcountries.com/v3.1/all").then((data) =>
      setCountries(data)
    );
  }, []);
  console.log(countries);
  return (
    <div className={isDark ? "app light-mode" : "app dark-mode"}>
      <Navbar />
      <ListCard items={countries}/>
    </div>
  );
};

export default App;
