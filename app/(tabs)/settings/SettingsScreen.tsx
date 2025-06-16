import { BaseText, BaseView } from "@/app/base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import SettingsFunction from "./settings.logic";

const SettingsScreen = () => {
  const { dummyUserData, dummyClassessData } = SettingsFunction();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BaseView flex={1} backgroundColor="#010618" paddingHorizontal={16}>
      <ScrollView>
        {/* PERSONAL SETTINGS */}
        <BaseView
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginBottom: 16 }}
        >
          <BaseText color="#FFF" fontSize={20} fontWeight="bold">
            Personal Settings
          </BaseText>
          <TouchableOpacity>
            <BaseView flexDirection="row" alignItems="center">
              <BaseText color="#FFF" fontSize={14}>
                Edit
              </BaseText>
              <Ionicons
                name="chevron-forward"
                color="#FFF"
                size={14}
                style={{ marginLeft: 4 }}
              />
            </BaseView>
          </TouchableOpacity>
        </BaseView>
        {dummyUserData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <BaseView flexDirection="row" alignItems="center">
                <Ionicons
                  name="person"
                  color="#EBEBF599"
                  size={14}
                  style={{ marginRight: 8 }}
                />
                <BaseText color="#EBEBF599" fontSize={14}>
                  {item.fullname}
                </BaseText>
              </BaseView>
              <View
                style={{
                  backgroundColor: "#EBEBF599",
                  height: 0.5,
                  marginVertical: 10,
                }}
              />
              <BaseView flexDirection="row" alignItems="center">
                <Ionicons
                  name="mail"
                  color="#EBEBF599"
                  size={14}
                  style={{ marginRight: 8 }}
                />
                <BaseText color="#EBEBF599" fontSize={14}>
                  {item.email}
                </BaseText>
              </BaseView>
            </React.Fragment>
          );
        })}

        {/* CLASSESS SETTINGS */}
        <BaseView
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginVertical: 16 }}
        >
          <BaseText color="#FFF" fontSize={20} fontWeight="bold">
            Classes Settings
          </BaseText>
          <TouchableOpacity>
            <BaseView flexDirection="row" alignItems="center">
              <BaseText color="#80B3FF" fontSize={14}>
                Add Class
              </BaseText>
            </BaseView>
          </TouchableOpacity>
        </BaseView>
        <FlatList
          data={dummyClassessData}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: "#EBEBF599",
                height: 0.5,
                marginVertical: 12,
              }}
            />
          )}
          renderItem={({ item }) => (
            <BaseView
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              // style={{ paddingVertical: 16 }}
            >
              <BaseView flexDirection="row" alignItems="center">
                <View
                  style={{
                    backgroundColor: item.color,
                    width: 4,
                    minHeight: 40,
                    marginRight: 8,
                  }}
                />
                <BaseText color="#FFF" fontWeight="bold" fontSize={14}>
                  {item.code} - {item.name}
                </BaseText>
              </BaseView>
              <TouchableOpacity>
                <BaseView flexDirection="row" alignItems="center">
                  <BaseText color="#EBEBF599" fontSize={14}>
                    Edit
                  </BaseText>
                  <Ionicons
                    name="chevron-forward"
                    color="#EBEBF599"
                    size={14}
                    style={{ marginLeft: 4 }}
                  />
                </BaseView>
              </TouchableOpacity>
            </BaseView>
          )}
        />
        {/* APP SETTINGS */}
        <BaseText
          color="#FFF"
          fontSize={20}
          fontWeight="bold"
          style={{ marginTop: 32 }}
        >
          App Settings
        </BaseText>
        <View
          style={{
            backgroundColor: "#EBEBF599",
            height: 0.5,
            marginVertical: 10,
          }}
        />
        <BaseView
          style={{ alignSelf: "flex-start" }}
          flexDirection="row"
          alignItems="center"
        >
          <Switch
            trackColor={{ false: "#ccc", true: "#4AD2C9" }} // latar belakang
            thumbColor={isDarkMode ? "#ffffff" : "#f4f3f4"} // lingkaran
            ios_backgroundColor="#3e3e3e"
            onValueChange={setDarkMode}
            value={isDarkMode}
          />
          <BaseText fontSize={14} fontWeight="bold" color="#FFF">
            Dark Mode
          </BaseText>
        </BaseView>
        <View
          style={{
            backgroundColor: "#EBEBF599",
            height: 0.5,
            marginVertical: 10,
          }}
        />
        <TouchableOpacity>
          <BaseText fontSize={16} fontWeight="bold" color="red">
            Logout
          </BaseText>
        </TouchableOpacity>
      </ScrollView>
    </BaseView>
  );
};

export default SettingsScreen;
