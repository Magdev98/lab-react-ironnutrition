import { /* Divider, */ Input } from 'antd';
import React, { useState } from 'react';

// Iteration 5
function Search(searchFood) {
  const [searchBar, setsearchBar] = useState('');

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
