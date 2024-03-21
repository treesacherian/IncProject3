import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom/dist";
import axios from "axios";

function EditItem() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get("http://localhost:8088/item/get/" + params.id)
            .then((response) => {
                console.log(response)
                setName(response.data.name);
                setImage(response.data.image);
                setPrice(response.data.price);
            })
            .catch(error => console.error(error))
    }, []);


    const editItem = () => {
        axios.put(`http://localhost:8088/item/update/` + params.id, {
            name, image, price
        })
            .then(response =>
                navigate(-1))
            .catch((error) => console.error(error))
    }

    return (
        <div>
            <h1>Edit Item</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                editItem();
            }}>
                <label htmlFor="itemName">Item Name</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    id="itemName"
                    value={name}
                />
                <label htmlFor="itemPrice">Price</label>
                <input
                    type="number" 
                    onChange={(e) => setPrice(e.target.value)}
                    id="itemPrice"
                    value={price}
                    />
                <label htmlFor="itemImage">Image</label>
                <input 
                type="src" 
                onChange={(e) => setImage(e.target.value)}
                id="itemImage"
                value={image}
                />
                <button type="submit">Submit</button>
            </form>
        </div>


    );
}

export default EditItem;