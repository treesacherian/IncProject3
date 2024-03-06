import React, { useState, useEffect } from "react";
import axios from "axios";

function BasketsDisplay() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8088/basket/get")
      .then(response => setBaskets(response.data))
      .catch(error => console.error(error));
  }, []);

  const calculateTotalPrice = (items) => {
    if (!items || items.length === 0) {
      return 0;
    }

    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Basket Summary</h2>

      {baskets.map(basket => (
        <div key={basket.id}>
          <h3>{basket.name}</h3>
          <ul>
            {basket.items.map(basketItem => (
              <li key={basketItem.id}>
                {basketItem.name} - Price: £{basketItem.price}
              </li>
            ))}
          </ul>
          <p>Total Price: £{calculateTotalPrice(basket.items)}</p>
        </div>
      ))}
    </div>
  );
}

export default BasketsDisplay;
