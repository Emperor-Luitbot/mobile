import React, { useState } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";

const Roll = (roll) => {
  return (
    <View style={styles.eachRoll}>
      <Text>{roll}</Text>
    </View>
  );
};
const RollHistory = ({ rolls }) => {
  console.log("Rolls", rolls);
  const renderItem = (roll) => {
    return <Text>{roll}</Text>;
  };

  return (
    <View style={styles.rollHistory}>
      <Text>{rolls}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rollHistory: {
    borderColor: "green",
    borderWidth: 2
  },
  tableHistory: {},
  eachRoll: {}
});

export default RollHistory;
