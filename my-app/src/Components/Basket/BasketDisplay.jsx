import React, { useState, useEffect } from "react";
import axios from "axios";

function BasketsDisplay() {
    const [baskets, setBaskets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/baskets")
            .then(response => setBaskets(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Baskets Display</h2>

            {baskets.map(basket => (
                <div key={basket.id}>
                    <h3>{basket.name}</h3>
                    <ul>
                        {basket.items.map(basketItem => (
                            <li key={basketItem.id}>
                                {basketItem.quantity}x {basketItem.name} - Price: {basketItem.price}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default BasketsDisplay;
