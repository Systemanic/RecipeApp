import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import { SearchBar } from '../../components';



const Discover = () => {
    const router = useRouter();
    return(
        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}> 
            <SearchBar />
            <Text>Welcome to Discover</Text>
        </View>
    );
};

export default Discover;