import AssignmentList from "@/app/components/AssignmentList";
import HeaderCalendar from "@/app/components/HeaderCalendar/HeaderCalendar";
import React from "react";
import { FlatList, View } from "react-native";
import { TodayStyles } from ".";

const TodayScreen = () => {
  const styles = TodayStyles.default;
  return (
    <View style={styles.mainContainer}>
      <HeaderCalendar />
      <View style={styles.bodyContainer}>
        {/* <CurrentTimeIndicator /> */}
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => <AssignmentList />}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          style={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default TodayScreen;
