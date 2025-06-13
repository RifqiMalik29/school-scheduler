import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ScheduleFunction } from "../schedule.logic";

const ScheduleCardComponent = () => {
  const HOUR_HEIGHT = 80;
  const COLUMN_WIDTH = 100;

  const { maxColumn, hours, events } = ScheduleFunction();
  return (
    <ScrollView horizontal style={{ flex: 1 }}>
      <View
        style={{
          width: (maxColumn + 1) * COLUMN_WIDTH,
          minHeight: hours.length * HOUR_HEIGHT,
        }}
      >
        {events.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={{
              position: "absolute",
              top: 5 + event.startHour * HOUR_HEIGHT,
              left: event.column * COLUMN_WIDTH,
              width: COLUMN_WIDTH - 8,
              height: event.duration * HOUR_HEIGHT - 8,
              backgroundColor: event.color,
              borderRadius: 12,
              padding: 8,
              zIndex: 1,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              {event.title}
            </Text>
            <Text style={{ fontSize: 12, color: "#000" }}>{event.room}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ScheduleCardComponent;
