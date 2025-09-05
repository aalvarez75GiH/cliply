import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Text_Clips_View from "../../views/text_clips_views/text_clips.view";
import Text_Clips_by_Status_View from "../../views/text_clips_views/text_clips_by_status.view";
import Menu_Screen from "../../views/text_clips_views/menu.view";
import Quickies_Text_Clips_View from "../../views/text_clips_views/text clips operations areas/quickies_text_clips.view";
import Work_Flow_View from "../../views/work/work_flow.view";

import Text_Clips_by_Status_View_1 from "../../views/work/status_views/status_1.view";
import Text_Clips_by_Status_View_2 from "../../views/work/status_views/status_2.view";
import Text_Clips_by_Status_View_3 from "../../views/work/status_views/status_3.view";
import Quick_Voice_Text_Clip from "../../views/work/status_views/quick_voice_text_clip";
import Menu_View from "../../views/work/menu.view";

import Register_User_View from "../../views/global_views/register_user.view";
import Login_User from "../../views/global_views/login_user.view";
const WorkFlowStack = createNativeStackNavigator();

export const Work_Flow_Navigator = () => {
  return (
    <WorkFlowStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <WorkFlowStack.Screen name="Home_View" component={Work_Flow_View} />

      <WorkFlowStack.Screen name="Menu_View" component={Menu_View} />
      <WorkFlowStack.Screen
        name="Clips_by_Status_View_1"
        component={Text_Clips_by_Status_View_1}
      />
      <WorkFlowStack.Screen
        name="Clips_by_Status_View_2"
        component={Text_Clips_by_Status_View_2}
      />
      <WorkFlowStack.Screen
        name="Clips_by_Status_View_3"
        component={Text_Clips_by_Status_View_3}
      />
      <WorkFlowStack.Screen
        name="Quickies_Text_Clips_View"
        component={Quickies_Text_Clips_View}
      />
      <WorkFlowStack.Screen
        name="Quick_Voice_Text_Clip"
        component={Quick_Voice_Text_Clip}
      />
    </WorkFlowStack.Navigator>
  );
};
