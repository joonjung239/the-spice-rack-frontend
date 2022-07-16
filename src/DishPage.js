import "./DishPage.css";
import DishCard from "./DishCard";

function DishPage ({spices, cuisines, dishes, shownDishes, setShownDishes, onRemoveDish, editDescription, setDescription, description}) {
    
    

    const cuisineOptions = cuisines.map((cuisine) => {
        return <span id="cuisine-option" value={cuisine.id} key={cuisine.id} onClick={() => filterDishes(cuisine)}>{cuisine.name}</span>
    })

    function filterDishes (cuisine) {
        const filteredDishes = dishes.filter(dish => dish.cuisine_id === cuisine.id)
        setShownDishes(filteredDishes)
    }

    return (
        <div id="background">
            <div id="filter-option">
                {cuisineOptions}
            </div>
            <br></br>
            <div className="grid">
                {shownDishes.map(dish => {
                    return <DishCard cuisines={cuisines}spices={spices} key={dish.id} dish={dish} onRemoveDish={onRemoveDish} editDescription={editDescription} setDescription={setDescription} description={description}/>
            })}
            </div>
        </div> 
    )
}

export default DishPage;