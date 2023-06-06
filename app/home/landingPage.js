import { View, Text, StyleSheet, NativeModules} from "react-native";
import { Link, useRouter, Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';

const { StatusBarManager } = NativeModules;

// Test user data
const users = [
    {
        username: 'AJ',
        name: 'Junior',
    },
    {
        username: 'Cream',
        name: 'Cream Puff',
    }
];

const Home = ()=>{
    
    const router = useRouter();
    return(

        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 40, fontStyle: 'italic'}}>Hello There!</Text>
            <Entypo name="home" size={24} color="black" />
            {/* {users.map((user) => (
                <Link key={user.username} href={`/${user.username}`} style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>{user.name}'s Profile</Link>
            ))} */}

            <Link href="/community" style={{fontSize: 20}}>Open Community</Link>

            <Tabs.Screen options = {{title: "Home", tabBarIcon: () => (<Entypo name="home" size={24} color="black" />)}}/>

        </View>
    )
}

export default Home;