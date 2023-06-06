// export default Discover;
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useRouter, Tabs } from "expo-router";
import { SearchBar } from '../../components';

const Discover = () => {
  const [selectedTab, setSelectedTab] = useState("discover");

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SearchBar />
      <TouchableOpacity
        onPress={() => handleTabPress("discover")}
        style={{ alignItems: "center" }}
      >
        <AntDesign
          name={selectedTab === "discover" ? "search1" : "search1"}
          size={24}
          color={selectedTab === "discover" ? "blue" : "black"}
        />
        <Text
          style={{ color: selectedTab === "discover" ? "blue" : "black" }}
        >
          Discover More!
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Discover;

