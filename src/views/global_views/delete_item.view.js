import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { ExitHeader } from "../../components/headers/exit_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Delete_Plus_Label_CTA } from "../../components/calls_to_action/delete_plus_label.cta.js";
import { Action_Container } from "../../components/global_components/containers/general_containers.js";
import { Text } from "../../infrastructure/typography/text.component.js";

import { VoiceRecentClipsContext } from "../../infrastructure/services/voice_recents/voice_recent.context.js";

export default function Delete_Item_View({ route }) {
  const { item_id, user_id, item_to_delete_label } = route.params;
  const { delete_recent_clip, deletedStatus, setDeletedStatus } = useContext(
    VoiceRecentClipsContext
  );
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const deletingItemProcess = async (item_id, user_id) => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        await delete_recent_clip(item_id, user_id);
        // navigation.goBack();
      } catch (error) {
        console.error("Error deleting item:", error);
      } finally {
        setIsLoading(false);
      }
    }, 1500);
  };

  console.log("Delete_Item_View: item_id:", item_id);
  console.log("USER ID AT DELETE VIEW:", user_id);

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      {!deletedStatus && (
        <Container
          // color={"lightyellow"}
          width={"100%"}
          height={"100%"}
          align="center"
          justify="flex-start"
          // color={theme.colors.bg.elements_bg}
          color={theme.colors.bg.screens_bg}
        >
          <ExitHeader />

          <Container
            color={theme.colors.bg.elements_bg}
            //color={"lightyellow"}
            width={"100%"}
            height={"92%"}
            align="center"
            justify="center"
          >
            <Delete_Plus_Label_CTA
              action_1={() => deletingItemProcess(item_id, user_id)}
              action_2={() => navigation.goBack()}
              item_to_delete_label={item_to_delete_label}
              user_id={user_id}
              item_id={item_id}
              isLoading={isLoading}
            />
          </Container>
        </Container>
      )}
      {deletedStatus && (
        <Container
          // color={"lightyellow"}
          width={"100%"}
          height={"100%"}
          align="center"
          justify="center"
          // color={theme.colors.bg.elements_bg}
          color={theme.colors.bg.screens_bg}
        >
          <Action_Container
            width={"60%"}
            height={"10%"}
            align="center"
            justify="center"
            color={theme.colors.ui.success}
            //   border_radius="60px"
            onPress={() => {
              setDeletedStatus(false);
              navigation.goBack();
            }}
            style={{
              shadowColor: "#000", // iOS shadow color
              shadowOffset: { width: 1, height: 2 }, // iOS shadow offset
              shadowOpacity: 0.25, // iOS shadow opacity
              shadowRadius: 3.84, // iOS shadow radius
              elevation: 10, // Android shadow
            }}
          >
            <Text variant="dm_sans_bold_20_white">Deleted</Text>
          </Action_Container>
        </Container>
      )}
    </SafeArea>
  );
}
