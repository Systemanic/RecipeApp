import { View, TextInput } from "react-native";
import styles from "./searchBar.style";


const SearchBar = ({bgColor}) => {
    return(
        <View style={[styles.container, { 
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center",
            backgroundColor: bgColor,
            }]}>
            <TextInput style={ styles.textInput } placeholder="Search For Something.."/>
        </View>
    )
}

export default SearchBar;
