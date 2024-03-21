import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDisplay from "./ItemDisplay";
import SearchBox from "./SearchBox";

function PageForItem() {
  const [items, setItems] = useState([]);
  const [filterItemName, setFilterItemName] = useState("");

  function getItems() {
    axios
      .get("http://localhost:8088/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h1>Groceries</h1>
      <SearchBox filter={filterItemName} setFilter={setFilterItemName} />
      <div id="ItemDisplay">
        <ItemDisplay
          listItems={items.filter((item) =>
            item.name.toLowerCase().includes(filterItemName.toLowerCase())
          )}
        />
      </div>
    </div>
  );
}

export default PageForItem;
