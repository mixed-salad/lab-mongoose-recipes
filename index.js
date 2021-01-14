const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    return Recipe.create({
      title: 'Lemon Chickpea Orzo Soup (Vegan Avgolemono)',
      level: 'Easy Peasy',
      ingredients: [
        '1 tbs olive oil or 1/4 cup water',
        '1/2 onion, diced',
        '3 carrots, peeled and diced',
        '3 cloves garlic, minced',
        '7 - 8 cups vegetable broth or water',
        '2 cans (15oz) chickpeas (garbanzo beans), drained and rinsed',
        '⅓ cup tahini',
        '¼ – ½ cup lemon juice (about 2 – 4 large lemons)',
        'a large handful fresh baby kale or spinach',
        'chopped fresh dill, to taste',
        'mineral salt, to taste',
        'fresh cracked pepper or lemon-pepper, to taste'
      ],
      cuisine: 'Greek',
      dishType: 'soup',
      duration: 30,
      creator: 'The Simple Veganista',
      created: '2021'
    })
  }).then((recipe) => {
    console.log(recipe.title);
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
