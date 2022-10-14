import { StyleSheet, Text, View } from "react-native";

export default function Item({ item }) {
  return (
    <View style={styles.container}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 1,
    width: 320,
    flexDirection: "row",
    marginVertical: 4,
    padding: 10,
    borderRadius: 4,
  },
});
