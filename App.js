import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style inheritance <Text style={styles.boldText}>in bold</Text></Text>
      </View>
      <View style={[styles.lightGreenBg, styles.box, styles.boxShadow]}>
        <Text styles={styles.title}>Light Blue box</Text>
      </View>
      <View style={[ styles.box, styles.lightBlueBg, styles.androidShadow]}>
        <Text styles={styles.title}>Light Green box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  darkMode: {
    backgroundColor: "black",
    color:"white" // this wont work, because child class to this div will inherit the same color of parent div
  },
  darkModeText: {
    color: "white"
  },
  boldText:{
    fontWeight:"bold"
  },
  box: {
    width: 250, //25%
    height: 250,
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
  boxShadow: { //this applicable only for ios
    shadowColor: "#333333",
    shadowOffset:{
      width:6,
      height:6
    },
    shadowOpacity: 0.6, //0-1
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
    color:"#fffff"
  }
});
