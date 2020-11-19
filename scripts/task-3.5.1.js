//Create an object to hold information on your favorite recipe. Then display the properties on screen.​
//Bonus Points: Create a loop to list all the ingredients.​

//Recipe properties:​
//recipeTitle (a string)​
//servings (a number)​
//ingredients (an array of strings)​
//directions (a string)​

var favouriteRecipe = {
recipeTitle: 'Spaghetti Bolognese',
servings: 6,
ingredients: [
'1 tbsp olive oil',
'500g beef mince',
'tomato sauce',
'spaghetti',
],
directions: ['Make Bolognese sauce', 'Step 2', 'Step 3'],
letsCook: function(){

    console.log('Im hungry, lets cook' + favouriteRecipe, recipeTitle);
}
};


//bonus part of task
var ingredients = favouriteRecipe.ingredients

for(var index = 0; index < ingredients.length; index){

    //console.log(ingredients[index])
}

//console.log(Object.keys(favouriteRecipe));

console.log(Object.entries(favouriteRecipe));