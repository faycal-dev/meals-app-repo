import React from "react";
import { MEALS } from "../data/dummy_data";
import MealList from "../components/mealList";

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.CategoryId;
  const catTitle = props.route.params.categoryTitle;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList data={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
