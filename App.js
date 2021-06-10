import React, { useState } from "react";
import { Platform } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from "./screens/categoryScreen";
import FavoritsScreens from "./screens/favoritsScreen";
import CategoryMealsScreen from "./screens/categoryMealsScreen";
import MealDetailsScreen from "./screens/mealDetailsScreen";
import FilterScreen from "./screens/filtersScreen";
import { enableScreens } from "react-native-screens";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./components/headerButton";
// const MealsNavigator = createStackNavigator();

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontsLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      />
    );
  }

  const MealsNavigator = createStackNavigator();
  const FavoritsNavigator = createStackNavigator();
  const FilterNavigator = createStackNavigator();
  const Tab =
    Platform.OS === "ios"
      ? createBottomTabNavigator()
      : createMaterialBottomTabNavigator();
  const MainNav = createDrawerNavigator();

  const Favnav = () => (
    <FavoritsNavigator.Navigator
      initialRouteName="Your favorites"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4a14aC",
        },
        headerTintColor: "white",
      }}
    >
      <FavoritsNavigator.Screen
        name="Your favorites"
        component={FavoritsScreens}
        options={({ navigation }) => ({
          title: "Your favorites",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="toggel"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <FavoritsNavigator.Screen
        name="MealDetailsScreen"
        component={MealDetailsScreen}
      />
    </FavoritsNavigator.Navigator>
  );
  const MealNav = () => (
    <MealsNavigator.Navigator
      initialRouteName="CategoryScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4a14aC",
        },
        headerTintColor: "white",
      }}
    >
      <MealsNavigator.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({ navigation }) => ({
          title: "categories",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="toggel"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />

      <MealsNavigator.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <MealsNavigator.Screen
        name="MealDetailsScreen"
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: route.params.mealTitle,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="favorit"
                iconName="ios-star-outline"
                onPress={() => {
                  console.log("done!!!");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </MealsNavigator.Navigator>
  );
  // for ios
  // if (Platform.OS === "ios") {
  //     <Tab.Navigator tabBarOptions={{ activeTintColor: "#f5a442" }}>
  //       <Tab.Screen
  //         name="meals"
  //         component={MealNav}
  //         options={{
  //           tabBarIcon: ({ color }) => {
  //             return <Ionicons name="ios-restaurant" size={25} color={color} />;
  //           },
  //         }}
  //       />
  //       <Tab.Screen
  //         name="favorite"
  //         component={Favnav}
  //         options={{
  //           tabBarIcon: ({ color }) => {
  //             return <Ionicons name="ios-star" size={25} color={color} />;
  //           },
  //         }}
  //       />
  //     </Tab.Navigator>
  // } else {
  const TabNav = () => (
    <Tab.Navigator activeColor="white" shifting={true}>
      <Tab.Screen
        name="meals"
        component={MealNav}
        options={{
          tabBarColor: "#4a14aC",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favnav}
        options={{
          tabBarColor: "#f5a442",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
  const Filter = () => (
    <FilterNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4a14aC",
        },
        headerTintColor: "white",
      }}
    >
      <FilterNavigator.Screen
        name="filter meals"
        component={FilterScreen}
        options={({ navigation }) => ({
          title: "filter meals",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="toggel"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </FilterNavigator.Navigator>
  );
  return (
    <NavigationContainer>
      <MainNav.Navigator drawerContentOptions={{activeTintColor:"#f5a442"}} >
        <MainNav.Screen name="meals favorits" component={TabNav} />
        <MainNav.Screen name="filters" component={Filter} />
      </MainNav.Navigator>
    </NavigationContainer>
  );
}
