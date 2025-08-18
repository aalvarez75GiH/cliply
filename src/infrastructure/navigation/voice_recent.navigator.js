import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Voice_and_recent_View from "../../views/voice_and_recent_views/voice_and_recent.view";
import Menu_Screen from "../../views/text_clips_views/menu.view"; // Assuming this is the correct import for the menu screen
import { Recent_Text_Clip_View } from "../../views/voice_and_recent_views/recent_text_clip.view";
import Delete_Item_View from "../../views/global_views/delete_item.view";

const VoiceStack = createNativeStackNavigator();

export const Voice_and_recent_navigator = () => {
  return (
    <VoiceStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <VoiceStack.Screen name="Home_View" component={Voice_and_recent_View} />
      <VoiceStack.Screen name="Menu_View" component={Menu_Screen} />
      <VoiceStack.Screen
        name="Recent_Text_Clip_View"
        component={Recent_Text_Clip_View}
      />
      <VoiceStack.Screen name="Delete_Item_View" component={Delete_Item_View} />
    </VoiceStack.Navigator>
  );
};
