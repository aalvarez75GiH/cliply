import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";

export const Home_process_area_3 = () => {
  return (
    <>
      <Container
        width={"100%"}
        height={"82%"}
        justify="center"
        align="center"
        //color={theme.colors.bg.screens_bg}
        color={"green"}
      >
        <Container
          width={"100%"}
          height={"88%"}
          justify="center"
          align="center"
          direction="row"
          color={theme.colors.bg.screens_bg}
          // color={"red"}
        >
          <ActivityIndicator size="small" color="#000000" />
          <Spacer position="left" size="large" />
          <Text variant="middle_screens_caption">Transcribing...</Text>
        </Container>
        <Container
          width={"100%"}
          height={"12%"}
          justify="center"
          align="center"
          direction="row"
          color={theme.colors.bg.screens_bg}
        />
      </Container>
    </>
  );
};
