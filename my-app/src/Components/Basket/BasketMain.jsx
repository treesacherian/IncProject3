import axios from "axios";
import { useEffect, useState } from "react";
import DisplayBasket from "./BasketStructure";

function BasketMain() {

    function getBasket () {
        axios.get("http://localhost:3000/baskets/1")
        .then((response)=>{setbaskets(response.data)})
        .catch(console.log)
    }
    useEffect (()=>{getBasket()},[])
    const [baskets, setbaskets] = useState([])

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>"This is a basket apparently” </h1>
            <div>
                <DisplayBasket/>
            </div>
        </div>
    );
}

export default BasketMain;