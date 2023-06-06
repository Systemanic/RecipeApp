import React, { useState } from 'react';
import { View, Text, Button, Linking, Image, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter, Tabs } from 'expo-router';
import { fetchRecipesByIngredients } from '../../api';

const PRESET_OPTIONS = {
  carbohydrates: ['Rice', 'Pasta', 'Bread'],
  proteins: ['Chicken', 'Beef', 'Fish'],
  starch: ['Potato', 'Sweet Potato', 'Corn'],
};

const Suggestions = () => {
  const router = useRouter();
  const [carbohydrates, setCarbohydrates] = useState('');
  const [proteins, setProteins] = useState('');
  const [starch, setStarch] = useState('');
  const [otherOptions, setOtherOptions] = useState('');
  const [suggestedRecipe, setSuggestedRecipe] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateRecipe = async () => {
    setLoading(true);
    try {
      const ingredients = `${carbohydrates},${proteins},${starch},${otherOptions}`;
      const recipes = await fetchRecipesByIngredients(ingredients);
      if (recipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const selectedRecipe = recipes[randomIndex].recipe;
        setSuggestedRecipe(selectedRecipe.label);
        setRecipe(selectedRecipe);
      } else {
        setSuggestedRecipe('No recipe found');
        setRecipe(null);
      }
    } catch (error) {
      console.error('Error generating recipe:', error);
      setSuggestedRecipe('Error generating recipe');
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenRecipeSource = () => {
    if (recipe && recipe.url) {
      Linking.openURL(recipe.url);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover More!</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Carbohydrates:</Text>
        <Picker
          style={styles.picker}
          selectedValue={carbohydrates}
          onValueChange={(value) => setCarbohydrates(value)}
        >
          <Picker.Item label="Select Carbohydrates" value="" />
          {PRESET_OPTIONS.carbohydrates.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>

        <Text style={styles.label}>Proteins:</Text>
        <Picker
          style={styles.picker}
          selectedValue={proteins}
          onValueChange={(value) => setProteins(value)}
        >
          <Picker.Item label="Select Proteins" value="" />
          {PRESET_OPTIONS.proteins.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>

        <Text style={styles.label}>Starch:</Text>
        <Picker
          style={styles.picker}
          selectedValue={starch}
          onValueChange={(value) => setStarch(value)}
        >
          <Picker.Item label="Select Starch" value="" />
          {PRESET_OPTIONS.starch.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setOtherOptions(text)}
          value={otherOptions}
          placeholder="Other Options"
        />
      </View>

      <Button title="Generate Recipe" onPress={handleGenerateRecipe} />

      {loading && <ActivityIndicator style={styles.loading} size="large" color="blue" />}

      {suggestedRecipe !== '' && <Text style={styles.recipeText}>Suggested Recipe: {suggestedRecipe}</Text>}

      {recipe && (
        <View style={styles.recipeContainer}>
          <View style={styles.recipeContent}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <View style={styles.recipeDetails}>
              <Text style={styles.recipeText}>Ingredients:</Text>
              {recipe.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.recipeText}>
                  {ingredient.text}
                </Text>
              ))}
            </View>
          </View>
          <Button title="Open Recipe Source" onPress={handleOpenRecipeSource} />
        </View>
      )}

      <View style={styles.blankSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  loading: {
    marginTop: 20,
  },
  recipeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  recipeContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  recipeDetails: {
    flex: 1,
    marginLeft: 10,
  },
  recipeText: {
    fontSize: 16,
    marginBottom: 5,
  },
  recipeImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  linkButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  blankSpace: {
    height: 100, // Adjust the height as needed
  },
});

export default Suggestions;
