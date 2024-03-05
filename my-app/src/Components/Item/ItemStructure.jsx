import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";

function ItemStructure(props) {
  const [baskets, setBaskets] = useState([]);
  const [selectedBasketId, setSelectedBasketId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/baskets").then((response) => {
      setBaskets(response.data);
    });
  }, []);

  const handleBasketChange = (e) => {
    setSelectedBasketId(e.target.value);
  };

  const handleAddToBasket = () => {
    // Find the selected basket
    const selectedBasket = baskets.find((basket) => basket.id === Number(selectedBasketId));

    if (selectedBasket && Array.isArray(selectedBasket.items)) {
      // Add the item to the selected basket's items
      selectedBasket.items.push({
        id: props.id,
        name: props.name,
        quantity: props.quantity,
        price: props.price,
      });

      axios
        .put(`http://localhost:3000/baskets/${selectedBasket.id}`, selectedBasket)
        .then(() => {
          navigate("/items"); 
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div id="itemCard">
      <div>
        Name: {props.name} <br />
        Quantity: {props.quantity} <br />
        Price: £{props.price} <br />
      </div>
      <div>
        <label htmlFor="basketSelect">Select Basket:</label>
        <select id="basketSelect" onChange={handleBasketChange} value={selectedBasketId || ""}>
          <option value="" disabled>
            Choose a basket
          </option>
          {baskets.map((basket) => (
            <option key={basket.id} value={basket.id}>
              {basket.name}
            </option>
          ))}
        </select>
      </div>
      <button type="button" onClick={handleAddToBasket}>
        Add to basket
      </button>
    </div>
  );
}

ItemStructure.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ItemStructure;
