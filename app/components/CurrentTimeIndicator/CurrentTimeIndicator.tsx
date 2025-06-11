import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { CurrentTimeIndicatorStyles } from ".";

const HOUR_HEIGHT = 60; // 1 jam = 60px
const START_HOUR = 8; // hari dimulai jam 8 pagi

export default function CurrentTimeIndicator() {
  const [nowPosition, setNowPosition] = useState(0);
  const styles = CurrentTimeIndicatorStyles.default;

  const updatePosition = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalHours = hours + minutes / 60;
    const position = (totalHours - START_HOUR) * HOUR_HEIGHT;
    setNowPosition(position);
  };

  useEffect(() => {
    updatePosition(); // initial
    const interval = setInterval(updatePosition, 60 * 1000); // update tiap menit
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, { top: nowPosition }]}>
      <Ionicons
        name="triangle"
        color="#F66B6B"
        size={19}
        style={{ transform: [{ rotate: "90deg" }], margin: 0, padding: 0 }}
      />
      <View style={styles.line} />
    </View>
  );
}
