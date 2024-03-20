import React from "react";

function BasketStructure({ id, name, items, image }) {
  return (
    <div>
      <p>ID: {id}</p>
      <img src={image}>Image: </img>
      <p>Name: {name}</p>
      {items && items.length > 0 && (
        <div>
          <strong>Items:</strong>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}, Quantity: {item.quantity}, Price: £{item.price},
                Image: {item.image} 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BasketStructure;
