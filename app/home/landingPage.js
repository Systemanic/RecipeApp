import { View, Text, StyleSheet, NativeModules} from "react-native";
import { Link, useRouter } from "expo-router";


const { StatusBarManager } = NativeModules;

// Test user data
// const users = [
//     {
//         username: 'AJ',
//         name: 'Junior',
//     },
//     {
//         username: 'Cream',
//         name: 'Cream Puff',
//     }
// ];

const Home = ()=>{
    
    const router = useRouter();
    return(

        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 40, fontStyle: 'italic'}}>Hello There!</Text>
            
            {/* {users.map((user) => (
                <Link key={user.username} href={`/${user.username}`} style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>{user.name}'s Profile</Link>
            ))} */}

            <Link href="/community" style={{fontSize: 20}}>Open Community</Link>
        </View>
    )
}

export default Home;