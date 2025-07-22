import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home_View from "../../views/home_views/home.view";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home_View" component={Home_View} />
    </HomeStack.Navigator>
  );
};
