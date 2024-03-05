import PropTypes from 'prop-types';

function BasketStructure(props) {

    return (
        <div className='col'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>Price: £{props.price}</h5>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>  {props.name}</li>
                            <li className='list-group-item'>  {props.quantity}</li>
                        </ul>
                        {/* <button className='btn btn-primary ' onClick={handleEdit}>Remove item</button>  */}
                        {/* {buttonDisplay()} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

BasketStructure.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default BasketStructure;