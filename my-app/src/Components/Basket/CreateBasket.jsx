import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBasket() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8088/basket/get")
      .then((response) => setBaskets(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8088/basket/create", { name, items: [] })
      .then((response) => {
        setName("");
        navigate("/items");
      })
      .catch((err) => console.error(err));
  };

  const BasketExists = baskets.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="container" id="CreateBasket">
        <div className="row">
          <div className="col">
            <div label htmlFor="name" className="form-label">
              Name
            </div>
            <input
              type="text"
              id="name"
              size="20"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={BasketExists} 
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <button type="submit" id="SubmitCreateBasket" disabled={BasketExists}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateBasket;
