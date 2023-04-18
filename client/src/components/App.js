import React, { useEffect, useState, useContext } from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import RecipePage from "./RecipePage";
import Recipe from "../components/Recipe";
import Ingredients from "./Ingredient";
import IngredientPage from "./IngredientPage";
import RecipeDetailsPage from "./RecipeDetailsPage";
import Ingredient from "./Ingredient";
import {UserContext} from "./UserContext"
import "./styles.css"; 
import './SearchBar.css'; 


function App() {
  const [user, setUser] = useContext(UserContext);
  const [recipes, setRecipes] = useState([])
  const [searchText, setSearchText] = useState("");
  const [filteredRecipesArray, setFilteredRecipesArray] = useState([]);
  const [ingredients, setIngredients] = useState([])
  const [search, setSearch] = useState("");
  const [categoryName, setCategoryName] = useState("")
  // const [theme, setTheme] = useState("light");


  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  
  useEffect(() => {
    fetch("/user")       
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  

  useEffect(() => {
    fetch("/recipes")       
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    fetch("/ingredients")      
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

  const handleCategory = (categoryName) => {
    setCategoryName(categoryName);
}
function filterCategory() {
  if (categoryName === 'All' || categoryName === '') {
      return filteredRecipes;
  } else {
      return filteredRecipes.filter((recipe) => recipe.category === categoryName);
  }
}

  function onLogout() {
    setUser(null)
  }


  return (
    <div className= "App">
      <Header user = {user} setUser = {setUser}  onLogout = {onLogout}/>   
      <SearchBar search={search} handleSearch={handleSearch} setSearch = {setSearch} />
      <Filter handleCategory={handleCategory} />  
      <br />
        <Switch>
          <Route exact path="/about"> 
            <About />
          </Route> 
          <Route exact path="/recipes"> 
          <RecipePage 
            recipes = {filterCategory()}  />
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
        </Switch>
      </div>
  )

}

export default App;

{/* <div className={`background ${theme} App`}> */}