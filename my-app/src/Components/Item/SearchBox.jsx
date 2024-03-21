import React from "react";

function SearchBox({ filter, setFilter }) {
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleFilter}
      value={filter}
      placeholder="Search for Items"
      className="form-control"
    />
  );
}

export default SearchBox;
