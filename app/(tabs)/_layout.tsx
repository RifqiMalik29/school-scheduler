import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AssigmentsScreen from "./assignments";
import { ScheduleScreen } from "./schedule";
import SettingsScreen from "./settings";
import TodayScreen from "./today";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010618",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: 32,
        },
        tabBarStyle: {
          backgroundColor: "#21283F",
        },
        tabBarActiveTintColor: "#80B3FF",
        tabBarInactiveTintColor: "#EBEBF599",
      }}
      initialRouteName="Today"
    >
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar-clear-outline"
              size={18}
              color={focused ? "#80B3FF" : "#EBEBF599"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmarks-outline"
              size={18}
              color={focused ? "#80B3FF" : "#EBEBF599"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Assignments"
        component={AssigmentsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="list-outline"
              size={18}
              color={focused ? "#80B3FF" : "#EBEBF599"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cog-outline"
              size={18}
              color={focused ? "#80B3FF" : "#EBEBF599"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
