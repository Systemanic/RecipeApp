import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme.js";

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: COLORS.light
    },

    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
    }),
});

export default styles;