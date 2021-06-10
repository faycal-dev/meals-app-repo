import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGrid = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{
          backgroundColor: props.color,
          flex: 1,
          borderRadius: 10,
          shadowColor: "black",
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          elevation: 7,
          padding: 15,
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign:"right"
  },
});

export default CategoryGrid;
