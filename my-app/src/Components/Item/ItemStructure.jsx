import PropTypes from "prop-types";
import { useNavigate } from "react-router";

function ItemStructure(props) {
    console.log(props);
    const navigate = useNavigate();

    return (
        <div id="itemCard">
            <div>
            Name: {props.name} <br/>
            Quantity: {props.quantity} <br/>
            Price: £{props.price} <br/>
            </div>
            <button type="submit">Add to basket</button>
        </div>
    );
}

ItemStructure.propTypes = {
    name: PropTypes.string.isRequired,
    Quantity: PropTypes.number.isRequired,
    Price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}

export default ItemStructure;

/* ffc = generates a function with return and export usc = same but with usestate  */