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

const RandomTable = ({ table }) => {
  const [rolls, addRoll] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <Item
        range={item.range}
        name={item.name}
        description={item.description}
      />
    );
  };

  const rollTable = () => {
    const numberRolled = table.roll();
    console.log("roll", numberRolled);
    addRoll((rolls) => [...rolls, numberRolled]);
  };

  return (
    <View style={styles.RandomTable}>
      <Text style={styles.title}>{table.name}</Text>
      <FlatList
        style={styles.table}
        data={table.rows}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />

      <TouchableOpacity style={styles.roll} onPress={rollTable}>
        <Text style={styles.rollLabel}>Roll</Text>
      </TouchableOpacity>
    </View>
  );
};

//<RollHistory rolls={rolls}></RollHistory>;

const Item = ({ range, name, description }) => {
  const rangeLabel = range.join("-");
  // console.log("name", name);

  return (
    <View style={styles.row}>
      <View style={styles.rowRange}>
        <Text>{rangeLabel}</Text>
      </View>
      <View style={styles.rowName}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RandomTable: {
    flex: 1,
    marginTop: 50,
    borderColor: "green"
  },
  table: {
    flex: 1,
    marginTop: 15,
    borderColor: "yellow"
  },
  title: {
    textAlign: "center",
    fontSize: 30
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f9c2ff",
    padding: 5,
    marginHorizontal: 4,
    fontSize: 14,
    borderColor: "red"
  },
  rowRange: {
    width: "15%",
    borderColor: "blue"
  },
  rowName: {
    width: "85%",
    borderColor: "blue"
  },
  roll: {
    backgroundColor: "#f194ff",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 10,
    borderColor: "black",
    alignItems: "center",
    fontSize: 40
  },
  rollLabel: {
    fontSize: 20
  }
});

export default RandomTable;
