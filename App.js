import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lightBlueBox}>
        <Text styles={styles.title}>Light Blue box</Text>
      </View>
      <View style={styles.lightGreenBox}>
        <Text styles={styles.title}>Light Green box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  lightBlueBox: { 
    backgroundColor: "lightblue",
    width: 100,
    height: 100,
    padding: 10
  },
  lightGreenBox: { 
    backgroundColor: "lightgreen",
    width: 100,
    height: 100,
    padding: 10
  },
});
