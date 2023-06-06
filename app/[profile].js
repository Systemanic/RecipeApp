// import { View, Text, Button } from "react-native";
// import { useRouter, useSearchParams, Stack} from "expo-router";

// // [profile] allows you to dynamically change the name of a page based on data passed through the useSearchParams function
// const Profile = () => {
//     const router = useRouter();
//     const {name, profile } = useSearchParams();

//     return(
//         <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
//             <Stack.Screen options={{title: `${profile}'s Profile`}}/>
//             <Text>Welcome @{profile}</Text>
//         </View>
//     );  
// };

// export default Profile;
import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter, useSearchParams, Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";

const Profile = () => {
  const router = useRouter();
  const { name, profile } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Feather name="user" size={24} color="black" />
      <Stack.Screen options={{ title: `${profile}'s Profile` }} />
      <Text>Welcome @{profile}</Text>
    </View>
  );
};

export default Profile;
