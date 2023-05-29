import { ScrollView, Image, StyleSheet} from "react-native";

// Number of images per scroll view
const numbers = [1, 2, 3, 4, 5, 6, 7];
const testImage1 = "../../assets/images/French-Fries.jpeg";

const ScrollViewHome = ({ scrollImagePadding, scrollImageMargin, marginTop}) => {
    return(
        <ScrollView style={ styles.scrollHome(marginTop) } horizontal={true}>
        {numbers.map(number => (
                <Image  style={[styles.scrollViewImage,{padding: scrollImagePadding, marginRight: scrollImageMargin}]} 
                source={require(testImage1)} 
                key={number}
                resizeMode="contain"
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollHome: (marginTop) => ({
        marginTop: marginTop,
    }),

    scrollViewImage: {
        width: 200,
        height: 200,
    },
})
export default ScrollViewHome;

// Note if you import {componentName}; then you should export {componentName};
// if you import componentName; then you should export componentName;