import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "../../components/global_components/containers/general_containers.js";
import { Transcripted_Clips_Tile } from "../../components/tiles/transcripted_clip.tile.js";

import { theme } from "../../infrastructure/theme/index.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";

export const Transcripted_Text_Clip_View = ({
  message_en,
  message_es,
  language_detected,
  action_1,
  action_2,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <Container
        width={"100%"}
        height={"90%"}
        color={theme.colors.bg.screens_bg}
        // color={"green"}
        align="center"
        justify="center"
      >
        <Container
          width={"100%"}
          height={"60%"}
          color={theme.colors.bg.screens_bg}
          //color={"purple"}
          align="center"
          justify="flex-end"
        >
          <Transcripted_Clips_Tile
            message_en={message_en}
            message_es={message_es}
            language_detected={language_detected}
            width="95%"
            height="60%"
          />
        </Container>
        <Container
          width={"100%"}
          height={"40%"}
          justify="flex-start"
          align="center"
          direction="column"
          color={theme.colors.bg.screens_bg}
        >
          <Squared_action_CTA_component
            action={action_1}
            label="Tap here to save text clip"
            width="95%"
            height={"20%"}
            color={theme.colors.ui.primary}
            text_variant={"dm_sans_bold_16_white"}
          />
          <Spacer position="top" size="medium" />
          <Squared_action_CTA_component
            label="Exit"
            width="95%"
            height={"20%"}
            color={theme.colors.ui.highlight_color}
            text_variant={"dm_sans_bold_16"}
            icon_visible={false}
            action={action_2}
          />
        </Container>
      </Container>
    </>
  );
};
