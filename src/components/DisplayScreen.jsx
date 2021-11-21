import React, { useState } from "react";
import { useSelector } from "react-redux";

import DataTable from "./DataTable";

import Header from "./Header";
import SearchPanel from "./SearchPanel";

const DisplayScreen = () => {
  const data = useSelector((state) => state.data);

  const [searchString, setSearchString] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedProvince, setSelectedProvince] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");

  // search bar input
  const onSearchBarHandler = (searchInput) => {
    console.log(searchInput);
    setSearchString(searchInput);
  };

  // select option handlers, for filtering
  const onSelectCityFilterHandler = (city) => {
    console.log(city);
    setSelectedCity(city);
  };

  const onSelectProvinceFilterHandler = (province) => {
    console.log(province);
    setSelectedProvince(province);
  };

  const onSelectRegionFilterHandler = (region) => {
    console.log(region);
    setSelectedRegion(region);
  };

  const dataToRender = data
    // filtering cities
    .filter((item) => {
      if (selectedCity === "All") {
        return item;
      } else {
        return item.city === selectedCity;
      }
    })
    // filtering regions
    .filter((item) => {
      if (selectedRegion === "All") {
        return item;
      } else {
        return item.region === selectedRegion;
      }
    })
    // filtering provinces
    .filter((item) => {
      if (selectedProvince === "All") {
        return item;
      } else {
        return item.province === selectedProvince;
      }
    })
    // for search string
    .filter((list) => list.name.toLowerCase().includes(searchString));

  // TODO:
  // - disable other filters when region / city / province is selected
  // - add sort button on table headers to sort alphabetically
  // - add reset filters button

  return (
    <div className="display-screen right">
      <div className="display-top">
        <Header />
        <SearchPanel
          onSearchBarHandler={onSearchBarHandler}
          onSelectCityFilterHandler={onSelectCityFilterHandler}
          onSelectProvinceFilterHandler={onSelectProvinceFilterHandler}
          onSelectRegionFilterHandler={onSelectRegionFilterHandler}
        />
      </div>
      <DataTable dataToRender={dataToRender} />
    </div>
  );
};

export default DisplayScreen;
