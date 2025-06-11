import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "#21283F",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 10,
  },
  etaContainer: {
    textAlign: "right",
    marginTop: -10,
  },
  eta: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 10,
    color: "#EBEBF599",
  },
  dateContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 12,
    color: "#FFF",
  },
  separator: {
    marginLeft: 12,
    width: 1.5,
    backgroundColor: "white",
  },
  titleContainer: {
    marginLeft: 10,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFC374",
    width: "70%",
    marginTop: -5,
  },
  subTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 12,
    color: "#EBEBF599",
  },
  subtitleSeparator: {
    width: 1,
    height: "100%",
    backgroundColor: "#EBEBF599",
    marginHorizontal: 4,
  },
  missing: {
    color: "#FFF",
    fontSize: 12,
  },
  bubble: {
    backgroundColor: "#F66B6B",
    width: 15,
    height: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 4,
  },
  bubbleText: {
    fontSize: 10,
  },
  scheduleOption: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
