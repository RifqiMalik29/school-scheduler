import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "flex-start",
    borderWidth: 1,
    alignSelf: 'flex-start'
  },
  baseText: {
    fontSize: 16,
    fontWeight: "600",
  },
  primary: {
    backgroundColor: "#80B3FF", // contoh warna ungu
    borderColor: "#80B3FF",
  },
  primaryText: {
    color: "#000",
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: "#80B3FF",
  },
  secondaryText: {
    color: "#FFF",
  },
});
