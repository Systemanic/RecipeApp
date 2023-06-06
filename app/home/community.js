import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Animated, StyleSheet } from "react-native";

const Community = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Tangeni",
      lastName: "T",
      image: "https://drive.google.com/uc?id=1RUnVDAjwYs5bCDXRdHPj4_S208k2mLsi",
      liked: false,
      disliked: false,
    },
    {
      id: 2,
      firstName: "Julian",
      lastName: "J",
      image: "https://drive.google.com/uc?id=1I0inuPhTkMsLKvTgcaMnZNVrAL4SwynZ",
      liked: false,
      disliked: false,
    },

    {
      id: 3,
      firstName: "Martin",
      lastName: "M",
      image: "https://drive.google.com/uc?id=1TV5aBUi3afVP6UK_wDHwJTMY58fVCAGB",
      liked: false,
      disliked: false,
    },
    // Add more users here
  ]);

  const handleLike = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            liked: !user.liked,
            disliked: false, // Reset disliked state when like is pressed
          };
        }
        return user;
      })
    );
  };

  const handleDislike = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            disliked: !user.disliked,
            liked: false, // Reset liked state when dislike is pressed
          };
        }
        return user;
      })
    );
  };

  const renderUser = ({ item }) => (
    <View key={item.id} style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.userIcon}>
          <Text style={styles.userInitial}>{item.firstName.charAt(0).toUpperCase()}</Text>
        </TouchableOpacity>
        <Text style={styles.userName}>{item.firstName} {item.lastName}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.roundedImage} />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => handleLike(item.id)}
          style={[
            styles.button,
            { backgroundColor: item.liked ? "blue" : "gray" },
            { borderRadius: 25, paddingRight: 15, paddingLeft: 15, marginRight: 6 },
          ]}
        >
          <Text style={styles.buttonText}>👍</Text> 
          <Text style={styles.buttonLabel}>Tasty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDislike(item.id)}
          style={[
            styles.button,
            { backgroundColor: item.disliked ? "red" : "gray" },
            { borderRadius: 25, paddingRight: 15, paddingLeft: 15 },
          ]}
        >
          <Text style={styles.buttonText}>👎</Text>
          <Text style={styles.buttonLabel}>Bad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const animatedValue = new Animated.Value(0);
  const fadeInText = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    fadeInText();
  }, []);

  const animatedStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20],
        }),
      },
    ],
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [24, 32],
    }),
    color: animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["green", "black", "pink"],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.welcomeText, animatedStyle]}>Welcome!!</Animated.Text>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B76E79", // Background Color
    alignItems: "center",
    justifyContent: "center",
  },
  flatListContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 5,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  buttonLabel: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  userInitial: {
    color: "white",
    fontSize: 20,
  },
  userName: {
    fontSize: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  roundedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default Community;
