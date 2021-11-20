import React from "react";

const SearchPanel = () => {
  //here functions for search input and filters
  // onSearchInput() {
  // }

  return (
    <div className="search-container">
      <div className="searchbar-box">
        Search
        <input
          type="text"
          placeholder="Search..."
          className="searchbar"
          // onChange={}
        />
      </div>
      <div className="filters-box">
        <div className="select-button">
          City
          <select className="filter">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="select-button">
          Province
          <select className="filter">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="select-button">
          Region
          <select className="filter">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
