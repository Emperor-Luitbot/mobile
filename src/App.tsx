import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { registerRootComponent } from "expo";
import RandomTable from "./components/RandomTable";

function App() {
  console.log("App");
  const items = [
    { chance: 0, key: "key1", description: "You die" },
    { chance: 1, key: "key2", description: "You live" }
  ];
  const randomFn = () => Math.round(Math.random(1));

  return (
    <View style={styles.container}>
      <RandomTable items={items} title={"Random Table 1"} randomFn={randomFn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Cochin",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default registerRootComponent(App); // this is how I register the App component
