import React from "react";
import { StyleSheet, Text, View, SafeAreaView, LogBox } from "react-native";
import { registerRootComponent } from "expo";
import RandomTable from "./components/RandomTable";
import * as minormis from "./tables/minormis.json";
import Table from "./models/table";

LogBox.ignoreLogs(["Remote debugger"]);

function App() {
  const myFirstTable = new Table(minormis.name, minormis.rows, minormis.die);
  //console.log("myFirstTable", myFirstTable);
  return (
    <SafeAreaView style={styles.root}>
      <RandomTable table={myFirstTable} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "Cochin",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default registerRootComponent(App); // this is how I register the App component
