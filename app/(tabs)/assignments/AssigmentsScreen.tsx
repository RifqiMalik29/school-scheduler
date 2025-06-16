import { BaseText, BaseView } from "@/app/base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import AssignmentFunction from "./assignments.logic";
import SegmentedControl from "./components/SegmentedControl/SegmentedControl";

const AssigmentsScreen = () => {
  const { dummyData, groupByDate } = AssignmentFunction();
  const grouped = groupByDate(dummyData);

  return (
    <BaseView backgroundColor="#010618" flex={1} paddingHorizontal={16}>
      <View style={{ paddingTop: 24, alignSelf: "center" }}>
        <SegmentedControl />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(grouped).map(([label, items]) => {
          return (
            <View key={label}>
              <BaseText
                color="#FFF"
                fontSize={20}
                fontWeight="bold"
                style={{ marginVertical: 20 }}
              >
                {label}
              </BaseText>

              {items.map((assignment, i) => {
                const isFirstIndex = i === 0;
                return (
                  <React.Fragment key={assignment.class}>
                    <BaseView
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <BaseText
                        color={assignment.color}
                        fontSize={14}
                        fontWeight="bold"
                        style={[
                          { marginBottom: 14 },
                          !isFirstIndex && { marginTop: 14 },
                        ]}
                      >
                        {assignment.class} - {assignment.title}
                      </BaseText>
                      <TouchableOpacity>
                        <Ionicons
                          name="pencil"
                          color={assignment.color}
                          size={16}
                        />
                      </TouchableOpacity>
                    </BaseView>

                    {assignment.task.map((task, i) => {
                      const isFirstTask = i === 0;
                      return (
                        <View
                          key={`task ${i}`}
                          style={!isFirstTask && { marginTop: 14 }}
                        >
                          <BaseView flexDirection="row" alignItems="center">
                            <Checkbox status={task.completed ? 'checked' : 'unchecked'} color={assignment.color} />
                            <BaseText color="#FFF" fontSize={14}>
                              {task.title}
                            </BaseText>
                          </BaseView>
                          <BaseText color="#EBEBF599" fontSize={12}>
                            {task.note}
                          </BaseText>
                        </View>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </BaseView>
  );
};

export default AssigmentsScreen;
