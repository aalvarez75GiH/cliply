import React from "react";

import { Text } from "../../infrastructure/typography/text.component";
import { theme } from "../../infrastructure/theme/index";
import { Action_Container } from "../global_components/containers/general_containers";
import Arrow_next_icon from "../../../assets/my-icons/arrow_next_icon.svg";
import { Spacer } from "../global_components/optimized.spacer.component";

export const Squared_action_CTA_component = ({ action }) => {
  return (
    <Action_Container
      width={"100%"}
      height={"12%"}
      justify="center"
      align="center"
      direction="row"
      // color={theme.colors.bg.screens_bg}
      color={theme.colors.ui.primary}
      // onPress={() => setRecordingStatus("idle")}
      onPress={action}
    >
      <Spacer position="left" size="large" />
      <Spacer position="left" size="large" />
      <Spacer position="left" size="medium" />
      <Text variant="transcripted_message_copied_caption">Transcribe</Text>
      <Spacer position="left" size="large" />
      <Arrow_next_icon
        width={20}
        height={20}
        fill={theme.colors.ui.secondary}
        style={{ marginLeft: 10 }}
      />
    </Action_Container>
  );
};
