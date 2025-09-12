/*
click event:
    An interaction when a user clicks on a specific elements.
    We can respond to clicks by passing a callback to the onClick event handler.
*/

import { number } from "prop-types";

function Button(){

    let count = 0;
    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return(<button onDoubleClick={(e) => handleClick(e)}>Click Me 😁</button>);
}

export default Button