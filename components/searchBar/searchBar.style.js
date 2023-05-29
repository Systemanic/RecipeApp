import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    textInput:{
        backgroundColor: "white",
        textAlign: "center",
        fontSize: 15,
        height: 37,
        width: 320,
        // Above values are determined by the app design (Refer to design team)
        borderRadius: 10,
        padding: 10,
    },

    container:{
        // Non ScrollView Containers
        flex: 1,
        backgroundColor: COLORS.cream,
        padding: 10,
    },

})

export default styles;