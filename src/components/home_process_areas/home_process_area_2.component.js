import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Text } from "../../infrastructure/typography/text.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";

export const Home_process_area_2 = ({ action }) => {
  return (
    <>
      <Container
        width={"100%"}
        height={"82%"}
        justify="space-between"
        align="center"
        color={theme.colors.bg.screens_bg}
        // color={"green"}
      >
        <Container
          width={"100%"}
          height={"88%"}
          justify="center"
          align="center"
          color={theme.colors.bg.screens_bg}
          //   color={"red"}
          direction="row"
        >
          <ActivityIndicator size="small" color="#000000" />
          <Spacer position="left" size="large" />
          <Text variant="middle_screens_caption">Listening...</Text>
        </Container>
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
          <Text variant="transcripted_message_copied_caption">Transcribe</Text>
        </Action_Container>
      </Container>
    </>
  );
};
