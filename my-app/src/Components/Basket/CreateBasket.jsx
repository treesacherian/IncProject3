import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBasket() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/baskets", { name, items: [] })
      .then((response) => {
        setName("");
        navigate("/basket");
      })
      .catch((err) => console.error(err));
  };

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
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <button type="submit" id="SubmitCreateBasket">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateBasket;
