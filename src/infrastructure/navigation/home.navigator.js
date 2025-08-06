import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Easing } from "react-native-reanimated"; // Optional, if you use custom animations

import HomeScreen from "../../views/home_views/home.view";
import Redesigned_Home_Screen from "../../views/home_views/home_redesigned.view";
import RecentMessagesScreen from "../../views/home_views/recents_messages.view";
import Menu_Screen from "../../views/home_views/menu.view"; // Assuming this is the correct import for the menu screen
import Message_by_Categories_Screen from "../../views/home_views/messages_by_categories.view"; // Assuming this is the correct import for the messages by categories screen

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home_View" component={Redesigned_Home_Screen} />
      <HomeStack.Screen name="Recents_View" component={RecentMessagesScreen} />
      <HomeStack.Screen name="Menu_View" component={Menu_Screen} />
      <HomeStack.Screen
        name="Messages_by_categories_View"
        component={Message_by_Categories_Screen}
      />
    </HomeStack.Navigator>
  );
};
