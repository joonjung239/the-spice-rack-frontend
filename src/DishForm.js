function DishForm ({submitForm, formData, setFormData, cuisines}) {

    function handleChange (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    const cuisineOptions = cuisines.map((cuisine) => {
        return <option value={cuisine.id}>{cuisine.name}</option>
    })

    return (
        <form id="new-dish" onSubmit={(e) => {
            e.preventDefault()
            submitForm()}}>
            <input id="new-name" placeholder="Name" type="text" name="name" value={formData.name} onChange={handleChange}></input>
            <br></br>
            <input id="new-description" placeholder="Description" type="text" name="description" value={formData.description} onChange={handleChange}></input>
            <br></br>
            <input id="new-image-url" placeholder="Image URL" type="text" name="image" value={formData.image} onChange={handleChange}></input>
            <br></br>
            <select id="new-spice" placeholder="Spice" type="text" name="spice_id" value={formData.spice_id} onChange={handleChange}>
                <option value="1">Cumin</option>
                <option value="2">Red Pepper Flakes</option>
                <option value="3">Turmeric</option>
                <option value="4">Black Pepper</option>
                <option value="5">Oregano</option>
            </select>
            <br></br>
            <select id="new-cuisine" placeholder="Cuisine" type="text" name="cuisine_id" value={formData.cuisine_id} onChange={handleChange}>
                {cuisineOptions}
            </select>
            <br></br>
            <button id="add-dish">Drop it in!</button>
        </form>
    )
}

export default DishForm