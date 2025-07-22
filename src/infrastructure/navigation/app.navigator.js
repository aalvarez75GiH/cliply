import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";
import { Messages_Navigator } from "./messages.navigator";
import { Type_Message_Navigator } from "./type_message.navigator";

import KeyBoardIcon from "../../../assets/my-icons/keyboard.svg";
import MessagesIcon from "../../../assets/my-icons/Messages_icon.svg";
import MicIcon from "../../../assets/my-icons/micIcon.svg";

import { theme } from "../theme";

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Messages":
      iconName = "home-outline";
      break;
    case "Type":
      iconName = "home-outline";
      break;
    // case "Settings":
    //   iconName = "settings";
    //   break;
    // Add more cases as needed for other screens
  }

  return {
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name={iconName} color={color} size={size} />
    ),
  };
};

const tabBarListeners = ({ navigation, route }) => ({
  tabPress: () => navigation.navigate(route.name),
});

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#898989",
        tabBarInactiveTintColor: "#000000",
        headerShown: false,
        tabBarBackground: undefined,
        tabBarStyle: Platform.select({
          ios: {
            height: 90,
            paddingTop: 14, // Increase height for larger icons
            backgroundColor: "#FFFFFF", // Transparent background for blur effect
          },
          default: {
            height: 100,
            paddingTop: 14, // Increase height for larger icons
            backgroundColor: "#FFFFFF", // Transparent background for blur effect
          },
        }),

        tabBarLabelStyle: {
          fontSize: 12, // Increase font size
          fontWeight: "bold", // Optional: Make it bold
          paddingTop: 5, // Adjust padding for better spacing
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        listeners={tabBarListeners}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MicIcon width={30} height={30} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages_Navigator}
        listeners={tabBarListeners}
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <MessagesIcon width={35} height={35} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Type"
        component={Type_Message_Navigator}
        listeners={tabBarListeners}
        options={{
          title: "Type",
          tabBarIcon: ({ color }) => (
            <KeyBoardIcon width={30} height={30} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
