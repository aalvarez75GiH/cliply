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
  const { delete_one_recent_clip, deletedStatus, setDeletedStatus, isLoading } =
    useContext(VoiceRecentClipsContext);
  const navigation = useNavigation();

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
              action_1={() => delete_one_recent_clip(item_id, user_id)}
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
              //   navigation.goBack();
              navigation.popToTop();
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
