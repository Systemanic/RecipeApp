import { View, Text, Button } from "react-native";
import { useRouter, Tabs } from "expo-router";

const Settings = () => {
    const router = useRouter();
    return(
        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}> 
            <Tabs.Screen options=""/>
            <Text>Settings</Text>
        </View>

    );
};

export default Settings;
