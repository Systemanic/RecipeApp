import { 
    StyleSheet, 
    View, 
    Text, 
    SafeAreaView, 
    TextInput, 
    ScrollView,
    NativeModules,
    Image,
    Button,
} from "react-native";
import { useState } from "react";
import { Stack } from "expo-router";
import { COLORS } from "../constants/theme";


const { StatusBarManager } = NativeModules;
const borderBottomRadius = 0;
const testImage1 = "../assets/icons/apple.png";
const scrollImagePadding = 70;
const scrollImageMargin = 30;

// To prevent pain and suffering please OH PLEASE put the hooks inside the function...

export default function Home(){
    
    return(
        <SafeAreaView style={styles.safeAreaAndroid}>

            <Stack.Screen options={{
                title: "Home Page",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerShown: true,
                headerStyle: {
                    backgroundColor: COLORS.pitchBlack,
                },
                headerTitleStyle: {
                    color: COLORS.light,
                },
                headerRight: () => (
                    <Button 
                    title="Search"
                    color={COLORS.pitchBlack}
                    />
                ),
                headerLeft: () => (
                    <Button 
                    title="Menu"
                    color={COLORS.pitchBlack}
                    />
                ),
            }}/>

            {/* Main View */}
            <ScrollView>
                {/* Sub views */}

                {/* SubView Section 1 */}
                <View style={[styles.container, { 
                    flex: 1, 
                    alignItems: "center", 
                    justifyContent: "center",
                    backgroundColor: "black",
                    }]}>
                    <TextInput style={ styles.textInput } placeholder="Search For Something.."/>
                </View>


                <View style={[styles.scrollContainer, { 
                    backgroundColor: COLORS.pitchBlack, 
                    height: 200, 
                    borderBottomRightRadius: borderBottomRadius, 
                    borderBottomLeftRadius: borderBottomRadius,
                }]}>

                    <View style={[styles.scrollContainer,  { 
                        backgroundColor: COLORS.pitchBlack,
                        flex: .5,
                        justifyContent: "center", 
                        alignItems: "center"
                    }]}>
                        <Text style={ styles.textLight }>You Hungry?</Text>
                        <Text style={ styles.textLight }>We'll give you the best recipies</Text>
                    </View>
                    <View style={[styles.scrollContainer,  { 
                        backgroundColor: COLORS.pitchBlack,
                        flex: .5,
                        justifyContent: "center", 
                        alignItems: "center"
                    }]}>
                        <Text style={ styles.textLight }>Place Image Here.</Text>

                    </View>
                </View>
                
                
                {/* SubView Section 2 */}

                <View style={[styles.scrollContainer, { backgroundColor: COLORS.cream, height: 2000, padding: 10}]}>
                    
                    {/* Use this View to see how the views encapsulated are segmented. */}
                    <View style={[styles.scrollContainer, { backgroundColor: COLORS.cream, padding: 3, marginTop: 20}]}>
                    {/* Use this View to see how the views encapsulated are segmented. */}
                    
                        <View style={{backgroundColor: COLORS.cream, margin: 5, alignItems: "flex-start"}}>
                            <Text style={{ fontWeight: "bold", fontSize: 20,}}>Top Recipes</Text>
                            <Text>These are our favourite dishes!</Text>

                            <ScrollView style={{ marginTop: 20}} horizontal={true}>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                            </ScrollView>

                        </View>

                        <View style={{backgroundColor: COLORS.cream, margin: 5, alignItems: "flex-start"}}>
                            <Text style={{ fontWeight: "bold", fontSize: 20,}}>Top Recipes</Text>
                            <Text>These are our favourite dishes!</Text>

                            <ScrollView style={{ marginTop: 20}} horizontal={true}>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                            </ScrollView>

                        </View>

                        <View style={{backgroundColor: COLORS.cream, margin: 5, alignItems: "flex-start"}}>
                            <Text style={{ fontWeight: "bold", fontSize: 20,}}>Top Recipes</Text>
                            <Text>These are our favourite dishes!</Text>

                            <ScrollView style={{ marginTop: 20}} horizontal={true}>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                                <Image  style={{padding: scrollImagePadding, marginRight: scrollImageMargin}} source={require(testImage1)}/>
                            </ScrollView>

                        </View>
                    </View>

                </View>


            </ScrollView>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeAreaAndroid:{
        // paddingTop: StatusBarManager.HEIGHT, <-- use this when you've set headerShown: false.
        flex: 1,
        backgroundColor: COLORS.cream,
    },

    container:{
        // Non ScrollView Containers
        flex: 1,
        backgroundColor: COLORS.cream,
        padding: 10,
    },

    scrollContainer:{
        // Containers for the scroll view
        flex: 1,
        backgroundColor: "teal",
    },

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

    textLight: {
        color: COLORS.light,
    },
});