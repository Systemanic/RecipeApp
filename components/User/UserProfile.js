import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { useRouter } from "expo-router";

// This is just the profile icon for the user that would login into the application
const UserProfile = ({ flex, borderRadius, padding, user}) =>{
    const router = useRouter();
    return(
        <TouchableOpacity style={styles.userProfileStyle({flex, borderRadius, padding})} onPress={() => router.push(`/${user}`)}>
            <FontAwesome name="user" size={50} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userProfileStyle: ({ flex, borderRadius, padding }) => ({
        flex: flex,
        borderRadius: borderRadius, 
        padding: padding,
    }),
})
export default UserProfile;