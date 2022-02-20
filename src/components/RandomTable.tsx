import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import RollHistory from "./RollHistory";

const RandomTable = ({ items, randomFn, title }) => {
  const [rolls, addRoll] = useState([]);

  const renderItem = ({ item }) => {
    return <Row chance={item.chance} description={item.description} />;
  };

  const rollTable = () => {
    const numberRolled = randomFn();
    console.log("roll", numberRolled);
    addRoll((rolls) => [...rolls, numberRolled]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList style={styles.table} data={items} renderItem={renderItem} />
      <RollHistory rolls={rolls}></RollHistory>
      <TouchableOpacity style={styles.roll} onPress={rollTable}>
        <Text style={styles.rollLabel}>Roll</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Row = ({ chance, description }) => {
  return (
    <View style={styles.item}>
      <View style={styles.chance}>
        <Text>{chance}</Text>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    borderWidth: 2,
    borderColor: "green"
  },
  table: {
    flex: 1,
    marginTop: 15,
    borderColor: "purple"
  },
  title: {
    textAlign: "center",
    fontSize: 30
  },
  lastRoll: {},
  item: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f9c2ff",
    padding: 5,
    marginHorizontal: 4,
    fontSize: 14,
    borderColor: "red"
  },
  chance: {
    width: "10%",
    borderColor: "blue"
  },
  description: {
    width: "90%",
    borderColor: "blue"
  },
  roll: {
    backgroundColor: "#f194ff",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 10,
    border: 2,
    borderColor: "black",
    alignItems: "center",
    fontSize: 40
  },
  rollLabel: {
    fontSize: 20
  }
});

export default RandomTable;
