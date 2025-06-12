import React from "react";
import { Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { AssignmentFormFunction, AssignmentFormStyles, useAssignmentForm } from ".";

const AssignmentForm = () => {
  const styles = AssignmentFormStyles.default;
  const {onBack, onChangeDetailForm, onChangeTitleForm, toggleSwitch, alertSwitch} = AssignmentFormFunction()
  const {titleForm, detailForm, isAllDay, isAlert} = useAssignmentForm()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.headerContainer, { fontWeight: "bold" }]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={styles.title}>New Assignment</Text>
        {/* TITLE FORM */}
        <View style={{ marginTop: 16 }}>
          <Text style={styles.formTitle}>Title</Text>
          <View style={styles.formBorder}>
            <TextInput
              placeholder="Eg. Read Book"
              multiline={false}
              placeholderTextColor="#EBEBF599"
              numberOfLines={1}
              value={titleForm}
              onChangeText={onChangeTitleForm}
              style={styles.formValue}
            />
          </View>
        </View>
        {/* CLASS NAME FORM */}
        <View style={{ marginTop: 16 }}>
          <Text style={styles.formTitle}>Class Name</Text>
          <View style={styles.formBorder}>
            <Text style={styles.formValue}>
              MGT 101 - Organization Management
            </Text>
          </View>
        </View>
        {/* DETAILS FORM */}
        <View style={{ marginTop: 16 }}>
          <Text style={styles.formTitle}>Details</Text>
          <View style={styles.formBorder}>
            <TextInput
              placeholder="Eg. Read from page 100 to 150"
              multiline
              placeholderTextColor="#EBEBF599"
              numberOfLines={4}
              value={detailForm}
              onChangeText={onChangeDetailForm}
              style={styles.formValue}
            />
          </View>
        </View>
        {/* PRIORITY CHECKBOX */}
        <View style={styles.checkboxContainer}>
          <Checkbox status="unchecked" color="#FFC374" />
          <Text style={styles.formValue}>Set as priority</Text>
        </View>
        <View style={styles.divider} />
        {/* DATE */}
        <View>
          <View style={styles.switchContainer}>
            <Text style={[styles.formValue, { fontWeight: "bold" }]}>
              All Day
            </Text>
            <Switch
              trackColor={{ false: "#ccc", true: "#4AD2C9" }} // latar belakang
              thumbColor={isAllDay ? "#ffffff" : "#f4f3f4"} // lingkaran
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isAllDay}
            />
          </View>
          <Text style={styles.information}>Monday, 18th Oct</Text>
        </View>
        <View>
          <View style={styles.switchContainer}>
            <Text style={[styles.formValue, { fontWeight: "bold" }]}>
              Alert
            </Text>
            <Switch
              trackColor={{ false: "#ccc", true: "#4AD2C9" }} // latar belakang
              thumbColor={isAlert ? "#ffffff" : "#f4f3f4"} // lingkaran
              ios_backgroundColor="#3e3e3e"
              onValueChange={alertSwitch}
              value={isAlert}
            />
          </View>
          <Text style={styles.information}>1 day before class</Text>
        </View>
      </View>
    </View>
  );
};

export default AssignmentForm;
