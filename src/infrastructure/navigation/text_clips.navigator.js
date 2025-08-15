import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Text_Clips_View from "../../views/text_clips_views/text_clips.view";
import Menu_Screen from "../../views/home_views/menu.view"; // Assuming this is the correct import for the menu screen
import Text_Clips_by_Operations_And_Status_View from "../../views/text_clips_views/text_clips_by_operation_and_status.view";

const TextClipsStack = createNativeStackNavigator();

export const Text_Clips_Navigator = () => {
  return (
    <TextClipsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TextClipsStack.Screen name="Home_View" component={Text_Clips_View} />

      <TextClipsStack.Screen name="Menu_View" component={Menu_Screen} />
      <TextClipsStack.Screen
        name="Clips_by_Operations_And_Status_View"
        component={Text_Clips_by_Operations_And_Status_View}
      />
    </TextClipsStack.Navigator>
  );
};
