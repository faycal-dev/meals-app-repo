import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./mealItem";

const MealList = (props) => {
  const renderMealsCategory = (itemData) => {
    return (
      <MealItem
        onSelect={() => {
          props.navigation.navigate("MealDetailsScreen", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            title: itemData.item.title,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            image: itemData.item.imgUrl,
            ingrediants: itemData.item.ingredients,
            steps: itemData.item.steps
          });
        }}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imgUrl}
      />
    );
  };
  // const selectedCat = CATEGORIES.find((cat) => {cat.id === catId.CategoryId});
  // console.log(CATEGORIES.find((cat) => {cat.id === catId.CategoryId}))

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.data}
        renderItem={renderMealsCategory}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealList;
