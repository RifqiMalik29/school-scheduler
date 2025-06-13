import { format, isSameDay } from "date-fns";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ScheduleStyles from "../schedule.styles";

type DayItems = {
  key: string;
  date: Date;
};

type DateWeekProps = {
  selectActiveDate: (params: Date) => void;
  days: DayItems[];
  selectedDate: Date;
};

const DateWeekComponent = ({
  selectActiveDate,
  days,
  selectedDate,
}: DateWeekProps) => {
  const styles = ScheduleStyles;
  return (
    <View style={{ marginLeft: 40 }}>
      <FlatList
        data={days}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContentContainer}
        renderItem={({ item }) => {
          const isDateActive = isSameDay(item.date, selectedDate);
          return (
            <TouchableOpacity
              style={[
                styles.daysButton,
                {
                  backgroundColor: isDateActive ? "#2A2F4F" : "transparent",
                },
              ]}
              onPress={() => {
                selectActiveDate(item.date);
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: isDateActive ? "#FFF" : "#AAA",
                }}
              >
                {format(item.date, "d")}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: isDateActive ? "#FFF" : "#AAA",
                }}
              >
                {format(item.date, "EEE")}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DateWeekComponent;
