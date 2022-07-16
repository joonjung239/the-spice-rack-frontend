function CuisineForm ({submitCuisineForm, cuisineFormData, setCuisineFormData}) {

    function handleChange (e) {
        const {name, value} = e.target;
        setCuisineFormData({...cuisineFormData, [name]: value})
    }

    return (
        <form id="new-dish" onSubmit={(e) => {
            e.preventDefault()
            submitCuisineForm()}}>
            <input id="add-cuisine-input" text="name" onChange={handleChange} name="name" placeholder="Add Some Diversity" value={cuisineFormData.name}></input>
            <button>Mix it up!</button>
        </form>
    )
}

export default CuisineForm