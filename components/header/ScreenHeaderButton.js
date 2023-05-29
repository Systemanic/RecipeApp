import { Image, TouchableOpacity} from "react-native";
import styles from "./ScreenHeaderButton.style.js";

// define a constant
const ScreenHeaderBtn = ({iconUrl, dimensions, handlePress}) => {

    // Create components that will be displayed in the current component ScreenHeaderBtn
    return(
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
            source={iconUrl}
            resizeMode="cover"
            style={styles.btnImg(dimensions)}
            />
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;