import ItemStructure from "./ItemStructure";

function ItemDisplay(props) {
    const itemList = []

    for (const item of props.listItems) {
        console.log("Items:", item);
        itemList.push(
            <ItemStructure
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
            />
        )
    }
    return ( 
        <div>
          {itemList}  
        </div>
     );
}

export default ItemDisplay;