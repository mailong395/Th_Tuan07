import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenBai01 from "./component/Bai01/IndexBai01";
import ScreenBai02 from "./component/Bai02/IndexBai02";

export default function App() {
  const [screen, setScreen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        {screen ? <ScreenBai02 /> : <ScreenBai01 />}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen(false)}
        >
          <Text style={styles.buttonTitle}>Bai 01</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setScreen(true)}>
          <Text style={styles.buttonTitle}>Bai 02</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    width: "100%",
  },
  button: {
    backgroundColor: "#0daeff",
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonTitle: {
    fontWeight: "700",
    fontSize: 18,
    color: "#fff",
  },
});
