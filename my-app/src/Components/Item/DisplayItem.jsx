import PropTypes from "prop-types";

function DisplayItem() {
    return (
        <div id="itemCard">Item: {}
            <div>
            Name: {} <br/>
            Quantity: {} <br/>
            Price: {} <br/>
            </div>
        </div>
    );
}

DisplayItem.propTypes = {
    name: PropTypes.string.isRequired,
    Quantity: PropTypes.number.isRequired,
    Price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}

export default DisplayItem;

{/* ffc = generates a function with return and export usc = same but with usestate  */}