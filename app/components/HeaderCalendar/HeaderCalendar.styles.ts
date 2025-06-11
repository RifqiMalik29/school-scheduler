import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#21283F",
        paddingTop: 50,
        paddingHorizontal: 12,
        paddingBottom: 16,
      },
      title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
      },
      controls: {
        flexDirection: "row",
        alignItems: "center",
      },
      arrow: {
        color: "white",
        fontSize: 32,
        paddingHorizontal: 10,
      },
      row: {
        flexDirection: "row",
        gap: 12,
      },
      dateItem: {
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginHorizontal: 2,
      },
      dateItemActive: {
        backgroundColor: "#66a6ff",
      },
      weekend: {
        backgroundColor: "#3b3f54",
      },
      disabled: {
        backgroundColor: "#2a2e42",
      },
      disabledText: {
        color: "#777",
      },
      dateText: {
        color: "#ccc",
        fontSize: 16,
        fontWeight: "bold",
      },
      dayText: {
        color: "#aaa",
        fontSize: 14,
      },
      dateTextActive: {
        color: "black",
      },
      badge: {
        backgroundColor: "#f66",
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginTop: 4,
      },
      badgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
      },
  });