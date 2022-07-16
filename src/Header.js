import "./Header.css";
import {NavLink} from "react-router-dom";

function Header ({dishes, setShownDishes}) {

    return (
        <div id="header">
            <br></br>
            <div id="main-header">The Spice Rack</div>
            <br></br>
            <NavLink to="/">
            <span id="title" onClick={() => setShownDishes(dishes)}>
                Spice It Up!
            </span>
            </NavLink>
            <NavLink to="/dishform">
                <span id="new-dish-button">Add a Dish!</span>
            </NavLink>
            <NavLink to="/cuisineform">
                <span id="new-cuisine-button">Add a Cuisine!</span>
            </NavLink>
        </div>
    )
};

export default Header;