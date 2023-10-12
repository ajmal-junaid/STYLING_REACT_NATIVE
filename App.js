import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightGreenBg, styles.box]}>
        <Text styles={styles.title}>Light Blue box</Text>
      </View>
      <View style={[ styles.box, styles.lightBlueBg]}>
        <Text styles={styles.title}>Light Green box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100, //25%
    height: 100,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple", 
    borderStyle: "solid"
  },
  lightBlueBg: { 
    backgroundColor: "lightblue",
    
  },
  lightGreenBg: { 
    backgroundColor: "lightgreen",
  },
});
