import BaseButton from "@/app/base/BaseButton";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { AssignmentExpandedStyles } from ".";

type AssignmentExpandedProps = {
  onClose?: () => void;
};

const AssignmentExpanded = ({ onClose }: AssignmentExpandedProps) => {
  const styles = AssignmentExpandedStyles.default;

  return (
    <View>
      <Text style={styles.location}>Room 101</Text>
      <View style={styles.assignmentContainer}>
        <Text style={styles.assignment}>Assignments</Text>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>1</Text>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => (
          <View>
            <View style={styles.checklistSection}>
              <View style={styles.checklistTitleContainer}>
                <Checkbox status="checked" color="#FFC374" />
                <Text style={styles.checklistTitle}>Checklist Title</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="trash" color="#80B3FF" size={20} />
              </TouchableOpacity>
            </View>
            <Text style={styles.note}>Checklist Note</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <BaseButton
          title="Cancel"
          type="secondary"
          onPress={onClose}
          containerStyle={{ marginRight: 10 }}
        />
        <BaseButton title="+ Assignment" type="primary" />
      </View>
    </View>
  );
};

export default AssignmentExpanded;
