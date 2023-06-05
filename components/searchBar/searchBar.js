import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { icon } from 'react-native';

const SearchBarWithFilters = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSearch = () => {
    // Call the onSearch callback with the search text and selected filters
    onSearch(searchText, selectedFilters);
  };

  const toggleFilter = (filter) => {
    const updatedFilters = [...selectedFilters];
    const index = updatedFilters.indexOf(filter);
    if (index > -1) {
      updatedFilters.splice(index, 1); // Remove filter if already selected
    } else {
      updatedFilters.push(filter); // Add filter if not selected
    }
    setSelectedFilters(updatedFilters);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
        {['Tomato',
          'Onion',
          'Pepper', 
          'Eggs', 
          'Garlic', 
          'Rice',
          'Chicken',
          'Beef',
          'Pork', 
          'Spaghetti',
          'Macaroni',
        ].map((filter) => (
          <Icon
            key={filter}
            name={selectedFilters.includes(filter) ? 'check-box' : 'check-box-outline-blank'}
            onPress={() => toggleFilter(filter)}
            containerStyle={{ marginRight: 10 }}
          />
        ))}
      </View>
    </View>
  );
};

export default searchBar;