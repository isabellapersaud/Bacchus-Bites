import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Filters from "./Filter";
import NavBar from "./NavBar";
import RecipePage from "./RecipePage";
import Recipe from "../components/Recipe";
import Ingredients from "./Ingredient";
import IngredientPage from "./IngredientPage";
import RecipeDetailsPage from "./RecipeDetailsPage";
import Ingredient from "./Ingredient";
import './SearchBar.css'; 



function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([])
  const [searchText, setSearchText] = useState("");
  const [filteredRecipesArray, setFilteredRecipesArray] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [ingredients, setIngredients] = useState([])
  const [search, setSearch] = useState("");


  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  useEffect(() => {
    fetch("/user")       // link for the authors DB
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  

  useEffect(() => {
    fetch("/recipes")       // link for the books DB
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    fetch("/ingredients")       // link for the books DB
      .then((res) => res.json())
      .then((data) => setIngredients(data));
  }, []);

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  function handleSearch(input){
    return setSearch(input)
  }

  const filteredRecipes = recipes.filter(recipe => {
    return recipe.title.toLowerCase().includes(search.toLowerCase())
  })

  function onLogout() {
    setUser(null)
  }


  return (
    <div className="App">
      <NavBar onLogout = {onLogout} />
      <Header />
      <SearchBar search={search} handleSearch={handleSearch} setSearch = {setSearch} />
      <br />
        <Switch>
          <Route exact path="/about"> 
            <About />
          </Route> 
          <Route exact path="/recipes"> 
            <RecipePage recipes = {filteredRecipes} />
          </Route>
          <Route exact path = "/recipes/:id">
            <RecipeDetailsPage  recipes = {recipes} />
          </Route>
          <Route exact path="/ingredients"> 
            <IngredientPage  ingredients = {ingredients}/>
          </Route> 
          <Route path="/"> 
            <Home />
          </Route> 
          <Route path="/"> 
            <NavBar user={user} onLogout = {onLogout} />
          </Route>
        </Switch>
      </div>
  )

}

export default App;





