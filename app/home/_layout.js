import { Tabs } from "expo-router";
// This just brings tab routing to the home landing pages

export default () => {
    return <Tabs screenOptions={{
        tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 50,
        }
    }}/>;
};