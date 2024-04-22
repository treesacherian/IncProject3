import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function BasketsDisplay() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8089/basket/get")
      .then((response) => setBaskets(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteBasket = () => {
    axios.delete(`http://localhost:8089/basket/delete/1`).then(() => {});
  };

  const calculateTotalPrice = (items) => {
    if (!items || items.length === 0) {
      return 0;
    }

    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="card-group flex-container text-center ">
      {baskets.map((basket) => (
        <Card key={basket.id} className="col-sm-6 col-md-4 col-lg-3 m-4">
          <Card.Body>
            <Card.Title>{basket.name}'s basket</Card.Title>
            {basket.items.map((basketItem) => (
              <div key={basketItem.id}>
                <img
                  style={{ height: "100px", margin: "15px" }}
                  src={basketItem.image}
                  alt="placeholder text"
                ></img>
                {basketItem.name} - Price: £{basketItem.price}
              </div>
            ))}
            <p>Total Price: £{calculateTotalPrice(basket.items)}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BasketsDisplay;
