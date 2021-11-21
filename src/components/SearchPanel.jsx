import React from "react";
import { useSelector } from "react-redux";

const SearchPanel = (props) => {
  const data = useSelector((state) => state.data);
  const provinces = useSelector((state) => state.provinces);
  const regions = useSelector((state) => state.regions);

  // functions for passing data to parent
  const searchHandler = (e) => {
    props.onSearchBarHandler(e);
  };
  const cityFilterHandler = (e) => {
    props.onSelectCityFilterHandler(e);
  };
  const provinceFilterHandler = (e) => {
    props.onSelectProvinceFilterHandler(e);
  };
  const regionFilterHandler = (e) => {
    props.onSelectRegionFilterHandler(e);
  };

  // this will get all cities from sample data
  let citiesList = [];
  data
    .map((data) => data.city)
    .forEach((cityName) => {
      // if city name does not exist in the array, push city name to array
      if (citiesList.indexOf(cityName) === -1) {
        citiesList.push(cityName);
      }
    });
  //add all to start of array
  citiesList.unshift("All");
  //sort array alphabetically
  citiesList.sort();

  return (
    <div className="search-panel-container">
      <div className="searchbar-box">
        <label htmlFor="searchbar">Search</label>
        <input
          type="text"
          placeholder="Enter Name of Hospital..."
          className="searchbar"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>
      <div className="filters-box">
        <div className="select-button cities">
          <label htmlFor="city">City</label>
          <select
            className="filter"
            defaultValue="All"
            onChange={(e) => cityFilterHandler(e.target.value)}
          >
            <option value="" disabled>
              Select City
            </option>

            {citiesList.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="select-button provinces">
          <label htmlFor="province"> Province </label>
          <select
            className="filter"
            defaultValue="All"
            onChange={(e) => provinceFilterHandler(e.target.value)}
            id="province"
          >
            <option value="" disabled>
              Select Province
            </option>
            <option value="" disabled>
              see Cities or Regions for Metro Manila
            </option>
            {provinces.map((province, index) => (
              <option key={index}>{province}</option>
            ))}
          </select>
        </div>
        <div className="select-button regions">
          <label htmlFor="region">Region</label>
          <select
            className="filter"
            defaultValue="All"
            onChange={(e) => regionFilterHandler(e.target.value)}
            id="region"
          >
            <option value="" disabled>
              Select Region
            </option>
            {regions.map((region, index) => (
              <option key={index}>{region}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
