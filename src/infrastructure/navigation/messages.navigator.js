import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Messages_View from "../../views/messages_views/messages.view";
import Stage_1_Screen from "../../views/messages_views/messages_stages_views/messages_stage_1_screen";
import Stage_2_Screen from "../../views/messages_views/messages_stages_views/messages_stage_2_screen";
import Stage_3_Screen from "../../views/messages_views/messages_stages_views/messages_stage_3_screen";
import Stage_4_Screen from "../../views/messages_views/messages_stages_views/messages_stage_4_screen";
import Stage_5_Screen from "../../views/messages_views/messages_stages_views/messages_stage_5_screen";

const MessagesStack = createNativeStackNavigator();

export const Messages_Navigator = () => {
  return (
    <MessagesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MessagesStack.Screen name="Messages_View" component={Messages_View} />
      <MessagesStack.Screen name="Stage1_messages" component={Stage_1_Screen} />
      <MessagesStack.Screen name="Stage2_messages" component={Stage_2_Screen} />
      <MessagesStack.Screen name="Stage3_messages" component={Stage_3_Screen} />
      <MessagesStack.Screen name="Stage4_messages" component={Stage_4_Screen} />
      <MessagesStack.Screen name="Stage5_messages" component={Stage_5_Screen} />
    </MessagesStack.Navigator>
  );
};
