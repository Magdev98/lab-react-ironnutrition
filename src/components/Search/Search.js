import { /* Divider, */ Input } from 'antd';
import React from 'react';

// Iteration 5
function Search(props) {
  const { searchBar, setsearchBar } = props;

  const handleSearch = (e) => {
    setsearchBar(e.target.value);
  };

  return (
    <>
      {/* <Divider>Search</Divider> */}
      <label htmlFor="search">Search</label>
      <Input
        value={searchBar}
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
