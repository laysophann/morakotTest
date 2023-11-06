import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RegionFilterButton = ({ onFilter, region }) => {
  return (
    <TouchableOpacity onPress={() => onFilter(region)} style={styles.button}>
      <Text style={styles.buttonText}>Filter by {region}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 8,
    margin: 4,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default RegionFilterButton;
