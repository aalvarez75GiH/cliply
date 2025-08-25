import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Action_Container,
  Flex_Container,
} from "../../components/global_components/containers/general_containers.js";
import { Transcripted_Clips_Tile } from "../../components/tiles/transcripted_clip.tile.js";
import { theme } from "../../infrastructure/theme/index.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Platform } from "react-native";

export const Recent_Text_Clip_View = (route) => {
  const { item } = route.route.params;
  const { message_en, message_es, language_detected, message_id } = item;
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
            <Transcripted_Clips_Tile
              message_en={message_en}
              message_es={message_es}
              language_detected={language_detected}
              message_id={message_id}
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
              {Platform.OS === "ios" ? null : (
                <>
                  <Spacer position="top" size="extraLarge" />
                  <Spacer position="top" size="extraLarge" />
                  <Spacer position="top" size="medium" />
                </>
              )}
              <Spacer position="top" size="large" />
              <Squared_action_CTA_component
                action={null}
                label="Save text clip"
                width="95%"
                height={"65%"}
                color={theme.colors.ui.primary}
                text_variant={"dm_sans_bold_16_white"}
              />
              <Spacer position="top" size="medium" />
              <Squared_action_CTA_component
                label="Exit"
                width="95%"
                height={"65%"}
                color={theme.colors.ui.highlight_color}
                text_variant={"dm_sans_bold_16"}
                icon_visible={false}
                action={() => navigation.goBack()}
              />
            </Container>
          </Container>
        </Container>
      </SafeArea>
    </>
  );
};
