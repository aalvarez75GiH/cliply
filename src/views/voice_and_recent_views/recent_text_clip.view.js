import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Action_Container,
  Flex_Container,
} from "../../components/global_components/containers/general_containers.js";
import { Transcripted_Messages_Tile } from "../../components/messages_tiles/transcripted_message.tile.js";
import { theme } from "../../infrastructure/theme/index.js";
import { SemiRounded_Clear_CTA } from "../../components/calls_to_action/semi_rounded_clear.cta.js";
import { HomeHeader } from "../../components/headers/home_header.component.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";

export const Recent_Text_Clip_View = (route) => {
  const { item } = route.route.params;
  const { message_id, message_en, message_es, language_detected } = item;
  const navigation = useNavigation();
  return (
    <>
      <SafeArea background_color={theme.colors.bg.elements_bg}>
        <Container
          width="100%"
          height={"100%"}
          color={theme.colors.bg.screens_bg}
          justify="center"
          align="center"
        >
          <ExitHeader />
          <Container
            width={"100%"}
            height={"92%"}
            color={theme.colors.bg.screens_bg}
            //color={"green"}
            align="center"
            justify="center"
          >
            <Transcripted_Messages_Tile
              message_en={message_en}
              message_es={message_es}
              language_detected={language_detected}
            />
            <Container
              width={"100%"}
              height={"12%"}
              justify="center"
              align="center"
              direction="column"
              //color={"red"}
              style={{
                position: "absolute",
                top: 450,
              }}
              color={theme.colors.bg.screens_bg}
            >
              <Squared_action_CTA_component
                action={null}
                label="Tap here to save text clip"
                width="95%"
                height={"65%"}
                color={theme.colors.ui.primary}
                text_variant={"dm_sans_bold_18_white"}
              />
              <Spacer position="top" size="medium" />
              <Squared_action_CTA_component
                label="Exit"
                width="95%"
                height={"65%"}
                color={theme.colors.ui.highlight_color}
                text_variant={"dm_sans_bold_18"}
                icon_visible={false}
                action={() => navigation.goBack()}
              />
              {/* <SemiRounded_Clear_CTA action={null} /> */}
            </Container>
          </Container>
        </Container>
      </SafeArea>
    </>
  );
};
