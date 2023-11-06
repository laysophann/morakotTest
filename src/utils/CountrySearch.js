import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CountrySearch = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a country..."
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 8,
  },
});

export default CountrySearch;
