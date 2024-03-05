import React from "react";
import CreateBasket from "./CreateBasket";
import BasketDisplay from "./BasketDisplay";

function BasketPage() {
  return (
    <div>
      <h1>Basket Page</h1>
        <CreateBasket />
        <BasketDisplay />
    </div>
  );
}

export default BasketPage;
