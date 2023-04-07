import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Search from "./Search";
import Filters from "./Filter";
import NavBar from "./NavBar";
import RecipePage from "./RecipePage";
import Recipe from "../components/Recipe";
import RecipeList from "../components/RecipeList";
import IngredientPage from "./IngredientPage";
import Ingredient from "../components/Ingredient";
import IngredientList from "../components/IngredientList";


function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([])
  const [searchText, setSearchText] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [ingredients, setIngredients] = useState([])
  // const [theme, setTheme] = useState('dark')

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
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
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(recipes)

  if (!user) return <Login onLogin={setUser} />;

  function searchRecipe() {
    if (searchText.length > 0) {
      return recipes.filter((recipe)=> 
        recipe.toLowerCase().includes(searchText.toLowerCase())
      )
    } else {
      return recipes
    }
  }
  function handleSearch(input) {
    setSearchText(input)
  }
  const handleCategory = (e) => {
    // console.log(e.target.value)
    setCategoryName(e.target.value);
  }
  function filterCategory() {
    // filter set to all or not filtered
    if (categoryName === 'All' || categoryName === '') {
      // doing this instead of returning recipe gives 
      // user 2 options: searched recipes or all recipes 
      return searchRecipe()
    } 
    else {
      return recipes.filter(recipe => recipe.category === categoryName)
    }
  } 
  function onLogout() {
    setUser(null)
  }






  return (
    <div className="App">
      <Header />
      <NavBar onLogout ={onLogout }/>
      <Search searchText={searchText} handleSearch={handleSearch}/>
      <Filters handleCategory={handleCategory} />
        <Switch>
          <Route path="/recipes"> 
            <RecipePage recipes = {recipes}/>
          </Route> 
          <Route path="/ingredients"> 
            <IngredientPage ingredients = {ingredients}/>
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


{/* <Route exact path='/recipes/:id' element={<Recipe recipe = {recipe}/>}/> */}


  {/* <div style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg")`
      }} className={`App ${theme}`}>
        <button className="btn" style={{ float: 'right' }} onClick={toggleTheme}>Toggle Theme</button>
        <Navigation style={{ float: 'right' }} />
      </div> */}