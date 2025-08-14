import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Redesigned_Home_Screen from "../../views/home_views/home_redesigned.view";
import Text_Clips_View from "../../views/text_clips_views/text_clips.view";
import RecentMessagesScreen from "../../views/home_views/recents_messages.view";
import Menu_Screen from "../../views/home_views/menu.view"; // Assuming this is the correct import for the menu screen
import Messages_by_Categories_Screen from "../../views/home_views/messages_by_categories.view"; // Assuming this is the correct import for the messages by categories screen

const TextClipsStack = createNativeStackNavigator();

export const Text_Clips_Navigator = () => {
  return (
    <TextClipsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TextClipsStack.Screen name="Home_View" component={Text_Clips_View} />
      <TextClipsStack.Screen
        name="Recents_View"
        component={RecentMessagesScreen}
      />
      <TextClipsStack.Screen name="Menu_View" component={Menu_Screen} />
      <TextClipsStack.Screen
        name="Messages_by_categories_View"
        component={Messages_by_Categories_Screen}
      />
    </TextClipsStack.Navigator>
  );
};
