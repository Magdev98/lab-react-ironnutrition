import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 5
function Search(props) {
  const [searchBar, setSearchBar] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
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
