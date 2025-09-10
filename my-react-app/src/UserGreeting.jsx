/*
Conditional rendering:
  Allows you to control what gets rendered in your application based on certain conditions.
  Show, hide, or change components.
*/

import propTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage = <h2 className="loggedIn">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="logInPrompt">Please log in to continue</h2>;

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

export default UserGreeting