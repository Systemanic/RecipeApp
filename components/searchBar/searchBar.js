import React, { useState } from 'react';
import { View,Text, TextInput, Button, TouchableOpacity, FlatList} from 'react-native';
import { icon } from 'react-native';
import  styles  from './searchBar.style.js';
import { MaterialIcons } from '@expo/vector-icons';



const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Onion' },
    { id: 2, name: 'Tomato' },
    { id: 3, name: 'Potato' },
    { id: 4, name: 'Pepper' },
    { id: 5, name: 'Beef' },
    { id: 6, name: 'Chicken' },
    { id: 7, name: 'Mince' },
    { id: 8, name: 'Rice' },
    { id: 9, name: 'Spaghetti' },
    { id: 10, name: 'Macaroni' },
  ]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleFilter = filter => {
    const filteredResults = data.filter(item => item.name.toLowerCase() === filter.toLowerCase());
    setFilteredData(filteredResults);
  };

  const handleReset = () => {
    setFilteredData([]);
    setSearchText('');
  };

  const renderItem = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#333"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
        <Button title="Reset" onPress={handleReset} />
      </View>
      <View style={styles.filterContainer}>
        {data.map(item => (
          <Button
            key={item.id}
            title={item.name}
            onPress={() => handleFilter(item.name)}
            style={styles.filterButton}
          />
        ))}
      </View>
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default SearchBar;