import BasketStructure from "./ItemStructure";

function DisplayBasket(props) {
    const basketList = []

    for (const item of props.listItems) {
        console.log("Items:", item);
        basketList.push(
            <BasketStructure
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
            />
        )
    }
    return ( 
        <div>
          {basketList}  
        </div>
     );
}

export default DisplayBasket;