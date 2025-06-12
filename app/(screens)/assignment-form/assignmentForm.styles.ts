import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#010618",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 48,
    backgroundColor: "#21283F",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerText: {
    color: "#80B3FF",
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  formTitle: {
    color: "#EBEBF599",
    fontSize: 14,
    marginBottom: 8,
  },
  formBorder: {
    borderColor: "#EBEBF599",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  formValue: {
    color: "#FFF",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#EBEBF599",
    marginVertical: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  information: { fontSize: 14, color: "#80B3FF", fontWeight: "bold" },
});
