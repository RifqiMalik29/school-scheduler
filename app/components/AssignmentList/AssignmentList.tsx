import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AssignmentListStyles } from ".";
import AssignmentExpanded from "./AssignmentExpanded";

const AssignmentList = () => {
  const styles = AssignmentListStyles.default;
  const [isExpanded, setIsExpanded] = useState(false);

  const onShrink = () => {
    setIsExpanded(false);
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => setIsExpanded(true)}
      disabled={isExpanded}
    >
      <View style={styles.etaContainer}>
        <Text style={styles.eta}>{!isExpanded && "Now"}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "stretch" }}>
        <Ionicons
          name="chevron-forward"
          size={12}
          color="#FFF"
          style={{ marginRight: 8 }}
        />
        <View style={styles.dateContainer}>
          <Text style={styles.time}>09:10 AM</Text>
          <Text style={styles.time}>10:00 AM</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.titleContainer}>
          <View style={styles.scheduleOption}>
            <Text style={styles.title}>MGT 101 - Organization Management</Text>
            {isExpanded && (
              <TouchableOpacity>
                <Ionicons name="settings" color="#FFC374" size={15} />
              </TouchableOpacity>
            )}
          </View>
          {isExpanded ? (
            <AssignmentExpanded onClose={onShrink} />
          ) : (
            <View style={styles.subTitleContainer}>
              <Text style={styles.location}>Room 101</Text>
              <View style={styles.subtitleSeparator} />
              <View style={styles.bubble}>
                <Text style={styles.bubbleText}>1</Text>
              </View>
              <Text style={styles.missing}>Missing assignment</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AssignmentList;
