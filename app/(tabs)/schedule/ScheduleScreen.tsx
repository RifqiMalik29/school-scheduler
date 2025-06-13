import React from "react";
import { ScrollView, Text, View } from "react-native";
import { DateWeekComponent, ScheduleCardComponent } from "./components";
import { ScheduleFunction } from "./schedule.logic";
import ScheduleStyles from "./schedule.styles";

const ScheduleScreen = () => {
  const HOUR_HEIGHT = 80;

  const styles = ScheduleStyles;
  const { selectActiveDate, days, hours, selectedDate } = ScheduleFunction();

  return (
    <View style={{ flex: 1, backgroundColor: "#010618" }}>
      <DateWeekComponent
        selectActiveDate={selectActiveDate}
        days={days}
        selectedDate={selectedDate}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          {/* Waktu di sisi kiri */}
          <View>
            {hours.map((hour) => (
              <View
                key={hour}
                style={{
                  height: HOUR_HEIGHT,
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.time}>
                  {hour % 12 === 0 ? 12 : hour % 12} {hour < 12 ? "AM" : "PM"}
                </Text>
              </View>
            ))}
          </View>

          {/* Container untuk garis horizontal + event */}
          <View style={{ flex: 1 }}>
            {/* Garis horizontal: tetap full width */}
            <View style={styles.timeSeparatorContainer}>
              {hours.map((_, index) => (
                <View
                  key={index}
                  style={{
                    height: HOUR_HEIGHT,
                    borderTopWidth: 1,
                    borderColor: "#3A3A3A",
                  }}
                />
              ))}
            </View>
            <ScheduleCardComponent />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScheduleScreen;
