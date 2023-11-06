import React from "react";
import { View, StyleSheet } from "react-native";
import CountryList from "./src/components/countryList";

export default function App() {
  return (
    <View style={styles.container}>
      <CountryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
