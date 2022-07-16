import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./Header.js";
import DishPage from "./DishPage.js";
import DishForm from "./DishForm.js";
import {Switch, Route} from "react-router-dom";
import CuisineForm from "./CuisineForm.js";

function App() {
  
  const [dishes, setDishes] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/dishes")
    .then((r) => r.json())
    .then((data) => {
      setDishes(data)
      setShownDishes(data)})}, [])
  
  const [shownDishes, setShownDishes] = useState(dishes)
  
  const [spices, setSpices] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/spices")
    .then((r) => r.json())
    .then((data) => setSpices(data))}, [])

  const initialValues = {
    name: "",
    description: "",
    image: "",
    spice_id: "",
    cuisine_id: ""
  }
  const [formData, setFormData] = useState(initialValues)
  const [description, setDescription] = useState("")
  function submitForm () {
    fetch("http://localhost:9292/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData})
    })
    .then(response => response.json())
    .then(data => setDishes([...dishes, data]))

    setFormData(initialValues)
  }
  function onRemoveDish(deletedDish) {
    const dishesToDisplay = dishes.filter(dish => dish !== deletedDish)
    setDishes(dishesToDisplay)
  }
  function editDescription (id) {
    
    fetch("http://localhost:9292/dishes/" + id, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({description: description})
    })
    .then(response => response.json())
    .then(data => updateDishes(data))

    setDescription("")
  }

  const [cuisines, setCuisines] = useState([])
  const [cuisineFormData, setCuisineFormData] = useState({})
  useEffect(() => {
      fetch("http://localhost:9292/cuisines")
      .then(response => response.json())
      .then(data => setCuisines(data))
    }, [])
  
  function submitCuisineForm () {
    fetch("http://localhost:9292/cuisines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...cuisineFormData})
    })
    .then(response => response.json())
    .then(data => setCuisines([...cuisines, data]))

    setCuisineFormData({})
  }

  function updateDishes (updatedDish) {
    const updatedDishes = dishes.map(dish => {
      if (dish.id === updatedDish.id) {
        return updatedDish
      } else {
        return dish
      }
    })
    setDishes(updatedDishes)
  }

  return (
    <div className="App">
      <Header shownDishes={shownDishes} setShownDishes={setShownDishes} dishes={dishes}/>
      <Switch>
      <Route path="/dishform">
        <DishForm cuisines={cuisines} submitForm={submitForm} formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/cuisineform">
        <CuisineForm submitCuisineForm={submitCuisineForm} cuisineFormData={cuisineFormData} setCuisineFormData={setCuisineFormData}/>
      </Route>
      <Route path="/">
        <DishPage spices={spices} shownDishes={shownDishes} setShownDishes={setShownDishes} cuisines={cuisines} dishes={dishes} setDishes={setDishes} onRemoveDish={onRemoveDish} editDescription={editDescription} setDescription={setDescription} description={description}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;