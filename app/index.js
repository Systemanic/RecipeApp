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
import  icons  from "../constants/icons";
import  ScrollViewHome  from "../components/scrollViews/ScrollView";
import  ScreenHeaderBtn  from "../components/header/ScreenHeaderButton";
import  SearchBar  from "../components/searchBar/searchBar";

// Const
const { StatusBarManager } = NativeModules;
const borderBottomRadius = 0;
const scrollImagePadding = 70;
const scrollImageMargin = 30;

// Lists

// Logs
// console.log(ScrollViewHome)

// To prevent pain and suffering please OH PLEASE put the hooks inside the function...

export default function Home(){
    
    return(
        <SafeAreaView style={styles.safeAreaAndroid}>

            <Stack.Screen options={{
                title: "HOME",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerShown: true,
                headerStyle: {
                    backgroundColor: COLORS.pitchBlack,
                },
                headerTitleStyle: {
                    color: COLORS.light
                },
                headerRight: () => (
                    <Button 
                    title="Search"
                    color={COLORS.pitchBlack}
                    />
                ),
                headerLeft: () => (
                    // <ScreenHeaderBtn iconUrl={icons.menu2} dimensions={"100%"}></ScreenHeaderBtn>
                    <Button
                    title="Menu"
                    color={COLORS.pitchBlack}
                    />
                ),
            }}/>

            {/* Main View */}
            <ScrollView>
                {/* Sub views */}
                <SearchBar bgColor={COLORS.pitchBlack}/>
                {/* SubView Section 1 */}



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
                        <Image source="../assets/images/French-Fries.jpeg"/>

                    </View>
                </View>
                
                
                {/* SubView Section 2 */}

                <View style={[styles.scrollContainer, { backgroundColor: COLORS.cream, height: 2000, padding: 10}]}>
                    
                    {/* Use this View to see how the views encapsulated are segmented. */}
                    <View style={[styles.scrollContainer, { backgroundColor: COLORS.cream, padding: 3, marginTop: 20}]}>
                    {/* Use this View to see how the views encapsulated are segmented. */}
                    
                        <View style={{backgroundColor: COLORS.cream, margin: 5, alignItems: "flex-start"}}>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 20,}}>Top Recipes This Month</Text>
                                <Text>These are our favourite dishes!</Text>
                            </View>

                            <ScrollViewHome scrollImageMargin={scrollImageMargin} scrollImagePadding={scrollImagePadding} marginTop={20}></ScrollViewHome>

                        </View>

                        <View style={{backgroundColor: COLORS.cream, margin: 5, alignItems: "flex-start"}}>
                            <Text style={{ fontWeight: "bold", fontSize: 20,}}>Your Favorites</Text>
                            <Text>These are our favourite dishes!</Text>

                            <ScrollViewHome scrollImageMargin={scrollImageMargin} scrollImagePadding={scrollImagePadding} marginTop={20}></ScrollViewHome>

                        </View>

                        <View style={{backgroundColor: COLORS.cream, margin: 5, alignItems: "flex-start"}}>
                            <Text style={{ fontWeight: "bold", fontSize: 20,}}>Top Rated</Text>
                            <Text>These are our favourite dishes!</Text>

                            <ScrollViewHome scrollImageMargin={scrollImageMargin} scrollImagePadding={scrollImagePadding} marginTop={20}></ScrollViewHome>

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

    textLight: {
        color: COLORS.light,
    },
});