

const BASE_URL = 'https://api.edamam.com/api/recipes/v2';
const APP_ID = 'e7b75a39';
const APP_KEY = '41644e68de62a9b3b0bfcd2dbb790cf2';

export const fetchRecipesByIngredients = async (ingredients) => {
  try {
    const response = await fetch(
      `${BASE_URL}?type=public&q=${ingredients}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};