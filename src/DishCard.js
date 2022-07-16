import React, {useState} from "react";
import "./DishCard.css";

function DishCard ({cuisines, dish, onRemoveDish, editDescription, setDescription, description, spices}) {
    
    
    function handleRemove(e) {
        e.stopPropagation()
        fetch("http://localhost:9292/dishes/" + dish.id, {
            method:'DELETE'
        })
        onRemoveDish(dish)
    }
    const [toggle, setToggle] = useState(false)
    const [descriptionToggle, setDescriptionToggle] = useState(false)
    
    function handleEdit(e) {
        e.stopPropagation()
        setToggle(toggle ? false : true)
    }

    function handleDescription(e) {
        e.stopPropagation()
        setDescriptionToggle(descriptionToggle ? false : true)
        setToggle(false)
    }

    function submitDescription (e) {
        const newDescription = e.target.value;
        setDescription(newDescription)
    }
   
    return (
        <div id="dish">
            <div id="dish-name">{dish.name}</div>
            <img id="dish-image" src={dish.image} alt="" onClick={handleDescription}/>
            <div id="dish-details" style={{ display: descriptionToggle ? "block" : "none" }}>
                <br></br>
                <div id="dish-description"><strong>Description: </strong>{dish.description}</div>
                <div id="dish-cuisine"><strong>Cuisine: </strong>{cuisines[dish.cuisine_id - 1].name}</div>
                <div id="dish-spice"><strong>Spice: </strong>{spices[dish.spice_id - 1].name}</div>
                <div id="spice-description"><strong>Spice Flavor Profile: </strong>{spices[dish.spice_id - 1].flavor_profile}</div>
                <button onClick={handleRemove} className="deletebtn">Delete Dish</button>
                <button onClick={handleEdit} className="edit-btn">Edit Description</button>
            </div>
            <form id="edit-description-form"  onSubmit={(e) => {
                e.preventDefault()
                editDescription(dish.id)
            }} style={{ display: toggle ? "block" : "none" }}>
                <input id="edit-description-input" placeholder="Put description here" name="description" type="text" value={description} onChange={submitDescription}></input>
                <button>Change It Up</button>
            </form>
        </div>
    )
}


export default DishCard