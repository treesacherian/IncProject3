import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function CreateItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate("");
    

    return ( 
        <form onSubmit={e =>{
            e.preventDefault()
            axios.post("http://localhost:3000/items", {name, quantity, price})
                .then(response => {
                    setName("");
                    setQuantity("");
                    setPrice("");
                    navigate("/items");
                })
                .catch(err => console.error(err))
        }}>
            <div className = "container" id="CreateItem">
                <div className="row">
                    <div className="col">
                        <div label htmlfor="name" className="form-label ">Name</div>
                        <input type="text" id="name" size="20" value={name} onChange={e => setName(e.target.value)} required/>
                    </div>
                    <div className="col ">
                        <div label htmlfor="Quantity" className="form-label ">Quantity</div>
                        <input type="number" id="quantity" size="5" value={quantity} onChange={e => setQuantity(e.target.value)} required/>
                    </div>
                    <div className="col">
                        <div label htmlfor="price" className="form-label ">Price</div>
                        <input type="number" id="price" size="5" value={price} onChange={e => setPrice(e.target.value)} required/>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <button type="submit" id="SubmitCreateItem"> Submit </button>
            </div>
        
        </form>

    );
}

export default CreateItem;