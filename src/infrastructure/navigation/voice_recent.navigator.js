import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Redesigned_Home_Screen from "../../views/home_views/home_redesigned.view";
import Voice_and_recent_View from "../../views/voice_and_recent_views/voice_and_recent.view";
import RecentMessagesScreen from "../../views/home_views/recents_messages.view";
import Menu_Screen from "../../views/home_views/menu.view"; // Assuming this is the correct import for the menu screen
import Messages_by_Categories_Screen from "../../views/home_views/messages_by_categories.view"; // Assuming this is the correct import for the messages by categories screen
import { Recent_Text_Clip_View } from "../../views/voice_and_recent_views/recent_text_clip.view";

const VoiceStack = createNativeStackNavigator();

export const Voice_and_recent_navigator = () => {
  return (
    <VoiceStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <VoiceStack.Screen name="Home_View" component={Voice_and_recent_View} />
      <VoiceStack.Screen name="Recents_View" component={RecentMessagesScreen} />
      <VoiceStack.Screen name="Menu_View" component={Menu_Screen} />
      <VoiceStack.Screen
        name="Messages_by_categories_View"
        component={Messages_by_Categories_Screen}
      />
      <VoiceStack.Screen
        name="Recent_Text_Clip_View"
        component={Recent_Text_Clip_View}
      />
    </VoiceStack.Navigator>
  );
};
