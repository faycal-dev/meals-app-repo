import React from "react";
import MealList from "../components/mealList";
import { MEALS } from "../data/dummy_data";

const FavoritsScreens = (props) => {
  const dummyfav = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList data={dummyfav} navigation={props.navigation} />;
};

export default FavoritsScreens;
