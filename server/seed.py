#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker


# Local imports
from app import app
from models import db, User, Recipe, Ingredient, Comment, RecipeIngredients, db

fake = Faker()

def make_user():
    User.query.delete()

    users_obj = []

    for i in range(10):
    # for i in range(10):
        user = User(
            email= fake.email(),
            username= fake.name(),
        )
        
        user.password_hash = user.username + 'password'

        users_obj.append(user)
    
    db.session.add_all(users_obj)
    db.session.commit()


def make_recipe():

    Recipe.query.delete()

    recipes_obj = [
        Recipe(id = 1, title = "Sweet Bake", likes="0", category = "Breakfast", description = " Buttery Heaven ", instructions = "In a large bowl, combine 2 ½ cups of flour, 2 ½ tbsp of baking powder, ½ stick of softened butter, and 5 tbsp of granulated sugar. Once all the dry components are thoroughly mixed, heat ½ a cup of carnation milk in the microwave and slowly add it to your dry mixture. Using your hands, knead together the flour mixture, adding warm water to form a dough that isn't pasty. Place the dough in a bowl and lightly spread a tablespoon of butter along the surface of the dough to keep it from drying out. Cover with plastic wrap and let rise until doubled in size about 30 minutes.Once the dough has risen, separate it into balls, approximately the size of a fist. Roll the dough on a flat surface to form a flattened circle.On a stovetop, light grease a cast iron pan with butter. Place the flattened dough on a pan over a medium-low fire. Turn halfway through cooking and allow the dough to form a golden crust on all sides. Once the bake is cooked, cut each open horizontally, and spread butter along the inside. Enjoy", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",  ingredients =  "ALl-Purpose Flour, Baking Powder, Unsalted Butter, Graulated Sugar, Milk"),
        Recipe(id = 2, title = "Salt Bake" , likes="0", category = "Breakfast", description = "Bake it with a Pinch of Salt", instructions = "In a large mixing bowl, whisk together the 3 cups of flour, 3 tsp of baking powder,  ½ tsp of salt, a bit of pepper sauce, and ¼ stick of butter. Rub the butter into the flour mixture until you have a sandy texture.Add small amounts of water about 1 tbsp at a time into the mixture until the dough becomes soft. When the dough comes together, knead for 2 or 3 minutes on a floured surface. Rub the dough with some of the oil that is set aside in a cup and let it rest for about 30 minutes, so that it may rise. After 30 minutes, knead the dough again and divide it into 10 equal pieces. Form a ball with each portion of the dough and roll each ball into 3-inch-4-inch disks. In a deep pan, heat oil on medium-high heat. Add the disks to the heated oil. The dough should sink and within 2 seconds start floating to the top of the pan. If necessary, work in batches so as not to overcrowd the pan and lower the oil temperature too much. Using a long-handled ladle, spoon oil over the top of the dough so that it continues to puff up. As soon as it is fully puffed, flip it over. You will notice that it starts to bubble and move around the pan. Let cook until the bottom side is nicely browned. Using a pot spoon or mesh strainer, remove the bake from the pan, draining the off the excess oil. Place in a paper towel-lined bowl. Repeat the process until all the bakes are fried. Enjoy", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",  ingredients = "All-Purpose Flour, Salt, Baking Powder, Guyanese Pepper Sauce, Salted Butter, Water"),
        Recipe(id = 3, title = "Potato Roti ", likes="0", category = "Breakfast", description = "A potato dish that won’t mash your expectations", instructions = "In a large bowl, combine 3 cups of flour with 3 heaping tablespoons of baking powder and a pinch of salt. Add ½ a stick of melted butter into the flour and baking powder mixture. As you mix, add a cup of flour. You are looking for the consistency of small crumbs. While mixing add water to the flour so that the dough may come together. Cover with plastic wrap and a damp cloth. Place in fridge for no less than 3 hours. On the stove, boil as many potatoes as your liking. Once potatoes are cooked, mash them together and add spices cumin, salt, pepper to taste. Form the mashed potatoes into balls and sprinkle them with flour and form a new ball ready to be rolled. Flatten out the dough and potato with a rolling pin. Remember to keep the edges thinner than the middle. Place a roti on the iron and bast the top side with the oil/margarine mix using a ball of wax paper. Flip the roti with a spatula and repeat. Wipe the pan with a damp cloth between the roti. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients =  "All-Purpose Flour, Baking Powder, Salt, Salted Butter, Oil, Water, Potato"),
        Recipe(id = 4, title = "Chicken Patties", likes="0", category = "Breakfast", description = "Taste the Caribbean: Guyanese-style Spicy Chicken Patties", instructions = "In a large bowl, mix flour, salt, and curry powder. Rub in the shortening and add cold water until the mixture forms a dough. Separate dough into about a dozen pieces then cover and put to refrigerate for 30 minutes. During this time you will prepare the filling. Start by seasoning the chicken with black pepper and allspice. Process finely in a food processor. Heat oil in a skillet and saute onions. Add chicken and cook until brown. Add mixed vegetables and pepper. Remove from heat. Remove dough from the fridge, divide dough in half, and roll flat. Line a cupcake pan with flat dough, leaving half of the pieces to cover the tops. Beat an egg in a small bowl. Fill a cupcake pan with the chicken and vegetable mix. Cover with a piece of flat dough and lightly brush with the egg mixture. Seal neatly and press the edges with a fork. Bake Chicken patties until golden brown for about 30 minutes.Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg"),
        Recipe(id = 5, title = "Fried Potato and Bake ", likes="0", category = "Breakfast", description = "Baked with Love, Fried with Care, Fry-day Favorite ", instructions = "Peel potatoes. Cut into quarters vertically. Chop into ¼ inch slices. Cover with cold water. Slice onions, mince garlic, and slice scallions, set aside. Heat skillet with 6 tbsp cooking oil. Add onions, garlic, wiri wiri pepper, thyme leaves and a pinch of salt. Sauté a few minutes until golden brown. Add potatoes and toss. Add salt, black pepper, paprika, and tomato paste. Let potatoes cook 15-20 minutes, but turn frequently, every 4-5 minutes to prevent potatoes from burning. Scrape the bottom of the pot with pot spoon to get the brown bits and toss back in with potatoes. When potatoes are completely cooked, garnish with scallions. Now that our potatoes are complete, pair this recipe with the salt bake recipe above and Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",  ingredients =  "Chicken, Shortening, Chopped Onions, Chopped Escahalot, Curry Powder/Turmeric, Ground All-Spice, Ground Black Pepper, Oil, Pack of Vegetables, Egg, Pepper, Salt to taste, Water"),
        Recipe(id = 6, title = "Bake and Saltfish",likes="0", category = "Breakfast", description = "From the Seas to the Streets: Savory Guyanese Salt Fish", instructions = "For saltfish: Fill the pot with enough water to cover the saltfish. Boil for 5-6 minutes. Drain and fill with clean water. Boil another 5-6 minutes. Drain and flake fish with a fork. Set aside. Heat a frying pan with oil. Add onion, garlic, hot pepper, and green pepper to pan. Cook until onions are translucent. Add saltfish and seasonings. Cook for a couple of minutes then add chopped tomatoes. Let cook for 5-6 minutes until tomatoes have melted into fish. Add tomato paste and scallions. Mix well. Adjust salt to taste. Pair with the delicious salt bake recipe found under the breakfast section of this site. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients= "Cod, Yellow Onion, Garlic Clove, Wiri Wiri Peppers, Green Pepper, Thyme, Black Pepper, Paprika, Garlic Powder, Fresh Tomato, Tomato Paste, Scallions, Salt, Oil"),
        Recipe(id = 7, title = "Jerk Chicken and Fried Rice", likes="0", category = "Lunch", description = "Rice to the Occasion: Guyanese Jerk Chicken and Fried Rice", instructions = "Cook rice as you regularly would.  Spread in a long shallow pan. Let cool overnight or for a couple of hours. The rice should be completely cold. Cook chicken and set aside. Chop and prep all vegetables   Combine mushroom sauce, soy sauce, and oyster sauce in one bowl and set aside. In a wok or Kalahari saute onions, garlic, and ginger in 1 tbsp oil until onions are tender, 1-2 minutes. Add 1 tbsp oil to the pan then add carrots, and saute for a few minutes.  Push carrots aside, add 3 tbsp oil then add bora and cabbage together. Saute for 1-2 minutes. Add rice a little at a time tossing it with vegetables.  Add sauce mixture and Chinese five spices. Fry the rice until completely covered with sauce. Toss in the chicken and scallions.Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients = "White rice, Carrots, Bora Beans, Cabbage, Yellow Onion, Garlic Cloves, Scallions, Mushrooms, Dark Soy Sauce, Oyster Sauce, Grated Ginger, Vegetable Oil, Salt, Chicken Breasts, Olive Oil, Soy Sauce, Cassareep"),
        Recipe(id = 8, title = "Pholourie", likes="0", category = "Lunch", description = "Dhal-licious Pholourie", instructions = "In a bowl soak dry split peas with about 1 ½ cups of water. Leave this overnight. By morning the peas will double in size. The next morning, drain the water from the peas. In a blender, put peas, garlic and pepper or pepper sauce, and enough water to cover the peas and blend on high till smooth. Transfer the mixture to a mixing bowl. Now add all of the dry spices and mix till they are incorporated. Add baking powder, yeast, and flour. Mix thoroughly. Cover the batter and let it sit for 1-2 hours. Heat oil in a frying pan, I would say enough oil that comes halfway up your pan. Dropping the batter into the oil: This is tricky, you can do this with two spoons, but your pholourie balls will not come out as round as you would like. Grab some batter in your hand and turn your fist upside down so that the batter falls through your thumb and pointer finger. There is a picture above to help guide you. When you drop the batter into the oil, it should immediately pop up, if it doesn't then your oil is not hot enough. Turn the pholourie balls while they are frying so that they can evenly brown. Continue this process until all your batter is used up. Serve with mango or tamarind sour, lime sour, mango achar, or any spicy condiment you like. I served mine with mango achar. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients = "Split Peas, Garlic Clove, Wiri Wiri Pepper, Turmeric, Curry Powder, Geera, Salt, Yeast, All-Purpose Flour, Oil "),
        Recipe(id = 9, title = "Channa Curry", likes="0", category = "Lunch", description = "Curry Up and Try Some Channa", instructions = "Drain and rinse chickpeas, and set aside. Make the onion-garlic seasoning, reserve ¼ cup, and store the rest in your refrigerator for use another time. Add ¼ cup seasoning to a bowl with masala, curry powder, ground cumin, and a few tbsp of water, and stir to make a watery paste. Heat pot with oil, add masala mixture, and fry until slightly dark. Add the chickpeas and coat them with the masala mixture. Pour enough boiling water over the chickpeas to cover about 1-2 inches. Add tomato paste and salt here. Let boil for a few minutes. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg"),
        Recipe(id = 10, title = "Shrimp Chowmein", likes="0",category = "Dinner", description = "Chow Down on This Shrimp Chowmein", instructions = "Wash and clean shrimp, then pat dry. In a pan with oil, season shrimp with cayenne pepper, salt, black pepper, adobo, paprika, and garlic. In a large pot, boil water and cook noodles according to package directions. Once the water begins to boil, add package of mixed frozen vegetables. Tip: Add a tablespoon of oil to a pot of noodles, to keep noodles from sticking together. Once noodles are done, add them to the wok that has our shrimp cooking inside.  Add soy sauce, salt, and adobo to suit your taste. In addition, add chowmein mix, cashrep, and chinese sauce for flavor. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients = "Chickpeas, Yellow onion, Garlic Clove, Thyme, Wiri Wiri Pepper, Potatoes, Chickpea, Water, Curry Powder, Garam Masala,Geera, Boiling Water, Tomato Paste, Salt, Masala "),
        Recipe(id = 11, title = "Chicken Curry", likes="0",category = "Dinner", description = "Curry and Spice and Everything Nice", instructions = "In a blender, combine medium onion, head of garlic, thyme leaves, pepper, and ¼ cup water. Blend until smooth and thick like a smoothie. Wash and clean the chicken (see below). Remove fat, and chop into 3-inch pieces. Pat dry with a paper towel, and set aside. Add 2 tbsp of the seasoning to the chicken plus 1 tsp curry powder. Massage into meat, and let it rest for ½ hour minimum. Store the remaining seasoning in a container in the fridge for use in another recipe. In a bowl, mix 4 heaping tbsp fresh seasoning, 4 tbsp masala, 3 tsbp curry powder, ½ tsp geera, and ⅓ cup water into a paste. Heat an iron pot with 6 tbsp oil. Add masala-curry powder paste and fry for 2-3 minutes, stirring constantly until the mixture looks darker and not watery. Add chicken to pot and stir to coat with masala-curry powder mixture.Cover the pot and let the chicken cook for 15-20 minutes on medium heat stirring every once in a while. Remove the lid and allow the water from the chicken to evaporate. The chicken will then start to look dry. Add salt and turn chicken. Add enough boiling water to cover the chicken. Add tomato paste, and chopped potatoes, and cover with a lid. Let the curry boil on medium-high heat until the gravy has reduced by one-third and thickens to your desire. When the curry is done, sprinkle a little geera on top and garnish with fresh scallions. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",  ingredients = "Onion, Garlic, Thyme, Wiri Wiri Pepper, Water, Chicken, Curry Powder, Garam Masala, Oil, Tomato Paste, Potatoes, Geera, Scallions "),
        Recipe(id = 12, title = "Cookup rice", likes="0",category = "Dinner", description = "Black-Eyed Beauty: The Secret to Delicious Cookup Rice in Guyana", instructions = "In a large pot, bring 10 cups of water to a boil. Add dried beans to boiling water. In the meantime, dice onions, garlic, scallions, and green pepper and add to the boiling water. Add in wiri wiri pepper, fresh herbs, bay leaves, and bouillon cubes. When beans are slightly soft, add coconut milk, cassareep, and spinach if you are using spinach. Let this mixture boil for 15 minutes. Place rice in a mixing bowl and run the tap water over it on low, until the water goes clear Drain water from the rice and add to the pot. Add old bay seasoning and black pepper. Let the rice boil until the rice is cooked, you can take one out to feel if it is soft or not. When the cook-up is close to being done, you will see that it is wet and soupy looking, there will hardly be any liquid left in the pot. Now at this point, add your cooked meat and give it a good stir. Remove from heat and cool. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients = "Scallions, Garlic Cloves. Green Pepper, Oregano, Rosemary, Thyme, Bay Leaves, Wiri Wiri Peppers, Coconut Milk, Cassareep, Old Bay Seasoning, Black Pepper, Spinach, Black Eyed Peas, Rice, Salt, Oil, Cayenne Pepper, Garlic Puree, Chicken "),
        Recipe(id = 13, title = "Pinetart", likes="0", category = "Dessert", description = "Tart of Gold: The Best Pinetart in Guyana", instructions = "If using fresh pineapple, peel and chop pineapple into large chunks and pulse in a food processor a few times until the pineapple has small lumps. Measure 2 ½ cups and reserve for use. Any extra pineapple may be frozen for up to three months. If using canned crushed pineapple, place the entire contents into a medium size saucepan including juice. Add all spices and sugars and bring to a slow simmer for 45 minutes on low heat or until the mixture looks thick and has a jam-like consistency. Stir frequently to prevent burning. Remove from heat and set aside to cool thoroughly.Place flour in a mixing bowl, add sugar and salt and sift together. Add butter and shortening. With a pastry cutter, cut shortening and butter into the flour until it forms pea-sized lumps. Add cold water a little at a time, knead slightly, and form into a log. Place the log on plastic wrap and continue to roll until it is about a foot long. Wrap in plastic ad refrigerates for up to 4 hours before use. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",  ingredients= "Crushed Pineapple. Nutmeg, Cinnamon, Pure Vanilla Extract, Brown Sugar, White Sugar, Light Brown Sugar, Salted Butter, Vegetable Shortening, All-Purpose Flour, Salt, Water, Egg Whites"),   
        Recipe(id = 14, title = "Cheese Roll", likes="0", category = "Dessert", description = "Say Cheese Please!", instructions = "Whisk salt and curry powder if using into flour. Add butter and shortening. With a pastry cutter or fork, cut shortening and butter into flour until small pieces are formed throughout the dough. Add about ¾ cup ice cold water to the dough and knead slightly to form a ball. This can be done quickly in a food processor by adding dry ingredients, pulsing, adding shortening and butter, pulsing until pea-sized form, then adding water until ball forms. Place dough on plastic wrap, flatten it and shape it into a square. Refrigerate for a couple of hours or overnight. Remove dough from the fridge 20 minutes before use so it can thaw. Preheat oven to 350 degrees. Shred cheese and mix in mustard, pepper sauce, garlic powder, black pepper, and parsley flakes, toss and set aside. Cut dough into 16 squares for thinner cheese rolls or 9 squares for thicker cheese rolls. Flatten one square and roll it into a rectangular shape. Brush the edges of the dough with egg whites. Fill a tablespoon or two on the lower half, roll into the center then add more cheese. Seal edges. Place all cheese rolls on a baking sheet and brush the tops with egg wash. Bake for 15-18 minutes until the rolls are golden brown.", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients =  "Salted Butter, Vegetable Shortening, All-Purpose Flour, Salt, Water, Cheddar Cheese, Pepper Sauce, Egg whites, "),
        Recipe(id = 15, title = "Malida", likes="0", category = "Dessert", description = "Sugary Heaven", instructions = "In a large bowl, combine 3 cups of flour with 3 heaping tablespoons of baking powder and a pinch of salt. Add ½ a stick of melted butter into the flour and baking powder mixture. As you mix, add a cup of flour. You are looking for the consistency of small crumbs. While mixing add water to the flour so that the dough may come together. Cover with plastic wrap and a damp cloth. Place in fridge for no less than 3 hours. Flatten out the dough and potato with a rolling pin. Remember to keep the edges thinner than the middle. Place a roti on the iron and bast the top side with the oil/margarine mix using a ball of wax paper. Flip the roti with a spatula and repeat. Wipe the pan with a damp cloth between the roti. Once the roti has cooled off, begin ripping apart the roti into small pieces. In a bowl combine butter and sugar. Form the pieces of roti into a ball using the butter and sugar mixture. Place on a cooking rack and Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients= "All-Purpose Flour, Baking Powder, Salt, Butter, Oil, Water, Granulated Sugar"),  
        Recipe(id = 16, title = "Sweet Bread", likes="0", category = "Dessert", description = "Bread So Good, You'll Want to Take a Loaf Home", instructions = "tbd", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",   ingredients = "All-Purpose Flour, Egg, Granulated Sugar, Unsalted Butter, Almond Essene, Nutmeg, Carnation Milk, Baking Powder"),
        Recipe(id = 17,title = "Fudge", likes="0", category = "Dessert", description = "Fudgin' Delicious", instructions = "Set aside a glass of ice water, a small spoon, and a plate or tray to place peera in. Pour milk, sugar, and spices into a cast iron pot. Heat on medium-low for about one hour and fifteen minutes uncovered. Let the mixture boil, turning occasionally and scraping the sides down each time. The mixture should start to look slightly thick, like pancake syrup, and have a caramel color. Turn the heat to low and turn it every 2-3 minutes. The mixture is at the most risk for scorching at this point so keep the heat on low. Around an hour and a half, the mixture should be thick like molasses, keep turning the mixture to keep it from scorching. Scrape sides down frequently so the sugar does not build up. When the mixture begins to look thick like cake batter, do not walk away from the stove, keep turning. The edges of the pot will begin to look dry and white. Remove mixture from heat, tilt the pot, and beat mixture until the texture becomes like frosting or taffy. It is now ready to be rolled into balls.Rub cold water between both palms, use a spoon to remove about a teaspoon of peera in between your palms to form a ball, place in a plate or tray, and press down slightly with your finger to make an indent. Allow peera to harden. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients= "Butter, Milk Powder,  Brown or White Sugar, Carnation Milk, Almond Essence "),
        Recipe(id = 18, title = "Sirnee", likes="0",  category = "Dessert", description = "Spoonfuls of Happiness", instructions = "Combine raisins, nuts, and cherries. Set aside. In a separate bowl, beat eggs, evaporated milk, sugar, and essence. Whisk until sugar has dissolved. Set aside. On low heat, in a flat-bottom pot, melt butter. Add cloves, cinnamon sticks, and whole cardamom. Once butter is melted, add flour and continuously stir for 7 to 10 minutes. *This process is like making a roux! It is the most taxing part of the entire procedure, gotta keep stirring to not burn the mixture. Keep stirring until the ‘roux’ becomes more paste-like and loose somewhat resembling curds, then add ground cardamom and nutmeg and give it a stir for even combining. *At this point, the mixture looks slightly golden brown. This is another way to know youve completed this step. Turn the heat to High and pour in the egg-milk mixture. Continue the stir! As you do, the mixture will look lumpy but the milk will evaporate and the mixture will smooth out and homogenize. Add cherry-raisin-nut mixture and stir vigorously for 1-2 minutes. The sirnee is done when you notice it pulling away from the sides of the pan. You can then transfer it from the heat to the serving dish. It will seem super moist just off the stove, but as it cools it will dry up. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",  ingredients = "Eggs, Custard Powder, Almond Essence, Butter, All-Purpose Flour, Cinnamon , Nutmeg, Carnation milk, Granulated Sugar, Candied Cherries"),
        Recipe(id = 19, title = "Sponge Cake", likes="0", category = "Dessert", description = "Spongebob's Favorite: The Best Sponge Cake in Town", instructions = "tbd", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients= "Butter, Eggs, Granulated Sugar, All-Purpose Flour, Almond Essence, Nutmeg, Milk, Baking Powder "),
        Recipe(id = 20, title = "Banana Bread with chocolate chips", likes="0", category = "Dessert", description = "The Chocoholic's Dream: Chocolate Chip Banana Bread", instructions = "tbd", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients = "Unsalted butter softened, Granulated Sugar, Eggs, Banana, Vanilla Extract, All-Purpose Flour, Baking Soda, Salt, Semisweet Chocolate Chips "),
        Recipe(id = 21, title = "Mithai", likes="0", category = "Dessert", description = "Mithai Madness", instructions = "Mix the flour, baking powder, anise seed, and chopped butter together. Keep mixing by hand until the dough is crumbly or you can put everything into a food processor. Add coconut to the dough and mix well. Pour the entire can of evaporated milk into the mixture and knead to form a dough ball. Add flour/ water if needed, to bring everything together. Cover with a damp paper towel and set aside and let it sit for about 30-40 minutes; the damp napkin keeps the dough from forming a crust. Place dough ball on counter/cutting board and cut dough into quarters. Work with one quarter at a time. Sprinkle flour on the working space and roll the quarter with a rolling pin to about ¾ in thickness. If you roll it thinner your mithai wont be as thick and soft but rather more crunchy, if that is how you prefer it then roll it thinner. In a pot, fill oil ⅓ of the way up the pot and let oil heat on medium-low. In the meantime cut mithai into little diamond shapes and set aside till ready for frying. The temperature of the oil should be around 280 degrees. Test one mithai to see if it is cooked all the way through before frying the entire batch. Once the oil is ready, place mithai in oil and let it cook slowly, keep turning to brown evenly on both sides. Cook all the mithai and set aside in a pot or bowl big enough to toss with the syrup. Combine sugar, water, and vanilla, if using. Boil on low for about 35 minutes, or longer depending on your stove. Test sugar in water to see if it has reached the soft ball stage. Read this recipe to learn how to test for the soft ball stage. When sugar is ready, pour over mithai and toss until sugar is no longer clear and has become white. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",  ingredients = "Anise Seed, Flour, Granulated Sugar, Butter, Baking Powder, Condensed Milk, Almond Essence, Egg, Nutmeg, Salt, Custard Powder "),
        Recipe(id = 22, title = "Coffee Cake", likes="0", category = "Dessert", description = "Mithai Madness", instructions = "Mix the flour, baking powder, anise seed, and chopped butter together. Keep mixing by hand until the dough is crumbly or you can put everything into a food processor. Add coconut to the dough and mix well. Pour the entire can of evaporated milk into the mixture and knead to form a dough ball. Add flour/ water if needed, to bring everything together. Cover with a damp paper towel and set aside and let it sit for about 30-40 minutes; the damp napkin keeps the dough from forming a crust. Place dough ball on counter/cutting board and cut dough into quarters. Work with one quarter at a time. Sprinkle flour on the working space and roll the quarter with a rolling pin to about ¾ in thickness. If you roll it thinner your mithai wont be as thick and soft but rather more crunchy, if that is how you prefer it then roll it thinner. In a pot, fill oil ⅓ of the way up the pot and let oil heat on medium-low. In the meantime cut mithai into little diamond shapes and set aside till ready for frying. The temperature of the oil should be around 280 degrees. Test one mithai to see if it is cooked all the way through before frying the entire batch. Once the oil is ready, place mithai in oil and let it cook slowly, keep turning to brown evenly on both sides. Cook all the mithai and set aside in a pot or bowl big enough to toss with the syrup. Combine sugar, water, and vanilla, if using. Boil on low for about 35 minutes, or longer depending on your stove. Test sugar in water to see if it has reached the soft ball stage. Read this recipe to learn how to test for the soft ball stage. When sugar is ready, pour over mithai and toss until sugar is no longer clear and has become white. Enjoy!", image = "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg", ingredients = "Butter, Granulated Sugar, Egg, Sour Cream, All-Purpose Flour, Baking Soda, Baking Powder, Pure Vanilla Extract,  Cinnamon, Brown sugar ")
        ]

    db.session.add_all(recipes_obj)
    db.session.commit()


def make_comment():

    Comment.query.delete()

    comments_obj = []

    for i in range(20):
        comment = Comment(
            content = fake.text(),
            user_id = randint(1,10),
            update_id = randint(1,6)
        )

        comments_obj.append(comment)
    
    db.session.add_all(comments_obj)
    db.session.commit()



def make_ingredient():

    Ingredient.query.delete()
    
    ingredients_obj = [
        Ingredient(id = 1, name = "All-Purpose Flour"),
        Ingredient(id = 2, name = "Baking Powder"),
        Ingredient(id = 3, name = "Unsalted Butter"),
        Ingredient(id = 4, name = "Graulated Sugar"),
        Ingredient(id = 5, name = "Milk"),
        Ingredient(id = 6, name = "Salt"),
        Ingredient(id = 7, name = "Guyanese Pepper Sauce"),
        Ingredient(id = 8, name = "Salted Butter"),
        Ingredient(id = 9, name = "Oil"),
        Ingredient(id = 10, name = "Chicken"),
        Ingredient(id = 11, name = "Vegetable Shortening"),
        Ingredient(id = 12, name = "Escahalot"),
        Ingredient(id = 13, name = "Curry Powder"),
        Ingredient(id = 14, name = "Ground All-Spice"),
        Ingredient(id = 15, name = "Black Pepper"),
        Ingredient(id = 16, name = " Pack of Vegetables"),
        Ingredient(id = 17, name = "Egg"),
        Ingredient(id = 18, name = "Onion"),
        Ingredient(id = 19, name = "Wiri Wiri Peppers"),
        Ingredient(id = 20, name = " Thyme,"),
        Ingredient(id = 21, name = "Paprika"),
        Ingredient(id = 22, name = "Tomato Paste"),
        Ingredient(id = 23, name = "Cod"),
        Ingredient(id = 24, name = "Garlic Powder"),
        Ingredient(id = 25, name = "Tomato"),
        Ingredient(id = 26, name = "White rice,"),
        Ingredient(id = 27, name = "Carrots"),
        Ingredient(id = 28, name = "Bora Beans"),
        Ingredient(id = 29, name = "Cabbage"),
        Ingredient(id = 30, name = "Mushrooms"),
        Ingredient(id = 31, name = "Dark Soy Sauce"),
        Ingredient(id = 32, name = "Oyster Sauce"),
        Ingredient(id = 33, name = "Grated Ginger"),
        Ingredient(id = 34, name = "Olive Oil"),
        Ingredient(id = 35, name = "Cassareep"),
        Ingredient(id = 36, name = "Split Peas"),
        Ingredient(id = 37, name = "Turmeric,"),
        Ingredient(id = 38, name = "Geera"),
        Ingredient(id = 39, name = "Yeast"),
        Ingredient(id = 40, name = "Chickpeas"),
        Ingredient(id = 41, name = "Masala"),
        Ingredient(id = 42, name = "Bag of Chowmein"),
        Ingredient(id = 43, name = "Shrimp"),
        Ingredient(id = 44, name = "Cayenne Pepper"),
        Ingredient(id = 45, name = "Adobo"),
        Ingredient(id = 46, name = "Chinese Sauce"),
        Ingredient(id = 47, name = "Garlic"),
        Ingredient(id = 48, name = "Water"),
        Ingredient(id = 49, name = "Garam Masala"),
        Ingredient(id = 50, name = "Potatoes"),
        Ingredient(id = 51, name = "Scallions"),
        Ingredient(id = 52, name = "Green Pepper"),
        Ingredient(id = 53, name = "Oregano"),
        Ingredient(id = 54, name = "Rosemary"),
        Ingredient(id = 55, name = " Bay Leaves"),
        Ingredient(id = 56, name = "Coconut Milk"),
        Ingredient(id = 57, name = "Old Bay Seasoning,"),
        Ingredient(id = 58, name = "Spinach"),
        Ingredient(id = 59, name = " Black Eyed Peas"),
        Ingredient(id = 60, name = "Garlic Puree"),
        Ingredient(id = 61, name = "Crushed Pineapple"),
        Ingredient(id = 62, name = "Nutmeg"),
        Ingredient(id = 63, name = "Cinnamon"),
        Ingredient(id = 64, name = "Brown Sugar"),
        Ingredient(id = 65, name = "Egg Whites"),
        Ingredient(id = 66, name = " Cheddar Cheese "),
        Ingredient(id = 67, name = " Almond Essenece"),
        Ingredient(id = 68, name = "Carnation Milk"),
        Ingredient(id = 69, name = "Milk Powder,"),
        Ingredient(id = 70, name = "Custard Powder"),
        Ingredient(id = 71, name = "andied Cherries"),
        Ingredient(id = 72, name = "Banana"),
        Ingredient(id = 73, name = "Vanilla Extract"),
        Ingredient(id = 74, name = "Semisweet Chocolate Chips"),
        Ingredient(id = 75, name = "Anise Seed"),
        Ingredient(id = 76, name = "Condensed Milk"),
        Ingredient(id = 77, name = "Sour Cream"),
        Ingredient(id = 78, name = "Sour Cream")

    ]

    db.session.add_all(ingredients_obj)
    db.session.commit()

def make_recipeIngredients():
    RecipeIngredients.query.delete()

    recipe_ingredient_obj = [
        RecipeIngredients(recipe_id = 1, ingredient_id = 1),
        RecipeIngredients(recipe_id = 1, ingredient_id = 2),
        RecipeIngredients(recipe_id = 1, ingredient_id = 3),
        RecipeIngredients(recipe_id = 1, ingredient_id = 4),
        RecipeIngredients(recipe_id = 1, ingredient_id = 5),
        
        RecipeIngredients(recipe_id = 2, ingredient_id = 1),
        RecipeIngredients(recipe_id = 2, ingredient_id = 6),
        RecipeIngredients(recipe_id = 2, ingredient_id = 2),
        RecipeIngredients(recipe_id = 2, ingredient_id = 7),
        RecipeIngredients(recipe_id = 2, ingredient_id = 8),
        RecipeIngredients(recipe_id = 2, ingredient_id = 48),

        RecipeIngredients(recipe_id = 3, ingredient_id = 1),
        RecipeIngredients(recipe_id = 3, ingredient_id = 2),
        RecipeIngredients(recipe_id = 3, ingredient_id = 6),
        RecipeIngredients(recipe_id = 3, ingredient_id = 8),
        RecipeIngredients(recipe_id = 3, ingredient_id = 9),
        RecipeIngredients(recipe_id = 3, ingredient_id = 48),
        RecipeIngredients(recipe_id = 3, ingredient_id = 50),


        RecipeIngredients(recipe_id = 4, ingredient_id = 10),
        RecipeIngredients(recipe_id = 4, ingredient_id = 11),
        RecipeIngredients(recipe_id = 4, ingredient_id = 18),
        RecipeIngredients(recipe_id = 4, ingredient_id = 12),
        RecipeIngredients(recipe_id = 4, ingredient_id = 13),
        RecipeIngredients(recipe_id = 4, ingredient_id = 15),
        RecipeIngredients(recipe_id = 4, ingredient_id = 9),
        RecipeIngredients(recipe_id = 4, ingredient_id = 16),
        RecipeIngredients(recipe_id = 4, ingredient_id = 17),
        RecipeIngredients(recipe_id = 4, ingredient_id = 7),
        RecipeIngredients(recipe_id = 4, ingredient_id = 6),
        RecipeIngredients(recipe_id = 4, ingredient_id = 48),

    ]

    db.session.add_all(recipe_ingredient_obj)
    db.session.commit()



if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        make_user()
        make_recipe()
        make_comment()
        make_ingredient()
        make_recipeIngredients()




    #     RecipeIngredients(recipe_id = 5, ingredient_id = 49),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 17),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 46),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 18),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 19),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 6),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 14),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 20),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 21),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 50),
    #     RecipeIngredients(recipe_id = 5, ingredient_id = 9),



    #     RecipeIngredients(recipe_id = 6, ingredient_id = 22 ),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 51),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 19),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 14 ),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 20),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 23),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 24),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 21),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 50),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 6),
    #     RecipeIngredients(recipe_id = 6, ingredient_id = 9),


    #     RecipeIngredients(recipe_id = 7, ingredient_id = 25),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 26),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 27),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 28),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 17),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 46),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 50),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 29),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 30),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 31),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 32),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 9),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 6),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 10),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 33),
    #     RecipeIngredients(recipe_id = 7, ingredient_id = 34),


    #     RecipeIngredients(recipe_id = 8, ingredient_id = 35),
    #     RecipeIngredients(recipe_id = 8, ingredient_id = 46),
    #     RecipeIngredients(recipe_id = 8, ingredient_id = 18),
    #     RecipeIngredients(recipe_id = 8, ingredient_id = 13),
    #     RecipeIngredients(recipe_id = 8, ingredient_id = 37),
    #     RecipeIngredients(recipe_id = 8, ingredient_id = 6),
    #     RecipeIngredients(recipe_id = 8, ingredient_id =38 ),
    #     RecipeIngredients(recipe_id = 8, ingredient_id = 1),
    #     RecipeIngredients(recipe_id = 8, ingredient_id = 9),



    #     RecipeIngredients(recipe_id = 9, ingredient_id =39 ),
    #     RecipeIngredients(recipe_id = 9, ingredient_id =17 ),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 46),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 19),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 18),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 49),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 47),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 13),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 48),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 37),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 21),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 6),
    #     RecipeIngredients(recipe_id = 9, ingredient_id = 40)
    # ]



        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = ),
        # RecipeIngredients(recipe_id = , ingredient_id = )