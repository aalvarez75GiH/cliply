import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Easing } from "react-native-reanimated"; // Optional, if you use custom animations

import HomeScreen from "../../views/home_views/home.view";
import RecentMessagesScreen from "../../views/home_views/recents_messages.view";
import Menu_Screen from "../../views/home_views/menu.view"; // Assuming this is the correct import for the menu screen

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home_View" component={HomeScreen} />
      <HomeStack.Screen name="Recents_View" component={RecentMessagesScreen} />
      <HomeStack.Screen name="Menu_View" component={Menu_Screen} />
    </HomeStack.Navigator>
  );
};
