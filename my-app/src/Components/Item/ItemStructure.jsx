import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";

function ItemStructure(props) {
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    axios
      .patch(`http://localhost:8088/item/add/${props.id}/1`)
      .then(() => {
        navigate("/items");
      })
      .catch((error) => alert('Item has already been added to the basket '));
  };

  return (
    <div id="itemCard">
      <div>
        Name: {props.name} <br />
        Price: £{props.price} <br />
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
