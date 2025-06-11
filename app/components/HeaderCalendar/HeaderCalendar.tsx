import {
  addDays,
  format,
  isBefore,
  isSameDay,
  isWeekend,
  startOfDay,
  startOfWeek,
  subYears,
} from "date-fns";
import { enUS } from "date-fns/locale";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { HeaderCalendarStyles } from ".";

export default function HeaderCalendar() {
  const today = startOfDay(new Date());
  const [selectedDate, setSelectedDate] = useState(today);
  const [weekOffset, setWeekOffset] = useState(0);

  const currentWeekStart = addDays(
    startOfWeek(today, { weekStartsOn: 1 }),
    weekOffset * 7
  );

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(currentWeekStart, i);
    return {
      key: i.toString(),
      date,
      tasks: i === 1 ? 3 : 0, // dummy
    };
  });

  const styles = HeaderCalendarStyles.styles;

  return (
    <View style={styles.container}>
      {/* Header Date Title */}
      <Text style={styles.title}>
        {format(selectedDate, "MMMM do, yyyy", { locale: enUS })}
      </Text>

      {/* Scrollable Week Days */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => setWeekOffset((prev) => prev - 1)}>
          <Text style={styles.arrow}>{"‹"}</Text>
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.row}>
            {days.map((item) => {
              const isSelected = isSameDay(item.date, selectedDate);
              const weekend = isWeekend(item.date);
              const oneYearAgo = subYears(today, 1);
              const isTooOld = isBefore(item.date, oneYearAgo);


              return (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => setSelectedDate(item.date)}
                  disabled={isTooOld}
                  style={[
                    styles.dateItem,
                    isSelected && styles.dateItemActive,
                    weekend && styles.weekend,
                    isTooOld && styles.disabled,
                  ]}
                >
                  <Text
                    style={[
                      styles.dateText,
                      isSelected && styles.dateTextActive,
                      isTooOld && styles.disabledText,
                    ]}
                  >
                    {format(item.date, "d")}
                  </Text>
                  <Text
                    style={[
                      styles.dayText,
                      isSelected && styles.dateTextActive,
                      isTooOld && styles.disabledText,
                    ]}
                  >
                    {format(item.date, "EEE")}
                  </Text>

                  {item.tasks > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{item.tasks}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <TouchableOpacity onPress={() => setWeekOffset((prev) => prev + 1)}>
          <Text style={styles.arrow}>{"›"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
