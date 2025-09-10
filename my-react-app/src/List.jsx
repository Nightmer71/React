import propTypes from "prop-types";

function List(props){

    const itemList = props.items;
    const category = props.category;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sorting alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // Numerical order
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse numerical

    const listItems = itemList.map(item  => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number,
                                              name: propTypes.string,
                                              calories: propTypes.number   
    })),
}

export default List