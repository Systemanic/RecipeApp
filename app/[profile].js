import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter, useSearchParams, Stack} from "expo-router";
import { Fontisto } from '@expo/vector-icons'; 


// [profile] allows you to dynamically change the name of a page based on data passed through the useSearchParams function
const Profile = () => {
    const router = useRouter();
    const {name, profile } = useSearchParams();

    return(
        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
            <Stack.Screen options={{title: `${profile}'s Profile`, headerRight: () => (
                    <TouchableOpacity onPress={() => router.push("/settings")}>
                        <Fontisto name="player-settings" size={24} color="black" />
                    </TouchableOpacity>
            )}}/>
            <Text>Welcome @{profile}</Text>
        </View>
    );  
};

export default Profile;