import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Text_Clips_View from "../../views/text_clips_views/text_clips.view";
import Text_Clips_by_Status_View from "../../views/text_clips_views/text_clips_by_status.view";
import Menu_Screen from "../../views/text_clips_views/menu.view";
import Quickies_Text_Clips_View from "../../views/text_clips_views/text clips operations areas/quickies_text_clips.view";
import Quick_Voice_Text_Clip from "../../views/work/status_views/quick_voice_text_clip";

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
        component={Text_Clips_by_Status_View}
      />
      <TextClipsStack.Screen
        name="Quickies_Text_Clips_View"
        component={Quickies_Text_Clips_View}
      />
      <TextClipsStack.Screen
        name="Quick_Voice_Text_Clip"
        component={Quick_Voice_Text_Clip}
      />
    </TextClipsStack.Navigator>
  );
};
