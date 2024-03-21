import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";

function ItemStructure(props) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/editItem/" +props.id);
  }

  const handleAddToBasket = () => {
    axios
      .patch(`http://localhost:8088/item/add/${props.id}/1`)
      .then(() => {
        navigate("/items");
      })
      .catch((error) => alert('Item has already been added to the basket '));
  };

  const deleteItem = () => {
    axios
      .delete(`http://localhost:8088/item/delete/${props.id}`)
      .then(() => {
      })
      .catch((error) => alert('Item has already been deleted '));
  };

  const editItem = () => {
    axios.put(`http://localhost:8088/item/update/${props.id}`)
    .then (() => {
    })
    .catch((error) => alert('Edit item'))
  }

  return (
    <div className="d-inline-flex" style={{ margin: "20px", maxWidth: "50%" }}>
    <div id="itemCard" className="col">
      <div class="card">
        <div className="card-body">
        <img id="image" src={props.image} alt="N/A" style={{width: "200px", height: "200px"}}></img>
        <ul class="list-group list-group-flush card-text">
          <li class="list-group-item">Name: {props.name} </li>
          <li class="list-group-item">Price: £{props.price} </li>
        </ul>
        <button type="button" onClick={handleAddToBasket} className="btn btn-success ">
          Add to basket
        </button>
        <button type="button" onClick={deleteItem} className="btn btn-danger">Delete</button>
        <button type="button" onClick={handleEdit} className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
    </div>
  );
}

ItemStructure.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default ItemStructure;
