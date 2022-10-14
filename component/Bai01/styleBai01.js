import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    paddingTop: 60,
    paddingBottom: 10,
    backgroundColor: "#eeeeee",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: 250,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
  },
  buttonAdd: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#0daeff",
  },
  titleButtonAdd: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  listItem: {},
});

export default styles;
