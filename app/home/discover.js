import { View, Text, Button } from "react-native";
import { useRouter, Tabs } from "expo-router";


const Discover = () => {
    const router = useRouter();
    return(
        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}> 
            <Text>Discover More!</Text>
        </View>

    );
};

export default Discover;
