import { 
    View, 
    Text, 
    StyleSheet, 
    NativeModules,
    Button,
    TouchableOpacity,
} from "react-native";
import { Link, useRouter, Tabs, useSearchParams} from "expo-router";
import { UserProfile } from "../../components";

const { StatusBarManager } = NativeModules;

const Home = ()=>{
    // A test use that will be used to route to the profile page 
    const testUser = "Junior";

    const router = useRouter();
    return(

        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
            <Tabs.Screen options={{ 
                headerTitle: `${testUser}`,
                headerRight: () =>  (
                    // This button will redirect the use to their respctive profile page
                    <UserProfile flex={1} borderRadius={100} padding={10} user={testUser}/>
                ),
                headerRightContainerStyle:{backgroundColor: "orange"},
                headerLeftContainerStyle:{ borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: "red", width: 50},

            }}/>
            <Text style={{fontSize: 40, fontStyle: 'italic'}}>Hello There!</Text>
            
            {/* {users.map((user) => (
                <Link key={user.username} href={`/${user.username}`} style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>{user.name}'s Profile</Link>
            ))} */}

            {/* <Link href="/community" style={{fontSize: 20}}>Open Community</Link> */}

        </View>
    )
}

export default Home;