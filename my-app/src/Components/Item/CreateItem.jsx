import { useState } from "react";
import { useNavigate } from "react-router-dom"

function CreateItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate("");

    return ( 
        
    );
}

export default CreateItem;