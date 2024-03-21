import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams} from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import EditItem from "./EditItem";

function ItemStructure(props) {
  // const navigate = useNavigate();
  // const handleEdit = () => {
  //   navigate("/editItem/" +props.id);}
  
  //Variables for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Variables for edit item
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const handleAddToBasket = () => {
    axios
      .patch(`http://localhost:8088/item/add/${props.id}/1`)
      .then(() => {
        navigate("/items");
      })
      .catch((error) => alert("Item has already been added to the basket "));
  };

  const deleteItem = () => {
    axios
      .delete(`http://localhost:8088/item/delete/${props.id}`)
      .then(() => {})
      .catch((error) => alert("Item has already been deleted "));
  };

  //prefills input field in edit popup with existing information
  useEffect(() => {
    axios.get(`http://localhost:8088/item/get/${props.id}`)
        .then((response) => {
            console.log(response)
            setName(response.data.name);
            setImage(response.data.image);
            setPrice(response.data.price);
        })
        .catch(error => console.error(error))
}, []);

const editItem = () => {
  axios.put(`http://localhost:8088/item/update/${props.id}`, {
      name, image, price
  })
      .then(response =>{
        console.log(response)
      })
      .catch((error) => console.error(error))
}

const [items, setItems] = useState([]);
function getItems() {
  axios.get("http://localhost:8088/item/get")
    .then((response) => { setItems(response.data) })
    .catch(console.log);
}

  useEffect(() => {
    getItems();
  }, []);


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
        {/* <button type="button" onClick={handleEdit} className="btn btn-primary">Edit</button> */}
        <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={(e) => {
                e.preventDefault();
                editItem();
            }}>
                <label htmlFor="itemName">Item Name</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    id="itemName"
                    value={name}
                />
                <label htmlFor="itemPrice">Price</label>
                <input
                    type="number" 
                    onChange={(e) => setPrice(e.target.value)}
                    id="itemPrice"
                    value={price}
                    />
                <label htmlFor="itemImage">Image</label>
                <input 
                type="src" 
                onChange={(e) => setImage(e.target.value)}
                id="itemImage"
                value={image}
                />
                <button type="submit" onClick={handleClose}>Submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </>
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
  image: PropTypes.string,
};

export default ItemStructure;
