import DisplayItem from "./DisplayItem";

function PageForItem() {
    return ( 
        <div>
            <h1>Groceries</h1>
            <div id="ItemDisplay">
                <DisplayItem/>
            </div>
        </div>
     );
}

export default PageForItem;