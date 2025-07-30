import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../views/home_views/home.view";
import RecentMessagesScreen from "../../views/home_views/recents_messages.view";

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
    </HomeStack.Navigator>
  );
};
