import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 19,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#F66B6B",
    marginLeft: -4,
  },
});