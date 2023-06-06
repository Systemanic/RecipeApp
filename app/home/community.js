import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";


const Community = () => {
    const router = useRouter();
    return(
        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}> 
            <Text>Welcome to Community!</Text>
        </View>
    );
};

export default Community;