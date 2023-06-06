import { View, Text, Button } from "react-native";
import { useRouter, Tabs} from "expo-router";
import { FontAwesome } from '@expo/vector-icons';


const Community = () => {
    const router = useRouter();
    return(
        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}> 
            <FontAwesome name="group" size={24} color="black" />
            <Text>Welcome to Community!</Text>

            <Tabs.Screen options = {{title: "Community", tabBarIcon:()=> (<FontAwesome name="group" size={24} color="black" />) }}/>
        </View>
    );
};

export default Community;



