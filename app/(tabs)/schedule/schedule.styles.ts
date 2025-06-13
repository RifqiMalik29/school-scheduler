import { StyleSheet } from "react-native";

const ScheduleStyles = StyleSheet.create({
  daysContentContainer: {
    gap: 12,
    flex: 1,
    justifyContent: "center",
  },
  daysButton: {
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#010618",
  },
  date: {
    fontWeight: "bold",
    fontSize: 20,
  },
  time: {
    color: "white",
    paddingHorizontal: 8,
    fontWeight: "bold",
  },
  timeSeparatorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  timeSeparator: {
    borderTopWidth: 1,
    borderColor: "#3A3A3A",
  },
});

export default ScheduleStyles;
