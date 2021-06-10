import React from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";

const MealDetailsScreen = (props) => {
  const mealId = props.route.params.mealId;
  const mealTitle = props.route.params.mealTitle;
  return (
    <ScrollView>
      <Image source={{ uri: props.route.params.image }} style={styles.image} />
      <View style={styles.details}>
        <Text>{props.route.params.duration}m</Text>
        <Text>{props.route.params.complexity.toUpperCase()}</Text>
        <Text>{props.route.params.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.texteTitle}>Ingredients</Text>
      {props.route.params.ingrediants.map((ingrediant) => (
        <Text key={ingrediant}>{ingrediant}</Text>
      ))}
      <Text style={styles.texteTitle}>Steps</Text>
      {props.route.params.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  texteTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default MealDetailsScreen;
